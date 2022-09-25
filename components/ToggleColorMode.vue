<script setup>
import { Icon } from '@iconify/vue';

const colorMode = useColorMode();
// const colorModeMap = ['system', 'light', 'dark', 'sepia'];
// function toggleColorMode() {
//   let colorModeIdx = colorModeMap.findIndex((c) => c === colorMode.value);
//   let nextIdx = colorModeIdx > colorModeMap.length ? 0 : colorModeIdx++;
//   colorMode.preference = colorModeMap[nextIdx];
// }

function toggleDark() {
  colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark';
}
</script>

<template>
  <client-only>
    <!-- <button @click="toggleColorMode" :title="$colorMode.preference">
      <Icon v-if="$colorMode.preference === 'system'" icon="iconoir:computer" width="16" />
      <Icon v-if="$colorMode.preference === 'light'" icon="iconoir:sun-light" width="16" />
      <Icon v-if="$colorMode.preference === 'dark'" icon="iconoir:half-moon" width="16" />
      <Icon v-if="$colorMode.preference === 'sepia'" icon="iconoir:coffee-cup" width="16" />
      <span class="sr-only">{{ $colorMode.preference }}</span>
    </button> -->
    <button @click="toggleDark" :title="`Theme: ${$colorMode.value}`">
      <Icon v-if="$colorMode.value === 'dark'" icon="bi:sun-fill" />
      <Icon v-else-if="$colorMode.value === 'light'" icon="bi:moon-stars-fill" />
    </button>
  </client-only>
</template>

<style>
body {
  @apply bg-gray-50 text-gray-800;
}
html.dark body {
  @apply bg-gray-800 text-gray-50;
}
html.sepia body {
  background-color: #f1e7d0;
  color: #433422;
}
</style>
