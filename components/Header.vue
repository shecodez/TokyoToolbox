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

const navLinks = ref([
  { link: '/about', label: 'About' },
  {
    link: '/events',
    label: 'Events',
    dropdown: true,
    isOpen: false,
    menu: [
      { link: '/events/all', label: 'All' },
      { link: '/events/workshops', label: 'Workshops' },
    ],
  },
  { link: '/blog', label: 'Blog' },
  {
    link: '/shop',
    label: 'Shop',
    dropdown: true,
    isOpen: false,
    menu: [
      { link: '/shop#all', label: 'All' },
      { link: '/shop#merch', label: 'Merch' },
    ],
  },
  { link: '/contact', label: 'Contact' },
]);
const navIcons = [
  { icon: 'bi:search', label: 'Search' },
  { icon: 'bi:cart-fill', label: 'Shopping Cart' },
  { icon: 'bi:sun-fill', label: 'Toggle Dark Mode' }, //component: ToggleTheme,
  { link: '/auth/login', icon: 'bi:lock', label: 'Login' },
];
</script>

<template>
  <div class="site-top-header">
    <div class="slice-anim header-wrapper h-10">
      <ul class="menu flex items-center">
        <button class="nav-icon-btn" title="translate">
          <Icon icon="bi:translate" />
        </button>
        <li v-for="(n, i) in topLinks" :key="`top-nav-link-${i}`" class="!hidden !lg:inline-block">
          <button v-if="n.dropdown" :data-text="n.label" class="nav-btn dropdown px-3 !text-sm">
            {{ n.label }}<span class="dots"></span>
          </button>
          <NuxtLink v-else :to="n.link" class="nav-link px-3 !text-sm" :data-text="n.label">
            {{ n.label }}
          </NuxtLink>
        </li>
      </ul>
      <ul class="menu-social flex items-center">
        <li v-for="(n, i) in socialIcons" :key="`nav-btn-${i}`" :title="n.label">
          <a :href="n.link" target="_blank" class="nav-icon-btn px-2.5">
            <Icon :icon="n.icon" />
            <span class="sr-only">{{ n.label }}</span>
          </a>
        </li>
      </ul>
    </div>
  </div>

  <header class="site-main-header">
    <div class="header-wrapper h-20">
      <div class="flex gap-2.5 items-center">
        <Icon class="hidden lg:inline-block text-sm" icon="bi:tools" />
        <button class="inline-block lg:hidden text-sm" title="menu">
          <Icon icon="fa:bars" />
          <span class="sr-only">Menu</span>
        </button>
        <NuxtLink to="/" class="site-logo rainbow-text">Tokyo<span class="heading-font">Toolbox</span></NuxtLink>
      </div>

      <nav class="flex items-center slice-anim">
        <ul class="menu flex items-center">
          <template v-for="(n, i) in navLinks" :key="`main-nav-link-${i}`">
            <li class="!hidden !lg:inline-block">
              <NuxtLink
                :to="n.link"
                :data-text="n.label"
                class="nav-link px-6 relative"
                :class="n.dropdown && 'dropdown'"
              >
                {{ n.label }}
                <span class="dots" v-if="n.dropdown" />
                <span v-if="n.dropdown" @click="n.isOpen = !n.isOpen" class="absolute z-50 inset-0">
                  <client-only>
                    <DropdownList :open="n.isOpen" :id="n.label" :list="n.menu" />
                  </client-only>
                </span>
              </NuxtLink>
            </li>
          </template>
        </ul>
        <ul class="menu-icon flex items-center">
          <li v-for="(n, i) in navIcons" :key="`nav-btn-${i}`" :title="n.label">
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
    </div>
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

.header-wrapper {
  @apply container mx-auto flex items-center justify-between;
}

.site-logo {
  @apply font-black text-lg lg:text-2xl;
}

.nav-link,
.nav-btn {
  @apply flex font-semibold text-lg relative !text-black !dark:text-white py-0.5 !hover:text-teal-400;
}

.nav-icon-btn {
  @apply flex text-sm relative !text-black !dark:text-white !hover:text-teal-400;
}

.dropdown span.dots:after {
  content: '';
  position: absolute;
  display: block;
  bottom: 0;
  right: 50%;
  width: 3px;
  height: 3px;
  margin-left: -1px;
  border-radius: 1.5px;
  box-shadow: 5px 0 0 0, -5px 0 0 0, inset 0 0 0 3px;
  opacity: 0.4;
  transition: 0.2s opacity;
}
</style>
