import { http } from '@/plugins/axios'

export function getArticleList(page = 1, cid?: any) {
  const url = `article?page=${page}&` + (cid ? `category=${cid}` : '')

  return http.request<ApiPage<ArticleModel>>({
    url,
  })
}

export async function getArticleDetail(id: number) {
  const r = await http
    .request<ApiData<ArticleModel>>({
      url: `article/${id}`,
    })
    .then((r) => r.data)
  return r
}
