<script setup>
import { Icon } from '@iconify/vue';

import { formatPrice } from '../../utils';

const id = useRoute().params.id;
const { data: product } = await useAsyncData(`product-${id}`, async () => {
  const q = await queryContent('shop').only('body').findOne();

  return q.body.find((p) => p.id == parseInt(id));
});

const config = useRuntimeConfig();
useHead({
  title: `${product.value.title} | ${config.public.appName}`,
});
</script>

<template>
  <div class="product">
    <section v-if="product" class="container mx-auto my-10">
      <div class="relative flex flex-col lg:flex-row items-start gap-8">
        <section class="product-image flex-1">
          <img :src="product.image" :alt="product.title" class="w-full object-contain h-[90%]" />
        </section>

        <section class="product-section flex-1 flex flex-col gap-2">
          <div class="px-3 py-1.5 mr-auto rounded-sm capitalize tracking-wide text-sm bg-gray-300 dark:bg-gray-900">
            {{ product.category }}
          </div>
          <h1 class="rainbow-text mb-2 text-2xl lg:text-4xl">{{ product.title }}</h1>
          <hr class="border-black dark:border-white mt-1" />

          <section class="rating-section flex items-center text-xs gap-4">
            <template v-for="(r, i) in 5" :key="`productRaiting-${i}`">
              <Icon
                icon="ri:star-fill"
                :class="i <= parseInt(product.rating.rate) ? 'text-primary' : 'text-gray-500'"
              />
            </template>
            <span class="tracking-wider">{{ product.rating.count }} ratings</span>
          </section>
          <section class="price-section my-3">
            <p class="text-2xl lg:text-3xl">{{ formatPrice(product.price, 'USD') }}</p>
          </section>
          <section class="description-section mb-8">
            <p class="description font-thin" v-html="product.description" />
          </section>

          <section class="buy-section flex gap-4">
            <button class="rainbow-bg hover:ring text-white py-3 w-full rounded">Add To Cart</button>
            <button class="px-4 text-lg border hover:ring rounded hover:bg-primary">
              <Icon icon="bi:heart" />
            </button>
          </section>
        </section>
      </div>
    </section>
  </div>
</template>
