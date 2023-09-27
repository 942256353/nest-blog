<script lang="ts" setup>
  import useArticle from '@/composables/hd/useArticle'
  import useCategory from '@/composables/hd/useCategory'

  const { all, categories } = useCategory()
  const { all: getArticleList } = useArticle()
  all()
</script>
<template>
  <main class="font">
    <div class="log cursor-pointer" @click="$router.push('/')">
      <img src="../../../public/images/logo.png" alt="" class="w-[500px]" />
    </div>
    <nav>
      <section>
        <div v-for="category of categories" :key="category.id" :class="{ active: +$route.params.cid === category.id }"
          @click="$router.push({ name: 'category.index', params: { cid: category.id } })">
          {{ category.title }}
        </div>
      </section>
      <section>
        <el-button type="primary" size="default" @click="$router.push({name:'article.create'})"> 发表文章 </el-button>
        <el-button type="success" size="default" @click="$router.push({name:'login'})"> 管理员登录 </el-button>
      </section>
    </nav>
    <RouterView v-slot="{ Component, route }">
      <template v-if="Component">
        <component :is="Component" :key="route.fullPath" />
      </template>
    </RouterView>
  </main>
</template>
<style lang="scss" scoped>
  main.font {
    @apply bg-gray-50 md:shadow-md md:mt-5 md:w-[1000px] md:rounded-md m-auto p-5;

    nav {
      @apply flex md:flex-row flex-col md:items-center md:justify-between;

      section {
        @apply flex gap-2 items-center flex-wrap;

        div {
          @apply bg-slate-200 text-gray-700 py-2 px-3 mr-2 rounded-md cursor-pointer hover:shadow-lg duration-300;

          &.active {
            @apply bg-[#f39c12] text-gray-900;
          }
        }

        &:nth-of-type(2) {
          @apply flex justify-between mt-3 md:mt-0 ml-0;

          button {
            @apply flex-1;
          }
        }
      }
    }
  }
</style>