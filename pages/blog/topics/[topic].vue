<script setup>
const {
  params: { topic },
} = useRoute();

const blogQuery = queryContent(`blog/${topic.toLowerCase().replace(' ', '-')}`)
  .only(['_path', 'title', 'description', 'date', 'cover_image'])
  //.sort({ date: -1 }) $sensitivity: 'base'
  .find(); //; <ContentList :query="blogQuery">
const { data: posts } = await useAsyncData(
  'posts-by-topic',
  async () => {
    return await blogQuery;
  },
  { initialCache: false },
);

const config = useRuntimeConfig();
useHead({
  title: `${topic} | ${config.public.appName}`,
  meta: [{ name: 'description', content: `${config.public.appName}'s ${topic} posts` }],
});
</script>

<template>
  <div class="blogTopic">
    <h1 class="h1 my-10 text-center">
      <span v-if="topic">"{{ topic }}"</span> Posts
    </h1>

    <section class="posts pb-10">
      <ul class="flex items-center justify-center gap-2">
        <template v-if="posts.length" v-for="(p, i) in posts" :key="`post-${i}`">
          <li class="p-4 border">
            <NuxtLink :to="p._path" class="font-semibold">{{ p.title }}</NuxtLink>
          </li>
        </template>
      </ul>
    </section>
  </div>
</template>
