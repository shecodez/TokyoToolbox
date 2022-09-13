<script setup lang="ts">
const config = useRuntimeConfig();
</script>

<template>
  <header class="site-header">
    <div class="wrapper">
      <NuxtLink to="/" class="no-underline">
        <figure class="site-logo">
          <h1>{{ config.public.appName }}</h1>
        </figure>
      </NuxtLink>

      <nav class="site-nav">
        <ul class="links flex gap-4">
          <li class="link"><NuxtLink to="/about">About</NuxtLink></li>
          <li class="link"><NuxtLink to="/events">Events</NuxtLink></li>
          <li class="link"><NuxtLink to="/blog">Blog</NuxtLink></li>
          <li class="link"><NuxtLink to="/shop">Shop</NuxtLink></li>
          <li class="link"><NuxtLink to="/contact">Contact</NuxtLink></li>
          <li><div>|</div></li>
          <!-- <li class="link"><button>S<span class="sr-only">Search</span></button></li> -->
          <li class="link">
            <ToggleTheme />
          </li>
          <li class="link">
            <NuxtLink to="/auth/login">Login</NuxtLink>
          </li>
          <!-- <li class="link"><button>T<span class="sr-only">Translate</span></button></li> -->
        </ul>
      </nav>
    </div>
  </header>
</template>

<style scoped>
.site-header {
  @apply sticky top-0 w-full p-4 bg-slate-100 bg-opacity-40 border-b-2 border-white border-opacity-30 backdrop-blur-lg z-20;
}
.site-header > .wrapper {
  @apply flex items-center justify-between max-w-6xl m-auto;
}
.site-logo {
  @apply font-black text-lg;
}

.link {
  @apply text-lg font-semibold;
}
</style>
