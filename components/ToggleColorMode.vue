<script setup>
import { Icon } from '@iconify/vue';

// const colorMode = useColorMode();
// function toggleDark() {
//   colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark';
// }

// const colorModeMap = ["system", "light", "dark", "sepia" ];
// function toggleColorMode() {
//   const colorModeIdx = colorModeMap.findIndex(colorMode.value);
//   const nextIdx = colorModeIdx >= (colorModeMap.length -1 ) ? 0 : colorModeIdx++;
//   colorMode.preference = colorModeMap[nextIdx];
// }
</script>

<template>
  <!-- <select v-model="$colorMode.preference">
    <option value="system">
      <Icon icon="iconoir:computer" width="16" />
      <span class="sr-only">System</span>
    </option>
    <option value="light">
      <Icon icon="iconoir:sun-light" width="16" />
      <span class="sr-only">Light</span>
    </option>
    <option value="dark">
      <Icon icon="iconoir:half-moon" width="16" />
      <span class="sr-only">Dark</span>
    </option>
    <option value="sepia">
      <Icon icon="iconoir:coffee-cup" width="16" />
      <span class="sr-only">Sepia</span>
    </option>
  </select> -->
  <button class="outline-none">
    <div class="dark:i-carbon-moon i-carbon-sun" />
    <Icon icon="iconoir:question-mark-circle" />
  </button>
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
