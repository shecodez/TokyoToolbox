<script setup lang="ts">
const config = useRuntimeConfig();
</script>

<template>
  <div class="grid h-screen place-content-center gap-3 relative">
    <!-- <img class="fixed inset-0 min-h-screen" src="~/assets/images/tokyo-4807294_1920.jpg" alt="Tokyo" /> -->
    <div class="z-10 flex gap-12 items-center px-[5%] lg:px-[15%]">
      <h1 class="text-5xl">
        Welcome to <span class="font-black">{{ config.public.appName }}</span>
      </h1>
      <p class="text-xl">
        A place for hosting and posting DIY interior / exterior design tutorials, workshops, documentaries, interviews,
        reviews, podcasts, and exploration. A space for community, global communication, and all things Japan.
      </p>
    </div>
  </div>
  <!-- <div>
    Image by <a href="https://pixabay.com/users/binmassam-15041405/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=4807294">abdulla binmassam</a> from <a href="https://pixabay.com//?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=4807294">Pixabay</a>
  </div> -->
</template>
