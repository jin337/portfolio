import { connectDB } from '@/lib/db';
import { ProjectModel } from '@/lib/model';
import { resultProps } from '@/types/user';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse<resultProps>): Promise<void> {
  // 连接数据库
  await connectDB();

  try {
    if (req.method === 'POST') {
      const body = req.body;
      const item = await ProjectModel.findOne({ key: body.key });

      let create
      let msg
      if (item) {
        create = await ProjectModel.findByIdAndUpdate(item._id, body, { new: true })
        msg = '更新成功'
      } else {
        create = await ProjectModel.create(body);
        msg = '添加成功'
      }

      const { _id, __v, ...rest } = create.toObject();

      res.status(200).json({
        state: 200,
        msg: msg,
        data: rest,
      });
    } else {
      res.status(405).json({
        state: 405,
        msg: 'Method Not Allowed',
      });
    }
  } catch (error) {
    const err = error as Error;
    res.status(500).json({
      state: 500,
      msg: '服务器错误',
      error: err.message
    });
  }
}
