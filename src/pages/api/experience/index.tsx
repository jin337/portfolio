import { connectDB } from '@/lib/db';
import { ExperienceModel } from '@/lib/model';
import { resultProps } from '@/types/user';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse<resultProps>): Promise<void> {
  // 连接数据库
  await connectDB();

  try {
    if (req.method === 'GET') {
      const data = await ExperienceModel.find();
      const filteredData = data.map(item => {
        const { _id, __v, ...rest } = item.toObject();
        return rest;
      });

      res.status(200).json({
        state: 200,
        data: filteredData,
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
