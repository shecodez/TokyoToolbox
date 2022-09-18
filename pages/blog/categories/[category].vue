<script setup>
const {
  params: { category },
} = useRoute();

const config = useRuntimeConfig();
useHead({
  title: `${category} Posts | ${config.public.appName}`,
  meta: [{ name: 'description', content: `${config.public.appName}'s ${category} posts` }],
});
</script>

<template>
  <div class="blogCategory">
    <h1 class="h1 mt-10 text-center">
      <span v-if="category">"{{ category }}"</span>
      Posts
    </h1>
  </div>
</template>
