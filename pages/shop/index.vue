<script setup>
import { Icon } from '@iconify/vue';

import { formatPrice } from '../../utils';

// products.json src: https://fakestoreapi.com/docs;
const { data: products } = await useAsyncData('products', () => {
  return queryContent('shop').find();
});

// create an array of categories from the products
const categories = products.value[0].body.reduce((acc, product) => {
  if (!acc.includes(product.category)) {
    acc.push(product.category);
  }
  return acc;
}, []);

const route = useRoute();
const router = useRouter();
const activeCategory = ref(route.query.category ? route.query.category : '');
function setCategory(category) {
  activeCategory.value = category;
  if (category) {
    router.push({
      path: '/shop',
      query: {
        category: activeCategory.value,
      },
    });
  } else {
    // clear the query
    router.replace({ query: {} });
  }
}

const filteredProducts = computed(() => {
  if (!activeCategory.value) return products.value[0].body;

  return products.value[0].body.filter((product) => {
    return product.category.toLowerCase() === activeCategory.value.toLowerCase();
  });
});

const config = useRuntimeConfig();
useHead({
  title: `${activeCategory.value ? activeCategory.value : 'Shop'} | ${config.public.appName}`,
});
</script>

<template>
  <div class="shop">
    <h1 class="h1 mt-10 text-center">
      Shop
      <span v-if="activeCategory">"{{ activeCategory }}"</span>
    </h1>
    <div v-if="products" class="relative flex flex-col items-center">
      <section v-if="categories" class="container mx-auto mt-10 lg:mt-10">
        <div class="flex item-center gap-4 mb-4">
          <h3 class="text-lg">Filter Category</h3>
          <button
            v-if="activeCategory"
            @click="setCategory(null)"
            class="flex items-center gap-2 px-2 py-1 bg-gray-300 dark:bg-gray-900 uppercase rounded-sm text-sm tracking-wide"
          >
            clear <icon icon="bi:x-lg" />
          </button>
        </div>
        <div class="flex items-center gap-4 mb-4">
          <template v-for="(c, i) in categories" :key="`category-${i}`">
            <button
              @click="setCategory(c)"
              class="px-3 py-1.5 rounded-sm text-sm capitalize flex-shrink-0"
              :class="c == activeCategory ? 'bg-primary' : 'bg-gray-300 dark:bg-gray-900'"
            >
              <span class="tracking-wide">{{ c }}</span>
            </button>
          </template>
        </div>
      </section>
      <section
        v-if="filteredProducts"
        class="container mx-auto my-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
      >
        <template v-for="(p, i) in filteredProducts" :key="`product-${i}-${p.id}`">
          <NuxtLink :to="`/shop/${p.id}`" class="">
            <img :src="p.image" :alt="p.title" class="w-full h-[300px] object-contain object-center bg-white rounded" />
            <div class="py-3">
              <h2 class="text-sm">{{ p.title }}</h2>
              <p class="font-bold mt-2">{{ formatPrice(p.price, 'USD') }}</p>
            </div>
          </NuxtLink>
        </template>
      </section>
    </div>
  </div>
</template>

<style scoped>
.fab {
  @apply p-4 bg-green-400 rounded-full hover:bg-green-600 text-2xl;
}
</style>
