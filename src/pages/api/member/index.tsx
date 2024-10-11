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
    try {
      const transObj = (arr: any[]) => {
        return arr.map(e => {
          const { _id, __v, user_id, ...rest } = e.toObject();
          return rest
        })
      }

      let filteredData
      if (Object.keys(req.query).length > 0) {
        const data = await userModel.findOne(req.query)
        const { _id, __v, ...rest } = data.toObject();

        const skills_data = await TagModel.find({ user_id: _id })
        const experience_data = await ExperienceModel.find({ user_id: _id })
        const project_data = await ProjectModel.find({ user_id: _id })

        const skills = transObj(skills_data)

        const experience_list = transObj(experience_data).map(e => ({
          ...e,
          tag_list: e.tag_list.map((element: number) => skills.find(e => e.key === element)?.value)
        }))

        const project_list = transObj(project_data).map(e => ({
          ...e,
          tag_list: e.tag_list.map((element: number) => skills.find(e => e.key === element)?.value)
        }))

        filteredData = {
          ...rest,
          skills: skills.map(e => e.value),
          experience_list,
          project_list
        }
      } else {
        const data = await userModel.find()
        filteredData = await Promise.all(
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
