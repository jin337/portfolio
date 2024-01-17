import { connectDB } from '@/lib/db';
import { UserModel } from '@/lib/model';
import { NextApiRequest, NextApiResponse } from 'next';
import { UserInfo } from '@/types/user';

interface ErrorResponse {
  state: number;
  msg: string;
  error?: string | Record<string, unknown>;
}


export default async function handler(req: NextApiRequest, res: NextApiResponse<UserInfo | ErrorResponse>): Promise<void> {
  // 连接数据库
  await connectDB();

  try {
    if (req.method === 'GET') {
      const user = await UserModel.findOne();
      if (user) {
        res.status(200).json({
          state: 200,
          msg: '',
          data: user,
        });
      } else {
        res.status(404).json({
          state: 404,
          msg: '用户未找到',
        });
      }
    } else if (req.method === 'POST') {
      const body = req.body;
      const createdUser = await UserModel.create(body);
      res.status(201).json({
        state: 201,
        msg: '添加成功',
        data: createdUser,
      });
    } else {
      res.status(405).json({
        state: 405,
        msg: 'Method Not Allowed',
      });
    }
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : '未提供详细错误消息';
    const errorResponse: ErrorResponse = {
      state: 500,
      msg: '服务器错误',
      error: errorMessage
    };
    res.status(500).json(errorResponse);
  }
}
