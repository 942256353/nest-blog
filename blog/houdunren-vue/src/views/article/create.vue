<script lang='ts' setup>
import WangEditor from '@/components/hd/wangEditor.vue';
const {add} = useArticle()
const {all,categories} = useCategory();
await all()
const article = ref({
    title:'',
    content:'',
    categoryId:''
})
const router = useRouter()
const onSubmit = async () => {
    try {
        await add(article.value)
        router.push('/')
    } catch (error) {
        
    }
}
</script>
<template>
<el-card shadow="always" :body-style="{padding:'20px'}" class="mt-3">
 <template #header>
   发表文章
 </template>
 
 <el-select v-model="article.categoryId" placeholder="请选择栏目" class="mb-2">
 <el-option v-for="category in categories" :key="category.id" :label="category.title" :value="category.id" />
</el-select>
 <el-input v-model="article.title" placeholder="请输入标题" clearable  class="mb-2"/>
 <WangEditor v-model="article.content" />
 {{article}}
<el-button class="mt-3" type="primary" size="default" @click="onSubmit(article)">保存提交</el-button>
</el-card>

</template>
<style lang='scss' scoped>
</style>