<script setup lang="ts">
import { Icon } from '@iconify/vue';
import ToggleTheme from '../components/ToggleTheme.vue';

const topLinks = [
  { label: 'English', dropdown: true },
  { link: 'https://discord.com/channels/1019237149171789864/1019237149171789868', label: 'Community' },
  { link: '/support', label: 'Support' },
];
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

const navLinks = [
  { link: '/about', label: 'About' },
  { link: '/events', label: 'Events', dropdown: true },
  { link: '/blog', label: 'Blog' },
  { link: '/shop', label: 'Shop', dropdown: true },
  { link: '/contact', label: 'Contact' },
];
const navIcons = [
  { icon: 'bi:search', label: 'Search' },
  { icon: 'bi:bell-fill', label: 'Notifications' },
  { icon: 'bi:sun-fill', label: 'Toggle Dark Mode' }, //component: ToggleTheme,
  { link: '/auth/login', icon: 'bi:lock', label: 'Login' },
];
</script>

<template>
  <div class="site-top-header slice-anim flex items-center justify-between h-10 px-[5%] lg:px-[15%]">
    <ul class="menu flex items-center">
      <button class="nav-icon-btn">
        <Icon icon="bi:translate" />
      </button>
      <li v-for="(n, i) in topLinks" :key="`nav-link-${i}`" class="!hidden !lg:inline-block">
        <button v-if="n.dropdown" :data-text="n.label" class="nav-link-btn dropdown px-3 !text-sm">
          {{ n.label }}<span></span>
        </button>
        <NuxtLink v-else :to="n.link" class="nav-link px-3 !text-sm" :data-text="n.label">
          {{ n.label }}
        </NuxtLink>
      </li>
    </ul>
    <ul class="menu-social flex items-center">
      <li v-for="(n, i) in socialIcons" :key="`nav-btn-${i}`">
        <a :href="n.link" target="_blank" class="nav-icon-btn px-2.5">
          <Icon :icon="n.icon" />
          <span class="sr-only">{{ n.label }}</span>
        </a>
      </li>
    </ul>
  </div>

  <header class="site-main-header flex items-center justify-between h-20 px-[5%] lg:px-[15%]">
    <div class="flex gap-2.5 items-center">
      <Icon class="hidden lg:inline-block text-sm" icon="bi:tools" />
      <button class="inline-block lg:hidden text-sm">
        <Icon icon="fa:bars" />
        <span class="sr-only">Menu</span>
      </button>
      <NuxtLink to="/" class="site-logo">Tokyo<span class="heading-font">Toolbox</span></NuxtLink>
    </div>

    <nav class="flex items-center slice-anim">
      <ul class="menu flex items-center">
        <li v-for="(n, i) in navLinks" :key="`nav-link-${i}`" class="!hidden !lg:inline-block">
          <button v-if="n.dropdown" :data-text="n.label" class="nav-link-btn dropdown px-5">
            {{ n.label }}<span></span>
          </button>
          <NuxtLink v-else :to="n.link" class="nav-link px-5" :class="n.dropdown && 'dropdown'" :data-text="n.label">
            {{ n.label }}
            <span v-if="n.dropdown"></span>
          </NuxtLink>
        </li>
      </ul>
      <ul class="menu-icon flex items-center">
        <li v-for="(n, i) in navIcons" :key="`nav-btn-${i}`">
          <NuxtLink v-if="!!n.link" :to="n.link" class="nav-link px-2">
            <Icon :icon="n.icon" />
          </NuxtLink>
          <button v-else class="nav-icon-btn px-2.5">
            <!-- <div v-if="!!n.component">?</div> -->
            <Icon :icon="n.icon" />
          </button>
          <span class="sr-only">{{ n.label }}</span>
        </li>
      </ul>
    </nav>
  </header>
</template>

<style scoped>
.site-top-header {
  @apply bg-gray-300 dark:bg-black;
}

.site-main-header {
  backdrop-filter: saturate(180%) blur(20px);
  @apply bg-white dark:bg-black !bg-opacity-40 shadow-lg sticky top-0 z-20;
}

.site-logo {
  @apply font-black text-lg lg:text-2xl;
}

.nav-link,
.nav-link-btn {
  @apply flex font-semibold text-lg relative !text-black !dark:text-white py-0.5 !hover:text-green-400;
}

.nav-icon-btn {
  @apply flex text-sm relative !text-black !dark:text-white !hover:text-green-400;
}
</style>
