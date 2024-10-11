import { connectDB } from '@/lib/db';
import { resultProps } from '@/types/user';
import { NextApiRequest, NextApiResponse } from 'next';

import { UserModel } from '@/lib/model';
export default async function handler(req: NextApiRequest, res: NextApiResponse<resultProps>): Promise<void> {
  // 连接数据库
  await connectDB();
  if (req.method === 'GET') {
    try {
      const user = await UserModel.find({ id: 1 });
      if (user) {
        const userEN = user.find(e => e.type == 'en')
        const userCN = user.find(e => e.type == 'cn')

        res.status(200).json({
          state: 200,
          msg: '',
          data: {
            en: userEN || {},
            cn: userCN || {},
          },
        });
      } else {
        res.status(404).json({
          state: 404,
          msg: '用户未找到',
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
  } else {
    res.status(405).json({
      state: 405,
      msg: 'Method Not Allowed',
    });
  }
}
