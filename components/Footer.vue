<script setup lang="ts">
const config = useRuntimeConfig();
</script>

<template>
  <footer class="site-footer">
    <div class="flex gap-2">
      <h2 class="text-2xl font-black">{{ config.public.appName }}</h2>
      <span class="text-sm">&copy; {{ new Date().getFullYear() }} &nbsp;</span>
    </div>

    <nav class="site-nav">
      <ul class="links flex gap-4">
        <li class="link"><NuxtLink to="/about">About</NuxtLink></li>
        <li class="link"><NuxtLink to="/blog">Blog</NuxtLink></li>
        <li class="link"><NuxtLink to="/events">Events</NuxtLink></li>
        <li class="link"><NuxtLink to="/shop">Shop</NuxtLink></li>
        <li class="link"><NuxtLink to="/contact">Contact</NuxtLink></li>
        <li><div>|</div></li>
        <!-- <li class="link"><button>S<span class="sr-only">Search</span></button></li> -->
        <li class="link"><ToggleTheme /></li>
        <li class="link">
          <NuxtLink to="/auth/login">Login</NuxtLink>
        </li>
        <!-- <li class="link"><button>T<span class="sr-only">Translate</span></button></li> -->
      </ul>
    </nav>

    <div class="social-media-links flex gap-4">
      <button>Discord</button>
      <button>Instagram</button>
      <button>Twitter</button>
      <button>YouTube</button>
    </div>

    <p>
      Made with love by
      <a class="text-indigo-500" href="https://shecodez.com" target="_blank">shecodez</a>
    </p>
  </footer>
</template>

<style scoped>
.site-footer {
  @apply bg-slate-100 flex flex-col gap-4 p-4 items-center justify-center z-20;
}
</style>
