export interface ExpProps {
  id: number
  logo: string
  position: string
  job_type: number
  base: string
  start_form: string
  end_to: string
  description: string
  tag_list: [string]
}
export interface proProps {
  id: number
  cover: string
  project_name: string
  description: string
  tag_list: [string]
  github_link: string
  link: string
}
export interface PropUser {
  id?: number
  type?: string
  cover?: string
  bannerbg?: string
  name?: string
  slogn?: string
  github_link?: string
  email?: string
  about?: [string]
  skills?: [string]
  experience_list?: ExpProps
  project_list?: proProps
}
export interface dataProps{
  en?:PropUser
  cn?:PropUser
}
export interface UserInfo {
  state: number | undefined
  msg: string | undefined
  data?: dataProps
}
