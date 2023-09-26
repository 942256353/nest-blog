<script lang='ts' setup>
const {add} = useArticle()
import WangEditor from '@/components/hd/wangEditor.vue'

const content = ref('小谢')
</script>
<template>

<main class="mt-3">
    <WangEditor v-model="content"/>
    <el-button class="mt-3" type="primary" size="default" @click="add">保存提交</el-button>
</main>
</template>
<style lang='scss' scoped>
</style>