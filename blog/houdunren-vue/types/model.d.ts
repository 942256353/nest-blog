interface UserModel {
  id: number
  name: string
  email: string
  sex: number
  real_name?: any
  address?: any
  avatar?: any
  home?: any
  weibo?: any
  wechat?: any
  github?: string
  qq?: any
  wakatime?: string
  openid?: string
  unionid?: string
  created_at: string
  updated_at: string
}

interface ConfigModel {
  [key: string]: Record<string, any>
}

interface CategoryModel {
  id: number
  title: string
}

interface ArticleModel {
  id: number
  title: string
  content: string
  categoryId: number
  createdAt:string,
  updattedAt:string,
  category: {
    id: number
    title: string
  }
}
