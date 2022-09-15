<script setup lang="ts">
import { Icon } from '@iconify/vue';

const socialIcons = [
  {
    icon: 'bi:discord',
    label: 'Discord',
    link: 'https://discord.com/channels/1019237149171789864/1019237149171789868',
  },
  { icon: 'bi:instagram', label: 'Instagram', link: 'https://www.instagram.com/TokyoToolbox/' },
  { icon: 'bi:twitter', label: 'Twitter', link: 'https://twitter.com/TokyoToolbox' },
  { icon: 'bi:youtube', label: 'YouTube', link: 'https://www.youtube.com/channel/UCzV2BYxwNJlgc67Szapji0g' },
];
</script>

<template>
  <ul class="social-icons-menu invisible lg:visible">
    <li v-for="(n, i) in socialIcons" :key="`social-btn-${i}`">
      <a :href="n.link" target="_blank" class="social-icon-btn px-2.5">
        <Icon :icon="n.icon" />
        <span class="social-label">{{ n.label }}</span>
      </a>
    </li>
  </ul>
</template>

<style scoped>
.social-icons-menu {
  @apply fixed flex flex-col justify-center inset-y-0 left-8 gap-6 z-60;
}
.social-icon-btn {
  @apply flex items-center gap-8 text-xl;
}
span.social-label {
  opacity: 0;
  visibility: hidden;
  transition: 0.2s opacity, 0.2s visibility, 0.2s transform;
  transform: translateX(-10px);
}
a:hover span.social-label {
  opacity: 1 !important;
  visibility: visible;
  transform: translateX(10px);
  transition: 0.2s opacity, 0.2s visibility, 0.2s transform;
}
</style>
