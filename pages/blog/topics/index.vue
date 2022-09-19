<script setup>
const blogNavQuery = queryContent('blog');

const config = useRuntimeConfig();
useHead({
  title: `Topics | ${config.public.appName}`,
});
</script>

<template>
  <div class="container mx-auto py-10">
    <div class="border-b pb-3 mb-4">
      <h1 class="text-2xl lg:text-4xl">Topics</h1>
    </div>

    <section class="blog-topic flex divide-x">
      <client-only>
        <ContentNavigation v-slot="{ navigation }" :query="blogNavQuery">
          <div v-for="link of navigation[0].children" :key="link._path" class="px-2 first:pl-0">
            <NuxtLink :to="`/blog/topics/${link.title}`" class="hover:text-primary">{{ link.title }}</NuxtLink>
          </div>
        </ContentNavigation>
      </client-only>
    </section>
  </div>
</template>
