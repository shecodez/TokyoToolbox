<script setup>
import { formatDate } from '~~/utils';

const blogNavQuery = queryContent('blog');
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
  <div class="container mx-auto pt-16 lg:pt-24 pb-20 lg:pb-28">
    <div class="border-b border-b-gray-200 pb-3 mb-2">
      <h2 class="text-2xl lg:text-4xl font-bold tracking-tight">Blog</h2>
    </div>

    <section class="blog-categories flex divide-x">
      <client-only>
        <ContentNavigation v-slot="{ navigation }" :query="blogNavQuery">
          <div v-for="link of navigation[0].children" :key="link._path" class="px-2 first:pl-0">
            <NuxtLink :to="`/blog/categories/${link.title}`">{{ link.title }}</NuxtLink>
          </div>
        </ContentNavigation>
      </client-only>
    </section>

    <section class="my-10">
      <client-only>
        <div class="posts grid grid-flow-row-dense grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
          <div class="post p-4 col-span-2">example col-span-2 (opened)</div>
          <template v-if="posts.length" v-for="(p, i) in posts" :key="`post-${i}`">
            <div class="post flex">
              <div v-if="p.cover_image" class="flex-1 overflow-hidden">
                <img :src="`/${p.cover_image}`" :alt="p.title" class="post-img h-auto" />
              </div>
              <div class="flex-1 flex flex-col items-stretch p-4">
                <small class="category uppercase text-primary text-xs">
                  {{ p._path.split('/')[2].replace('-', ' ') }}
                </small>
                <h3 class="hover:text-primary leading-5 pb-2">
                  <NuxtLink :to="p._path" class="line-clamp-2" :title="p.title">{{ p.title }}</NuxtLink>
                </h3>
                <p class="line-clamp-3 text-xs tracking-wide font-thin leading-relazed">{{ p.description }}</p>
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
  @apply bg-gray-300 bg-opacity-70 dark:bg-gray-900 dark:bg-opacity-70;
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
</style>
