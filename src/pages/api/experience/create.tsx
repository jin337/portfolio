import { connectDB } from '@/lib/db';
import { resultProps } from '@/types/user';
import { NextApiRequest, NextApiResponse } from 'next';

import { ExperienceModel } from '@/lib/model';
export default async function handler(req: NextApiRequest, res: NextApiResponse<resultProps>): Promise<void> {
  // 连接数据库
  await connectDB();
  if (req.method === 'POST') {
    try {
      const body = req.body;
      const item = await ExperienceModel.findOne({ id: body.id });

      let create
      let msg
      if (item) {
        create = await ExperienceModel.findByIdAndUpdate(item._id, body, { new: true, runValidators: true })
        msg = '更新成功'
      } else {
        const result = await ExperienceModel.find();
        const last = result.slice(-1);
        let id = null;
        if (last.length > 0) {
          id = Number(last[0].id) + 1;
        } else {
          id = 1;
        }
        body.id = id;
        create = await ExperienceModel.create(body);
        msg = '添加成功'
      }

      const { _id, __v, ...rest } = create.toObject();

      res.status(200).json({
        state: 200,
        msg: msg,
        data: rest,
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
