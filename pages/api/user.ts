import { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  data: any
}

const about = ["I'm a front-end developer with 8 years of work experience", 'Welcome to Star, Fork and Issue']

export default function GET(req: NextApiRequest, res: NextApiResponse<Data>) {
  res.status(200).json({ data: about })
}
