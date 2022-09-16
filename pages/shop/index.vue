<script setup lang="ts">
import { Icon } from '@iconify/vue';
</script>

<template>
  <div class="relative flex flex-col items-center">
    <h1 class="h1 mt-20">Shop</h1>

    <!-- <button class="fab fixed bottom-6 right-6">
      <Icon icon="bi:cart" />
      <span class="sr-only">Cart</span>
    </button> -->
  </div>
</template>

<style scoped>
.fab {
  @apply p-4 bg-green-400 rounded-full hover:bg-green-600 text-2xl;
}
</style>
