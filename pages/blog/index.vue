<script setup>
import { Icon } from '@iconify/vue';

const blogQuery = queryContent('blog')
  .only(['_path', 'title', 'description', 'date', 'cover_image'])
  .sort({ date: -1 })
  .find(); //; <ContentList :query="blogQuery">
const { data: posts } = await useAsyncData('blog', async () => {
  return await blogQuery;
});

const config = useRuntimeConfig();
useHead({
  title: `Blog | ${config.public.appName}`,
  meta: [{ name: 'description', content: `A place for ${config.public.appName}'s blog posts` }],
});
</script>

<template>
  <div class="relative">
    <div class="fixed flex flex-col justify-center inset-y-0 right-6 gap-6 z-50">
      <NuxtLink to="/blog/topics" class="icon-link" title="Topics">
        <Icon icon="ic:baseline-topic" />
        <span class="sr-only">Topics</span>
      </NuxtLink>
      <NuxtLink to="/blog/tags" class="icon-link" title="Tags">
        <Icon icon="fa6-solid:tags" />
        <span class="sr-only">Tags</span>
      </NuxtLink>
    </div>

    <section class="m-2">
      <client-only>
        <div class="posts grid grid-flow-row-dense grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
          <div class="post p-4 col-span-2">example col-span-2 (opened)</div>
          <div class="post p-4 row-span-2">example row-span-2</div>
          <template v-if="posts.length" v-for="(p, i) in posts" :key="`post-${i}`">
            <BlogGridPost :post="p" :showTextLeft="i % 2 === 0" />
          </template>
          <template v-else>
            <p>No posts found.</p>
          </template>
        </div>
      </client-only>
    </section>
  </div>
</template>

<style scoped>
.post {
  @apply bg-gray-300 dark:bg-gray-900;
}

.icon-link {
  @apply text-xl p-2 rounded bg-primary hover:bg-teal-700;
}
</style>
