<script setup>
import { convertDate } from '../../utils';

const { path } = useRoute();
const { data } = await useAsyncData(`content-${path}`, async () => {
  // fetch document where the document path matches with the cuurent route
  let post = queryContent().where({ _path: path }).findOne();

  // get the surround information,
  // which is an array of documents that come before and after the current document
  //let surround = queryContent('/blog').sort({ date: 1 }).findSurround(path)//.only(["_path", "title", "description"]);

  return {
    post: await post,
    //surround: await surround,
  };
});

// set the meta
useHead({
  title: data.value.post.title,
  // meta: [
  //   { name: "description", content: data.value.post.description },
  //   {
  //     hid: "og:image",
  //     property: "og:image",
  //     content: `https://{{site}}/${data.value.post.cover_image}`,
  //   },
  // ],
});
</script>

<template>
  <main class="relative mx-auto max-w-prose overflow-hidden bg-white py-16 px-4 sm:px-6 lg:px-8">
    <nuxt-link class="block cursor-pointer" href="/blog">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="inline h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        stroke-width="2"
      >
        <path stroke-linecap="round" stroke-linejoin="round" d="M11 17l-5-5m0 0l5-5m-5 5h12" />
      </svg>
      Back
    </nuxt-link>

    <!-- <ContentDoc v-slot="{ doc }">
      <h2 class="my-4 text-4xl font-semibold">{{ doc.title }}</h2>
      <p class="my-4 text-gray-500">by, {{ doc.author }}, {{ convertDate(doc.date) }}</p>
      <div class="prose prose-lg first-letter:text-3xl first-letter:text-blue-600">
        <ContentRenderer :value="doc" />
      </div>
    </ContentDoc> -->

    <header>
      <h2 class="my-4 text-4xl font-semibold">{{ data.post.title }}</h2>
      <p class="my-4 text-gray-500">by: {{ data.post.author }}, {{ convertDate(data.post.date) }}</p>
    </header>
    <hr />

    <article class="prose prose-lg first-letter:text-3xl first-letter:text-blue-600">
      <ContentRenderer :value="data.post">
        <ContentRendererMarkdown :value="data.post" />
        <template #empty>
          <p>No content found.</p>
        </template>
      </ContentRenderer>
    </article>
  </main>
</template>
