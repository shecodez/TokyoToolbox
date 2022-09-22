<template>
  <div class="container mx-auto py-12 flex-1">
    <h1 class="h1 mb-4">FAQ</h1>

    <client-only>
      <ContentDoc>
        <template v-slot="{ doc }">
          <section>
            <article class="px-4 md:px-0 prose dark:prose-invert prose-sm lg:prose-lg">
              <ContentRenderer :value="doc" />
            </article>
          </section>
        </template>
        <template #not-found>
          <p>No content found.</p>
        </template>
      </ContentDoc>
    </client-only>
  </div>
</template>
