<script lang="ts" setup>
import WangEditor from '@/components/hd/wangEditor.vue'

const route = useRoute()
const { find, article, update } = useArticle()
const { all, categories } = useCategory()
await find(+route.params.id)
await all()
const router = useRouter()
const onSubmit = async () => {
  try {
    await update(article.value!)
    router.push('/')
  } catch (error) {}
}
</script>
<template>
  <el-card shadow="always" :body-style="{ padding: '20px' }" class="mt-3" v-if="article">
    <template #header> 编辑 </template>

    <el-select v-model="article.categoryId" placeholder="请选择栏目" class="mb-2">
      <el-option v-for="category in categories" :key="category.id" :label="category.title" :value="category.id" />
    </el-select>
    <el-input v-model="article.title" placeholder="请输入标题" clearable class="mb-2" />
    <WangEditor v-model="article.content" />
    <el-button class="mt-3" type="primary" size="default" @click="onSubmit">保存提交</el-button>
  </el-card>
</template>
<style lang="scss" scoped></style>
