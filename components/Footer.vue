<script setup>
import { Icon } from '@iconify/vue';

import { formatDate } from '../utils';

const config = useRuntimeConfig();

const blogQuery = queryContent('blog')
  .only(['_path', 'title', 'date', 'cover_image'])
  //.sort({ date: -1 })
  .limit(3)
  .find();
const { data: recentPosts } = await useAsyncData('blogRecentPosts', async () => {
  return await blogQuery;
});

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

const businessLinks = [
  { link: '/about#team', label: 'Team' },
  { link: '/about#corporate', label: 'Corporate Profile' },
  //{ link: '/about#join', label: 'Careers' },
];

const quickLinks = [
  { link: '/about', label: 'About' },
  { link: '/blog', label: 'Blog' },
  { link: '/events', label: 'Events' },
  { link: '/shop', label: 'Shop' },
  { link: '/contact', label: 'Contact' },
];

const usefulLinks = [
  { link: '', label: 'Sitemap' },
  { link: '', label: 'FAQ' },
  { link: '', label: 'Support' },
];
</script>

<template>
  <footer class="site-footer">
    <div class="footer-wrapper">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 py-4">
        <div class="flex flex-col">
          <div class="rainbow-text text-2xl mb-4 font-black">Tokyo<span class="heading-font">Toolbox</span></div>
          <p class="text-sm mb-2 font-light">{{ config.appDescription }}</p>
          <ul class="mb-2">
            <li v-for="(l, i) in businessLinks" :key="`business-link-${i}`">
              <NuxtLink :to="l.link">{{ l.label }}</NuxtLink>
            </li>
          </ul>
          <JoinNewsletterForm />
        </div>

        <div>
          <h2 class="text-2xl mb-4">Recent Posts</h2>
          <client-only>
            <div>
              <ul v-if="recentPosts.length" class="flex flex-col gap-3">
                <template v-for="(p, i) in recentPosts.slice(0, 3)" :key="`recentPost-${i}`">
                  <li class="flex gap-4">
                    <img v-if="p.cover_image" :src="`/${p.cover_image}`" :alt="p.title" class="post-img h-11" />
                    <div v-else class="post-img w-11 h-11 bg-gray-500" />
                    <p class="text-ellipsis overflow-hidden">
                      <NuxtLink :to="p._path" class="truncate" :title="p.title">{{ p.title }}</NuxtLink>
                      <br />
                      <small v-if="p.date" class="text-xs uppercase">{{ formatDate(new Date(p.date)) }}</small>
                    </p>
                  </li>
                </template>
              </ul>
              <div v-else>
                <p>No posts found.</p>
              </div>
            </div>
          </client-only>
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

      <div class="uppercase flex items-center h-16 border-b border-primary justify-between md:px-[4%] lg:px-[8%]">
        <h2 class="text-xl md:text-3xl">
          Connect&nbsp;<span class="text-primary !text-sm !md:text-lg">with</span>&nbsp;Us
        </h2>
        <ul class="flex gap-4 text-xl">
          <li v-for="(s, i) in socialIcons" :key="`social-icon--footer-${i}`" :title="s.label">
            <a :href="s.link" target="_blank"><Icon :icon="s.icon" /></a>
          </li>
        </ul>
      </div>

      <div class="flex flex-col md:flex-row items-center justify-between my-3">
        <p class="text-xs md:text-sm">
          &copy; {{ new Date().getFullYear() }}
          <span class="text-primary">Tokyo<span class="heading-font">Toolbox</span></span>
          All Rights Reserved.
        </p>
        <div class="divide-x divide text-xs md:text-sm">
          <a class="h5 pr-2">Privacy Policy</a>
          <a class="h5 pl-2">Terms of Services</a>
        </div>
      </div>

      <div class="flex items-center justify-center gap-1 text-sm">
        Made with <Icon icon="bi:heart-fill" /> by <a href="https://shecodez.com" target="_blank">shecodez</a> | NJN
      </div>
    </div>
  </footer>
</template>

<style scoped>
.site-footer {
  @apply bg-gray-300 dark:bg-black pt-6 pb-3;
}

.footer-wrapper {
  @apply container mx-auto;
}

a {
  font-family: 'Marcellus SC', Georgia, serif;
  @apply text-primary hover:text-teal-700 cursor-pointer;
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
