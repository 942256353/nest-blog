import { getAllCategory } from '@/apis/categoey'
import { ref } from 'vue'
export default () => {
  const categories = ref<CategoryModel[]>()

  const all = async () => {
    categories.value = await getAllCategory().then((r) => r.data)
  }

  return { all, categories }
}
