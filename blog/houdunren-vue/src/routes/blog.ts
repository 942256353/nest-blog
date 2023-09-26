import { RouteRecordRaw } from 'vue-router'
export default {
  path: '/',
  component: () => import('@/layouts/front/index.vue'),
  children: [
    {
      name: 'article.index',
      path: '',
      component: () => import('@/views/article/index.vue'),
    },
    {
      name: 'article.show',
      path: 'article/:id',
      component: () => import('@/views/article/show.vue'),
    },
    {
      name: 'category.index',
      path: 'category/:cid',
      component: () => import('@/views/category/index.vue'),
    },
  ],
} as RouteRecordRaw
