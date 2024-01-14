import { NextApiRequest, NextApiResponse } from 'next'

interface User {
  state: number | undefined
  msg: string | undefined
  data: object
}
const GET = (req: NextApiRequest, res: NextApiResponse<User>) => {
  return res.status(200).json({
    state: 200,
    msg: '',
    data: {
      cover: '/background.jpg',
      bannerbg: '/background.jpg',
      name: 'Jinjin You',
      slogn: 'A passionate full-stack developer.',
      github_link: 'https://github.com/jin337',
      linkedin_link: 'https://linkedin.com',
      email: 'jin337x@outlook.com',
      description: 'this is demo',
    },
  })
}
export default GET
