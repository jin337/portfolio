import { connectDB } from '@/lib/db';
import { resultProps } from '@/types/user';
import { NextApiRequest, NextApiResponse } from 'next';

import { ProjectModel as userModel } from '@/lib/project';
export default async function handler(req: NextApiRequest, res: NextApiResponse<resultProps>): Promise<void> {
  // 连接数据库
  await connectDB();
  if (req.method === 'GET') {
    try {
      let filteredData
      if (Object.keys(req.query).length > 0) {
        const data = await userModel.findOne(req.query)
        const { _id, __v, user_id,...rest } = data.toObject();
        filteredData = rest
      } else {
        const data = await userModel.find()
        filteredData = data.map(item => {
          const { _id, __v, user_id,...rest } = item.toObject();
          return rest;
        });
      }

      res.status(200).json({
        state: 200,
        data: filteredData,
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
