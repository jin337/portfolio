import { connectDB } from '@/lib/db';
import { UserModel } from '@/lib/model';
import { resultProps } from '@/types/user';
import { NextApiRequest, NextApiResponse } from 'next';


export default async function handler(req: NextApiRequest, res: NextApiResponse<resultProps>): Promise<void> {
  // 连接数据库
  await connectDB();

  try {
    if (req.method === 'GET') {
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
    } else if (req.method === 'POST') {
      const body = req.body;
      const user = await UserModel.findOne({ id: body.id, type: body.type });
      let createdUser
      let msg
      if (user) {
        await UserModel.findByIdAndUpdate(user._id, body)
        createdUser = body
        msg = '更新成功'
      } else {
        createdUser = await UserModel.create(body);
        msg = '添加成功'
      }
      res.status(201).json({
        state: 201,
        msg: msg,
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
    res.status(500).json({
      state: 500,
      msg: '服务器错误',
      error: errorMessage
    });
  }
}
