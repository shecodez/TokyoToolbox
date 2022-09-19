<script setup>
import { Icon } from '@iconify/vue';

import { formatDate } from '~~/utils';

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
            <div class="post aspect-video flex" :class="i % 2 === 0 && 'flex-row-reverse'">
              <div v-if="p.cover_image" class="flex-1 overflow-hidden">
                <img :src="`/${p.cover_image}`" :alt="p.title" class="post-img h-auto" />
              </div>
              <div class="flex-1 relative flex flex-col items-stretch p-4">
                <template v-if="p.cover_image">
                  <div v-if="i % 2 === 0" class="arrow arrow-right absolute top-10 -right-5"></div>
                  <div v-else class="arrow arrow-left absolute top-10 -left-5"></div>
                </template>

                <small class="topic uppercase text-primary text-xs pb-1">
                  <NuxtLink :to="`/blog/topics/${p._path.split('/')[2]}`" class="hover:underline">
                    {{ p._path.split('/')[2].replace('-', ' ') }}
                  </NuxtLink>
                </small>
                <h3 class="hover:text-primary lg:text-xl xl:text-2xl leading-5 pb-2">
                  <NuxtLink :to="p._path" class="line-clamp-2" :title="p.title">{{ p.title }}</NuxtLink>
                </h3>
                <p class="line-clamp-3 text-xs lg:text-base xl:text-lg tracking-wide font-thin leading-relazed">
                  {{ p.description }}
                </p>
                <br />
                <small v-if="p.date" class="text-xs uppercase mt-auto">{{ formatDate(new Date(p.date)) }}</small>
              </div>
            </div>
          </template>
          <template v-else>
            <p>No posts found.</p>
          </template>
        </div>
      </client-only>
    </section>

    <section>
      <NuxtPage />
    </section>
    <!-- <ContentList
          path="/blog"
          :query="{
            only: ['title', '_path', 'date', 'cover_image'],
            $sensitivity: 'base',
          }"
        >
          <template v-slot="{ list }">
            <ul class="flex flex-col gap-3">
              <li v-for="(p, i) in list.slice(0, 3)" :key="`recent-posts-${i}`" class="flex gap-4">
                <img :src="`/${p.cover_image}`" :alt="p.title" class="post-img h-11" />
                <p class="text-ellipsis overflow-hidden">
                  <NuxtLink :to="p._path" class="truncate" :title="p.title">{{ p.title }}</NuxtLink>
                  <br />
                  <small v-if="p.date" class="text-xs uppercase">{{ formatDate(new Date(p.date)) }}</small>
                </p>
              </li>
            </ul>
          </template>
          <template #not-found>
            <p>No posts found.</p>
          </template>
        </ContentList> -->
  </div>
</template>

<style scoped>
.post {
  @apply bg-gray-300 dark:bg-gray-900;
}
.line-clamp-2 {
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
}

.line-clamp-3 {
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
}

.post img {
  @apply h-full w-full object-cover;
}

.icon-link {
  @apply text-xl p-2 rounded bg-primary hover:bg-teal-700;
}

.arrow {
  width: 0;
  height: 0;
  border-top: 20px solid transparent;
  border-bottom: 20px solid transparent;
}
.arrow-right {
  border-left: 20px solid transparent;
  @apply border-l-gray-300 dark:border-l-gray-900;
}
.arrow-left {
  border-right: 20px solid transparent;
  @apply border-r-gray-300 dark:border-r-gray-900;
}
</style>
