import { connectDB, UserModel } from '@/lib/db'
import { NextApiRequest, NextApiResponse } from 'next'
import { UserInfo } from '@/types/user'
// 连接数据库
connectDB()

export default async function handler(req: NextApiRequest, res: NextApiResponse<UserInfo>) {
  if (req.method === 'GET') {
    try {
      const user = await UserModel.findOne()
      res.status(200).json({
        state: 200,
        msg: '',
        data: user,
      })
    } catch (error) {
      const errorResponse: any = error
      res.status(400).json(errorResponse)
    }
  }

  if (req.method === 'POST') {
    try {
      const body = req.body
      UserModel.create(body)
      res.status(200).json({
        state: 200,
        msg: '添加成功',
        data: body,
      })
    } catch (error) {
      const errorResponse: any = error
      res.status(400).json(errorResponse)
    }
  }
}
