<script setup lang="ts">
import articleList from '@/components/hd/articleList.vue'
import { useRoute } from 'vue-router'
const route = useRoute()
</script>
<template>
  <div>
    <article-list :cid="route.params.cid" :key="+route.params.cid" />
  </div>
</template>

<style scoped></style>
