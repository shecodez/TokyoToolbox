<script setup>
const { data } = await useAsyncData('blog-tags', () => queryContent('blog').only(['tags']).find());

const tags = new Set(data.value.map(Object.values).flat(2));

const config = useRuntimeConfig();
useHead({
  title: `Tags | ${config.public.appName}`,
});
</script>

<template>
  <div class="container mx-auto">
    <h1 class="h1 my-10 text-center">Tags</h1>

    <section class="blog-tags pb-10">
      <ul class="flex flex-wrap gap-2">
        <template v-for="(t, i) in tags" :key="`tag-${i}`">
          <li class="tag">
            <span>#&nbsp;</span>
            <NuxtLink :to="`/blog/tags/${t}`" class="font-semibold">{{ t }}</NuxtLink>
          </li>
        </template>
      </ul>
    </section>
  </div>
</template>

<style scoped>
.tag {
  @apply px-4 py-2 rounded bg-gray-300 dark:bg-black text-2xl whitespace-nowrap transition-all;
}
.tag:hover {
  @apply -translate-y-0.5;
}
</style>
