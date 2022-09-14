<script setup lang="ts">
import './assets/css/main.css';

const config = useRuntimeConfig();

onMounted(() => {
  if (window.matchMedia('(prefers-color-scheme: dark)').matches) document.documentElement.classList.add('dark');
  else document.documentElement.classList.add('light');
});

useHead({
  title: config.public.appName,
  meta: [{ name: 'p:domain_verify', content: '6ad70d8e7ecb0a518d089fb53a18d7f7' }],
});
</script>

<template>
  <div class="min-h-screen flex flex-col">
    <Header />
    <main class="flex-1">
      <NuxtPage />
    </main>
    <Footer />
    <SocialLinksMenu />
  </div>
</template>

<style></style>
