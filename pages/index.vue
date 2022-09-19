<script setup lang="ts">
//const config = useRuntimeConfig();

const { data: blogNav } = await useAsyncData('navigation', () => {
  return fetchContentNavigation(queryContent('blog'));
});
</script>

<template>
  <div class="container mx-auto">
    <section class="pt-20">
      <p class="text-2xl lg:text-5xl leading-normal font-semibold text-center mb-2">
        Welcome to Tokyo<span class="heading-font">Toolbox</span>
      </p>
      <p class="text-xl text-center font-thin">
        A place for hosting and posting DIY interior / exterior design tutorials, workshops, documentaries, interviews,
        reviews, podcasts, and exploration. A space for community, global communication, and all things Japan.
      </p>
    </section>

    <section class="py-14 lg:py-20">
      <h2 class="text-center uppercase tracking-wider mb-10">Blog Posts</h2>

      <div class="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <template v-for="(b, i) in blogNav[0].children" :key="`blogTopic-${b._path}-${i}`">
          <div class="px-7 py-5 rounded-lg border-2">
            <h3 class="rainbow-text text-lg font-semibold">
              {{ b.title }}
            </h3>
            <ul v-if="b.children" class="list-disc list-inside mt-4 pl-2 space-y-3">
              <template v-for="(p, j) in b.children" :key="`blogPost-${p._path}-${j}-${i}`">
                <li class="list-item text-sm hover:text-primary">
                  <NuxtLink :to="p._path">
                    {{ p.title }}
                  </NuxtLink>
                </li>
              </template>
            </ul>
            <ul v-else class="list-disc list-inside mt-4 pl-2 space-y-3">
              <li class="list-item text-sm hover:text-primary">
                <NuxtLink :to="b._path">始めましょう</NuxtLink>
              </li>
            </ul>
          </div>
        </template>
      </div>
    </section>
  </div>
</template>
