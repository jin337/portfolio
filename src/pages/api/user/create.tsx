import { connectDB } from '@/lib/db';
import { resultProps } from '@/types/user';
import { NextApiRequest, NextApiResponse } from 'next';

import { UserModel } from '@/lib/model';
export default async function handler(req: NextApiRequest, res: NextApiResponse<resultProps>): Promise<void> {
  // 连接数据库
  await connectDB();
  if (req.method === 'POST') {
    try {
      const body = req.body;
      const user = await UserModel.findOne({ id: body.id, type: body.type });
      let create
      let msg
      if (user) {
        create = await UserModel.findByIdAndUpdate(user._id, body, { new: true , runValidators: true })
        msg = '更新成功'
      } else {
        create = await UserModel.create(body);
        msg = '添加成功'
      }

      const { _id, __v, ...rest } = create.toObject();

      res.status(201).json({
        state: 201,
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
