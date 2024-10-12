import { connectDB } from '@/lib/db';
import { resultProps } from '@/types/user';
import { NextApiRequest, NextApiResponse } from 'next';

import { MemberModel as userModel } from '@/lib/member';
export default async function handler(req: NextApiRequest, res: NextApiResponse<resultProps>): Promise<void> {
  // 连接数据库
  await connectDB();
  if (req.method === 'POST') {
    try {
      const body = req.body;
      const item = await userModel.findOne({ id: body.id, type: body.type });


      let create
      let msg
      if (item) {
        create = await userModel.findByIdAndUpdate(item._id, body, { new: true, runValidators: true })
        msg = '更新成功'
      } if (!Object.keys(body).includes('id')) {
        const result = await userModel.find();
        const last = result.slice(-1);
        let id = null;
        if (last.length > 0) {
          id = Number(last[0].id) + 1;
        } else {
          id = 1;
        }
        body.id = id;
      }
      create = await userModel.create(body);
      msg = '添加成功'

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
