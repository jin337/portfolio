import { connectDB } from '@/lib/db';
import { resultProps } from '@/types/user';
import { NextApiRequest, NextApiResponse } from 'next';

import { ExperienceModel as userModel } from '@/lib/experience';
export default async function handler(req: NextApiRequest, res: NextApiResponse<resultProps>): Promise<void> {
  // 连接数据库
  await connectDB();
  if (req.method === 'POST') {
    try {
      const body = req.body;
      const item = await userModel.findOne({ id: body.id });

      let msg
      if (item) {
        const { acknowledged } = await userModel.deleteOne(item._id, body)
        msg = acknowledged ? '删除成功' : '删除失败'
      } else {
        msg = '未找到当前数据'
      }
      res.status(200).json({
        state: 200,
        msg: msg,
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
