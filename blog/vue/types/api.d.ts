//请求响应结构
interface ApiData<T> {
  data: T
}

//分页请求响应结构
interface ApiPage<T> {
  data: T[]
  meta: {
    current_page: number
    page_now: number
    total: number
    total_page: number
  }
}
