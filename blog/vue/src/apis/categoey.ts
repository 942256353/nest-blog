import { http } from '@/plugins/axios'

export function getAllCategory() {
  return http.request<ApiData<CategoryModel[]>>({
    url: 'category',
  })
}
