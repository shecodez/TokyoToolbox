<script setup lang="ts">
//import './assets/css/tailwind.css';

onMounted(() => {
  if (window.matchMedia('(prefers-color-scheme: dark)').matches) document.documentElement.classList.add('dark');
  else document.documentElement.classList.add('light');
});

const config = useRuntimeConfig();
useHead({
  title: config.public.appName,
  meta: [{ name: 'p:domain_verify', content: '6ad70d8e7ecb0a518d089fb53a18d7f7' }],
});
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<style></style>
