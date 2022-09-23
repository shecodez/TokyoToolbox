<script setup>
import { Icon } from '@iconify/vue';

import { formatDate } from '~~/utils';

defineProps(['post', 'showTextLeft', 'showMediaOnly']);

const postTypeClasses = [
  { type: 'height-2x', classes: 'row-span-2' }, // post.type === 'gallery'
  { type: 'text-only', classes: 'p-text-xl' }, // post.type === 'quote'
];
// post.isMediaOnly -> can be post.cover_image | post.embed_media | post.gallery
</script>

<template>
  <div class="post" :class="showTextLeft && 'flex-row-reverse'">
    <Icon v-if="post.type === 'quote'" icon="fontisto:quote-left" class="quote-icon" />
    <div v-if="post.cover_image" class="media-container">
      <img :src="`/${post.cover_image}`" :alt="post.title" class="post-img" />
      <!-- <Carousel v-if="post.type === 'gallery'" :slides="post.gallery" /> -->
    </div>
    <div v-if="!showMediaOnly" class="text-container">
      <template v-if="post.cover_image">
        <div v-if="showTextLeft" class="arrow arrow-right"></div>
        <div v-else class="arrow arrow-left"></div>
      </template>
      <small class="topic">
        <NuxtLink :to="`/blog/topics/${post._path.split('/')[2]}`" class="hover:underline">
          {{ post._path.split('/')[2].replace('-', ' ') }}
        </NuxtLink>
      </small>
      <h3 class="title">
        <NuxtLink :to="post._path" class="line-clamp-2" :title="post.title">{{ post.title }}</NuxtLink>
      </h3>
      <p class="description line-clamp-3">
        {{ post.description }}
      </p>
      <br />
      <NuxtLink :to="post._path" class="read-more-btn rainbow-bg">Read More</NuxtLink>
      <small v-if="post.date" class="date">{{ formatDate(new Date(post.date)) }}</small>
    </div>
  </div>
</template>

<style scoped>
.post {
  @apply relative bg-gray-300 dark:bg-gray-900 aspect-video flex;
}

.post .media-container {
  @apply flex-1 overflow-hidden;
}
.post-img {
  @apply object-cover w-full h-full;
}

.post .text-container {
  @apply relative flex-1 flex flex-col items-stretch p-4;
}
.post .topic {
  @apply uppercase text-primary text-xs lg:text-base pb-1;
}
.post .title {
  @apply hover:text-primary lg:text-xl xl:text-2xl leading-5 pb-2;
}
.post .description {
  @apply text-xs lg:text-base xl:text-lg tracking-wide font-thin leading-relaxed;
}
.post .date {
  @apply text-xs uppercase mt-auto;
}
.quote-icon {
  @apply absolute inset-0 opacity-10 text-9xl;
}
.read-more-btn {
  @apply self-start px-3 py-1 opacity-80 hover:opacity-100;
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

.arrow {
  width: 0;
  height: 0;
  border-top: 24px solid transparent;
  border-bottom: 24px solid transparent;
  @apply absolute top-12;
}
.arrow-right {
  border-left: 24px solid transparent;
  @apply border-l-gray-300 dark:border-l-gray-900 -right-6;
}
.arrow-left {
  border-right: 24px solid transparent;
  @apply border-r-gray-300 dark:border-r-gray-900 -left-6;
}
</style>
