<script setup lang="ts">
import animateList from '@/components/hd/animateList.vue'
import useArticle from '@/composables/hd/useArticle'

const { cid } = defineProps<{
  cid?: any
}>()
const { all, pageResult } = useArticle()
await all(1, cid)
</script>
<template>
  <main>
    <animate-list tag="div" :duration="2" :delay="0.1">
      <section v-for="(article, index) in pageResult?.data" :key="article.id" :data-index="index">
        <router-link :to="{ name: 'article.show', params: { id: article.id } }">
          {{ article.title }}
        </router-link>
        <aside @click="$router.push({ name: 'category.index', params: { cid: article.categoryId } })">
          {{ article.category.title }}
        </aside>
      </section>
    </animate-list>
    <div class="mt-5 border-t border-gray-100 pt-3">
      <el-pagination
        @current-change="all"
        :total="pageResult?.meta.total"
        :page-size="pageResult?.meta.page_now"
        :page-sizes="[20, 40, 80, 100]"
        background>
      </el-pagination>
    </div>
  </main>
</template>
<style lang="scss" scoped>
main {
  @apply pt-8;
  section {
    @apply mt-2 flex justify-between items-center;
    a {
      @apply bg-slate-200 text-gray-600 py-2 px-3 mb-2;
    }
    aside {
      @apply text-xs text-gray-500  font-bold cursor-pointer hidden md:flex;
    }
  }
}
</style>
