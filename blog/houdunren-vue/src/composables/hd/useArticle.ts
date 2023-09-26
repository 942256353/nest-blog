import { addArticle, getArticleDetail, getArticleList } from '@/apis/article'
import { ref } from 'vue'

export default () => {
  const pageResult = ref<ApiPage<ArticleModel>>()
  let categoryId:any = null
  const article = ref<ArticleModel>()
  const all = async (page = 1, cid?: any) => {
    if (cid) categoryId = cid
    pageResult.value = await getArticleList(page, categoryId)
  }
  const find = async (id: number) => {
    article.value = await getArticleDetail(id)
  }
  const add = async (data: Record<string,any>) => {
    return addArticle(data)
  }
  return { all, pageResult, find, article,add}
}
