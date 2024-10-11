import { connectDB } from '@/lib/db';
import { resultProps } from '@/types/user';
import { NextApiRequest, NextApiResponse } from 'next';

import { TagModel as userModel } from '@/lib/tag';
export default async function handler(req: NextApiRequest, res: NextApiResponse<resultProps>): Promise<void> {
  // 连接数据库
  await connectDB();
  if (req.method === 'POST') {
    try {
      const body = req.body;
      const item = await userModel.findOne({ key: body.key });

      let create
      let msg
      if (item) {
        create = await userModel.findByIdAndUpdate(item._id, body, { new: true, runValidators: true })
        msg = '更新成功'
      } else {
        create = await userModel.create(body);
        msg = '添加成功'
      }

      const { _id, __v, ...rest } = create?.toObject();

      res.status(200).json({
        state: 200,
        msg: msg,
        data: rest,
      });
    } catch (error) {
      const err = error as Error;
      // 类型校验
      if (err.name === 'ValidationError') {
        const simplifiedErrors = Object.values((err as any).errors).map((e: any) => e.message);
        res.status(400).json({
          state: 400,
          msg: '验证错误',
          error: simplifiedErrors.join(', ')
        });
      } else {
        // 其他错误
        res.status(500).json({
          state: 500,
          msg: '服务器错误',
          error: err.message || '未知错误',
        });

      }
    }
  } else {
    res.status(405).json({
      state: 405,
      msg: 'Method Not Allowed',
    });
  }
}
