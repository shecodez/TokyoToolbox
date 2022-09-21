<template>
  <div class="container mx-auto py-10">
    <client-only>
      <ContentDoc>
        <template v-slot="{ doc }">
          <section class="flex gap-10">
            <aside v-if="!!doc.body.toc.links.length" class="w-64 hidden md:block">
              <Toc :links="doc.body.toc.links" />
            </aside>
            <article class="px-4 md:px-0 prose dark:prose-invert prose-sm lg:prose-lg">
              <ContentRenderer :value="doc" />
            </article>
          </section>
        </template>
        <template #empty>
          <p>No content found.</p>
        </template>
      </ContentDoc>
    </client-only>
  </div>
</template>

<style scoped>
aside > .toc {
  @apply sticky top-24;
}
</style>
