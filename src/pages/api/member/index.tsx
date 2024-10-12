import { connectDB } from '@/lib/db';
import { resultProps } from '@/types/user';
import { NextApiRequest, NextApiResponse } from 'next';

import { MemberModel as userModel } from '@/lib/member';

import { ExperienceModel } from '@/lib/experience';
import { ProjectModel } from '@/lib/project';
import { TagModel } from '@/lib/tag';
export default async function handler(req: NextApiRequest, res: NextApiResponse<resultProps>): Promise<void> {
  // 连接数据库
  await connectDB();
  if (req.method === 'GET') {
    const transObj = (arr: any[]) => {
      return arr?.map(e => {
        const { _id, __v, ...rest } = e.toObject();
        return rest
      })
    }

    try {
      let filteredData

      if (Object.keys(req.query).length > 0) {
        const { id } = req.query

        const user = await userModel.find({ id });

        const uid = user[0].id
        const skills_data = await TagModel.find({ user_id: uid })
        const experience_data = await ExperienceModel.find({ user_id: uid })
        const project_data = await ProjectModel.find({ user_id: uid })

        const skills = transObj(skills_data)
        const experience_list = transObj(experience_data).map(e => ({
          ...e,
          tag_list: e.tag_list.map((element: number) => skills.find(e => e.key === element)?.value)
        }))
        const project_list = transObj(project_data).map(e => ({
          ...e,
          tag_list: e.tag_list.map((element: number) => skills.find(e => e.key === element)?.value)
        }))

        const personal: any = {}
        user.forEach(({ type }: any) => {
          personal[type] = transObj(user).find(e => e.type == type)
          personal[type].skills = skills.map(e => e.value)
          personal[type].experience_list = experience_list
          personal[type].project_list = project_list
        });

        filteredData = personal
      } else {
        const data = await userModel.find()
        const newData = await Promise.all(
          data.map(async item => {
            const { _id, __v, ...rest } = item.toObject();
            const skills_data = await TagModel.find({ user_id: _id });
            const experience_data = await ExperienceModel.find({ user_id: _id });
            const project_data = await ProjectModel.find({ user_id: _id });

            const skills = transObj(skills_data);

            const experience_list = transObj(experience_data).map(e => ({
              ...e,
              tag_list: e.tag_list.map((element: number) => skills.find(e => e.key === element)?.value),
            }));

            const project_list = transObj(project_data).map(e => ({
              ...e,
              tag_list: e.tag_list.map((element: number) => skills.find(e => e.key === element)?.value),
            }));

            return {
              ...rest,
              skills: skills.map(e => e.value),
              experience_list,
              project_list,
            };
          })
        );
        // 分组
        const transformArray = (arr: any) => {
          return arr.reduce((acc: any, curr: any) => {
            const existingItem = acc.find((e: any) => e.id === curr.id);

            if (existingItem) {
              existingItem[curr.type] = { ...curr };
            } else {
              const newItem: any = { id: curr.id };
              newItem[curr.type] = { ...curr };
              acc.push(newItem);
            }
            return acc;
          }, []);
        };

        filteredData = transformArray(newData);
      }

      res.status(200).json({
        state: 200,
        data: filteredData,
      });
    } catch (error) {
      const err = error as Error;
      res.status(500).json({
        state: 500,
        msg: '服务器错误',
        error: err.message
      });
    }
  } else {
    res.status(405).json({
      state: 405,
      msg: 'Method Not Allowed',
    });
  }
}
