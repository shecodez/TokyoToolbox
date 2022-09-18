<script setup>
const {
  params: { tag },
} = useRoute();

// const filter = tag.split(',');
// const blogQuery = queryContent('blogTagged')
//   .only(['_path', 'title', 'description', 'date', 'cover_image'])
//   .where({ tags: { $contains: filter } })
//   //.sort({ date: -1 })
//   .find(); //; <ContentList :query="blogQuery">

const config = useRuntimeConfig();
useHead({
  title: `Posts tagged - ${tag} | ${config.public.appName}`,
  meta: [{ name: 'description', content: `${config.public.appName}'s ${tag} posts` }],
});
</script>

<template>
  <div class="blogTag">
    <h1 class="h1 mt-10 text-center">
      Posts with <span v-if="tag">"{{ tag }}"</span> Tag
    </h1>
  </div>
</template>
