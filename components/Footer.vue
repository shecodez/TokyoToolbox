<script setup lang="ts">
import { Icon } from '@iconify/vue';
const config = useRuntimeConfig();

const socialIcons = [
  {
    icon: 'bi:discord',
    label: 'Discord',
    link: 'https://discord.com/channels/1019237149171789864/1019237149171789868',
  },
  { icon: 'bi:instagram', label: 'Instagram', link: 'https://www.instagram.com/TokyoToolbox/' },
  { icon: 'bi:twitter', label: 'Twitter', link: 'https://twitter.com/TokyoToolbox' },
  { icon: 'bi:youtube', label: 'YouTube', link: 'https://www.youtube.com/channel/UCzV2BYxwNJlgc67Szapji0g' },
  { icon: 'bi:pinterest', label: 'Pinterest', link: 'https://www.pinterest.com/tokyotoolbox/' },
];

const quickLinks = [
  { link: '/about', label: 'About' },
  { link: '/blog', label: 'Blog' },
  { link: '/events', label: 'Events' },
  { link: '/shop', label: 'Shop' },
  { link: '/contact', label: 'Contact' },
];
const posts = [
  { link: '', title: 'Zen bathroom must haves', cover_image: 'https://picsum.photos/48/48' },
  { link: '', title: 'DIY worm compost bin', cover_image: 'https://picsum.photos/48/48' },
  { link: '', title: 'Wowstick mini sd', cover_image: 'https://picsum.photos/48/48' },
];
const usefulLinks = [
  { link: '', label: 'Sitemap' },
  { link: '', label: 'FAQ' },
  { link: '', label: 'Support' },
];
</script>

<template>
  <footer class="site-footer px-[5%] lg:px-[15%]">
    <div class="grid grid-cols-4 gap-10 py-4">
      <div class="flex flex-col">
        <div class="text-green-400 text-2xl mb-4">Tokyo<span class="heading-font">Toolbox</span></div>
        <p class="text-sm mb-2 font-light">{{ config.appDescription }}</p>
        <NuxtLink to="/about#team">Team</NuxtLink>
        <NuxtLink to="/about#Corporate">Corporate Profile</NuxtLink>
        <!-- <NuxtLink to="/about#join">Careers</NuxtLink> -->

        <div class="form-control mt-4">
          <label class="text-xs font-bold" for="subscribe">Subscribe to our newsletter</label>
          <div class="flex items-center relative">
            <input name="subscribe" class="p-2 bg-transparent border w-full" placeholder="your@email.com" />
            <Icon icon="bi:arrow-right" class="absolute right-4" />
          </div>
        </div>
      </div>

      <div>
        <h2 class="text-2xl mb-4">Recent Posts</h2>
        <ul class="flex flex-col gap-3">
          <li v-for="(p, i) in posts" :key="`recent-posts-${i}`" class="flex gap-4">
            <img :src="p.cover_image" :alt="p.title" class="post-img h-11" />
            <p class="text-ellipsis overflow-hidden">
              <NuxtLink :to="p.link" class="truncate" :title="p.title">{{ p.title }}</NuxtLink>
              <div class="text-xs mt-0.5">2022.09.15</div>
            </p>
          </li>
        </ul>
      </div>

      <div>
        <h2 class="text-2xl mb-4">Quick Links</h2>
        <ul>
          <li v-for="(l, i) in quickLinks" :key="`quick-link-${i}`">
            <NuxtLink :to="l.link">{{ l.label }}</NuxtLink>
          </li>
        </ul>
      </div>

      <div class="relative">
        <h2 class="text-2xl mb-4">Useful Links</h2>
        <ul>
          <li v-for="(l, i) in usefulLinks" :key="`useful-link-${i}`">
            <NuxtLink :to="l.link">{{ l.label }}</NuxtLink>
          </li>
        </ul>

        <ul class="app-banners absolute bottom-0 right-0">
          <li class="ios_app mb-2"></li>
          <li class="android"></li>
        </ul>
      </div>
    </div>

    <div class="uppercase flex items-center h-16 border-b justify-between px-[4%] lg:px-[8%]">
      <h2 class="text-3xl">Connect&nbsp;<span class="text-green-400 !text-lg">with</span>&nbsp;Us</h2>
      <ul class="flex gap-4 text-xl">
        <li v-for="(s, i) in socialIcons" :key="`social-icon--footer-${i}`">
          <a :href="s.link" target="_blank"><Icon :icon="s.icon" /></a>
        </li>
      </ul>
    </div>

    <div class="flex items-center justify-between h-12">
      <h5 class="text-sm">
        &copy; {{ new Date().getFullYear() }}
        <span class="text-green-400">Tokyo<span class="heading-font">Toolbox</span></span>
        All Rights Reserved.
      </h5>
      <div class="divide-x divide">
        <a class="h5 pr-2">Privacy Policy</a>
        <a class="h5 pl-2">Terms of Services</a>
      </div>
    </div>

    <div class="flex items-center justify-center gap-1 text-sm">
      Made with <Icon icon="bi:heart-fill" /> by <a href="https://shecodez.com" target="_blank">shecodez</a> | NJN
    </div>
  </footer>
</template>

<style scoped>
.site-footer {
  @apply bg-gray-300 dark:bg-black pt-6 pb-3;
}

a {
  font-family: 'Marcellus SC', Georgia, serif;
  @apply text-green-400 hover:text-green-700 cursor-pointer;
}

img.post-img {
  aspect-ratio: 1 / 1;
}

.site-footer .app-banners .ios_app {
  background: url('https://devimages-cdn.apple.com/app-store/marketing/guidelines/images/badge-example-preferred_2x.png')
    no-repeat;
  background-size: 135px 40px;
  width: 135px;
  height: 40px;
  margin-left: auto;
}
.site-footer .app-banners .android {
  background: url('https://play.google.com/intl/en_us/badges/images/badge_new.png') no-repeat;
  background-size: 135px 40px;
  width: 135px;
  height: 40px;
  margin-left: auto;
}
</style>
