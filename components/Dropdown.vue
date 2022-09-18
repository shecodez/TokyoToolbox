<script setup>
defineProps(['open', 'id', 'list']);

const showMenu = ref(false);
function toggleMenu() {
  showMenu.value = !showMenu.value;
}
</script>

<template>
  <div class="dropdown-container absolute bottom-0">
    <!-- Dropdown toggle button -->
    <button @click="toggleMenu"><slot /></button>
    <!-- Dropdown menu -->
    <div
      class="fixed mt-2 bg-black bg-opacity-80 z-50 rounded shadow-lg my-4 w-42"
      :id="`dropdown-${id}`"
      :class="showMenu || open ? 'block' : 'hidden'"
    >
      <ul :aria-labelledby="`dropdown-${id}`">
        <template v-for="(item, i) in list" :key="`dropdown-${id}-li-${i}`">
          <li class="px-4 text-sm hover:text-teal-600">
            <NuxtLink :to="item.link" :data-text="item.label" class="w-full py-2">{{ item.label }}</NuxtLink>
          </li>
        </template>
      </ul>
    </div>
  </div>
</template>

<style scoped></style>
