<script setup>
import { Icon } from '@iconify/vue';

import { formatDate } from '~~/utils';

defineProps(['data']);
</script>

<template>
  <div class="post-container">
    <NuxtLink to="/blog" class="flex items-center gap-2 hover:text-primary">
      <Icon icon="bi:arrow-left" />
      Back to Blog
    </NuxtLink>

    <header v-if="data.post" class="post-header">
      <div v-if="data.post.cover_image" class="cover-img-container h-72 mb-12">
        <img :src="`/${data.post.cover_image}`" :alt="data.post.title" class="rounded-2xl" />
      </div>
      <small v-if="data.post.date" class="text-xs">{{ formatDate(new Date(data.post.date)) }}</small>
      <h1 class="rainbow-text title">{{ data.post.title }}</h1>
      <h4 v-if="data.post.author" class="text-gray-400">by: {{ data.post.author }}</h4>
      <p class="topic">
        in
        <span class="uppercase text-primary">{{ data.post._path.split('/')[2].replace('-', ' ') }}</span>
      </p>
      <br />
      <ul v-if="data.post.tags" class="post-tags">
        <li class="tag" v-for="(tag, n) in data.post.tags" :key="n">{{ tag }}</li>
      </ul>
    </header>
    <hr class="border-primary" />

    <section class="post">
      <aside v-if="!!data.post.body.toc.links.length" class="left-aside">
        <Toc :links="data.post.body.toc.links" />
      </aside>

      <article class="article post-first-letter prose dark:prose-invert prose-sm lg:prose-lg">
        <client-only>
          <ContentRenderer :value="data.post">
            <template #empty>
              <p>No content found.</p>
            </template>
          </ContentRenderer>
        </client-only>
      </article>

      <!-- <aside class="right-aside">
              <div class="border rounded-lg w-full h-96">Ad</div>
            </aside>  -->
    </section>
  </div>
</template>

<style scoped>
.post-container {
  @apply py-4 px-4 md:px-0 max-w-5xl m-auto;
}
.post-header {
  @apply py-4;
}
.cover-img-container img {
  @apply h-full w-full object-cover;
}
.post-header .title {
  @apply font-extrabold text-5xl pb-4;
}
.post-header .topic {
  @apply font-medium text-lg;
}
.post-tags {
  @apply flex gap-2 py-2;
}
.post-tags .tag {
  @apply rounded-md bg-gray-200 px-2 py-0.5 text-sm text-gray-900 transition-all;
}
.post-tags .tag:hover {
  @apply -translate-y-0.5;
}

section.post {
  @apply grid grid-cols-8 gap-8 pt-4;
}
.right-aside,
.left-aside {
  @apply col-span-full md:col-span-2 row-start-1 w-full mt-6;
}
aside > .toc {
  @apply sticky top-24;
}
.article {
  @apply col-span-full md:col-span-6 w-full;
}
.post-first-letter {
  @apply first-letter:text-3xl first-letter:text-primary;
}
</style>
