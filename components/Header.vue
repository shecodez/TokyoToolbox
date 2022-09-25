<script setup>
import { Icon } from '@iconify/vue';

import ToggleColorMode from '@/components/ToggleColorMode.vue';
import SideNavDrawer from '@/components/SideNavDrawer.vue';
import SearchModal from '@/components/SearchModal.vue';
import ShopCartDrawer from '@/components/ShopCartDrawer.vue';
import UserProfileDrawer from '@/components/UserProfileDrawer.vue';

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
      { link: { path: '/shop', query: { category: "men's clothing" } }, label: "Men's Clothing" },
      { link: { path: '/shop', query: { category: "women's clothing" } }, label: "Women's Clothing" },
    ],
  },
  { link: '/contact', label: 'Contact' },
]);
const navIcons = [
  { component: SearchModal, label: 'Search' },
  { component: ShopCartDrawer, label: 'Shopping Cart' },
  { component: ToggleColorMode, label: 'Toggle Dark Mode' }, //component: ToggleColorMode,
  { link: '/auth/login', icon: 'bi:lock-fill', label: 'Login' },
  //{ component: UserProfileDrawer, label: 'Profile' },
];
</script>

<template>
  <div class="site-top-header">
    <div class="slice-anim header-wrapper h-10">
      <ul class="menu flex items-center">
        <button class="nav-icon-btn" title="translate">
          <Icon icon="bi:translate" />
        </button>
        <li v-for="(n, i) in topLinks" :key="`top-nav-link-${i}`" class="hidden lg:inline-block">
          <button v-if="n.dropdown" :data-text="n.label" class="slice top-nav-btn dropdown">
            {{ n.label }}<span class="dots"></span>
          </button>
          <div v-else class="slice-line">
            <NuxtLink :to="n.link" class="slice top-nav-link" :data-text="n.label">
              {{ n.label }}
            </NuxtLink>
          </div>
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
        <SideNavDrawer>
          <Icon icon="bi:tools" class="hidden lg:inline-block" />
          <Icon icon="fa:bars" class="inline-block lg:hidden" />
        </SideNavDrawer>
        <NuxtLink to="/" class="site-logo rainbow-text">Tokyo<span class="heading-font">Toolbox</span></NuxtLink>
      </div>

      <nav class="flex items-center slice-anim">
        <ul class="menu flex items-center">
          <template v-for="(n, i) in navLinks" :key="`main-nav-link-${i}`">
            <li class="group relative hidden lg:inline-block">
              <div class="slice-line">
                <NuxtLink
                  :to="n.link"
                  :data-text="n.label"
                  class="slice nav-link px-6"
                  :class="n.dropdown && 'dropdown'"
                >
                  {{ n.label }}
                  <span class="dots" v-if="n.dropdown" />
                </NuxtLink>
              </div>
              <div v-if="n.dropdown" class="dropdown-menu slice-anim group-hover:block h-auto hidden absolute">
                <ul class="menu top-0 w-40 bg-gray-300 dark:bg-black shadow-lg py-3">
                  <template v-for="(d, i) in n.menu" :key="`dropdown-${n.label}-li-${i}`">
                    <div class="slice-line">
                      <li class="text-sm hover:text-teal-600">
                        <NuxtLink :to="d.link" :data-text="d.label" class="slice px-4 py-2 block">
                          {{ d.label }}
                        </NuxtLink>
                      </li>
                    </div>
                  </template>
                </ul>
              </div>
            </li>
          </template>
        </ul>
        <ul class="menu-icon flex items-center">
          <template v-for="(n, i) in navIcons" :key="`nav-btn-${i}`">
            <li class="nav-icon-btn px-2.5" :title="n.label">
              <NuxtLink v-if="!!n.link" :to="n.link">
                <Icon :icon="n.icon" />
              </NuxtLink>
              <component v-else-if="n.component" :is="n.component" />
              <button v-else>
                <Icon :icon="n.icon" />
                <span class="sr-only">{{ n.label }}</span>
              </button>
            </li>
          </template>
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
  @apply bg-white dark:bg-black bg-opacity-40 dark:bg-opacity-40 shadow-lg sticky top-0 z-20;
}

.header-wrapper {
  @apply container mx-auto px-4 md:px-0 flex items-center justify-between;
}

.site-logo {
  @apply font-black text-lg lg:text-2xl;
}

.top-nav-link,
.top-nav-btn {
  @apply flex text-sm tracking-wider px-3 py-0.5;
}
.nav-link,
.nav-btn {
  @apply flex font-semibold text-lg tracking-wider py-0.5;
}

.nav-icon-btn {
  @apply flex relative  hover:text-primary;
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

.dropdown-menu {
  left: 50%;
  transform: translateX(-50%);
}
.dropdown-menu ul.menu {
  @apply flex flex-col;
}

/* strike-through animation links */
.slice-anim ul.menu a.slice,
.slice-anim ul.menu button.slice {
  color: transparent;
}
.slice-anim a,
.slice-anim button {
  white-space: nowrap;
  font-family: 'Marcellus SC', Georgia, serif;
  transition: 0.5s;
  position: relative;
  font-weight: 500 !important;
}
.slice-anim a:before,
.slice-anim a:after,
.slice-anim button:before,
.slice-anim button:after {
  content: attr(data-text);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  transition: 0.5s;
  transition-delay: 0.25s;
}
.slice-anim a:before,
.slice-anim button:before {
  -webkit-clip-path: polygon(0 0, 100% 0, 100% 50%, 0 50%);
  clip-path: polygon(0 0, 100% 0, 100% 50%, 0 50%);
}
.slice-anim a:after,
.slice-anim button:after {
  -webkit-clip-path: polygon(0 50%, 100% 50%, 100% 100%, 0 100%);
  clip-path: polygon(0 50%, 100% 50%, 100% 100%, 0 100%);
}
.slice-anim a:hover,
.slice-anim button:hover {
  text-decoration: none;
}
.slice-anim a:hover:before,
.slice-anim button:hover:before {
  transform: translateX(2px);
}
.slice-anim a:hover:after,
.slice-anim button:hover:after {
  opacity: 1 !important;
  transform: translateX(-2px);
}

.slice-anim ul.menu .slice-line {
  @apply relative overflow-hidden;
}
.slice-anim ul.menu .slice-line:before {
  content: '';
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 100%;
  height: 1px;
  left: -100%;
  transition: 0.5s;
  @apply bg-primary;
}
.slice-anim ul.menu .slice-line:hover:before {
  left: 100%;
}

ul.menu > li a:before,
ul.menu > li a:after,
ul.menu > li button:before,
ul.menu > li button:after,
ul.menu > li span.dots:before,
ul.menu > li span.dots:after {
  padding: inherit;
  @apply text-black dark:text-white;
}
ul.menu li a:hover:before,
ul.menu li a:hover:after,
ul.menu li button:hover:before,
ul.menu li button:hover:after,
ul.menu li:hover span.dots:before,
ul.menu li:hover span.dots:after {
  @apply text-primary;
}

ul.menu li a.router-link-exact-active:before,
ul.menu li a.router-link-exact-active:after,
ul.menu-icon li a.router-link-exact-active > svg {
  @apply text-primary;
}
</style>
