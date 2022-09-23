<script setup>
import { Icon } from '@iconify/vue';
//import useSupabase from '@/use/supabase';

const state = reactive({
  loading: false,
  email: '',
  sent: false,
  error: '',
});
// const { supabase } = useSupabase();
async function joinNewsletter() {
  console.log('join Newsletter', state.email);
  //   try {
  //     state.loading = true;
  //     let { data, error, status } = await supabase.from('subscribers').upsert({
  //       email: state.email,
  //     });
  //     if (error && status !== 406) throw error;
  //     if (data) {
  //       state.sent = true;
  //       console.log('subscribed to newsletter', data);
  //     }
  //   } catch (e: any) {
  //     state.error = e.error_description || e.message;
  //   } finally {
  //     state.loading = false;
  //   }
}
</script>

<template>
  <form @submit.prevent="joinNewsletter">
    <div v-if="state.error" class="error-alert p-2 flex items-center my-1">🛑 {{ state.error }}</div>
    <div v-if="state.sent" class="success-alert p-2 flex items-center my-1">✔️ We added you. Thanks!</div>

    <div class="form-control">
      <label for="email" class="text-xs font-simibold uppercase pb-2">Join our Community</label>
      <div class="flex items-center relative">
        <input
          name="email"
          v-model="state.email"
          required
          type="email"
          placeholder="your@email.com"
          class="w-full p-2 bg-transparent border pr-10"
        />
        <button class="absolute right-0 p-3 hover:text-primary" :class="state.loading && 'loading'">
          <Icon icon="bi:arrow-right" />
          <span class="sr-only">Subscribe</span>
        </button>
      </div>
      <p class="dark:text-gray-400 mt-2 text-xs">
        By clicking <Icon icon="bi:arrow-right" class="inline" /> you are agreeing to our
        <NuxtLink to="/legal/privacy">Privacy Policy</NuxtLink>
        and
        <NuxtLink to="/legal/terms">Terms of Use</NuxtLink>. We promise, no green eggs or spam from us. 😉
      </p>
    </div>
  </form>
</template>

<style scoped>
a {
  font-family: 'Marcellus SC', Georgia, serif;
  @apply text-primary hover:text-teal-700 cursor-pointer;
}

.success-alert {
  @apply border-l-4 border-green-500 bg-green-400 bg-opacity-30 text-green-500;
}
.error-alert {
  @apply border-l-4 border-red-500 bg-red-400 bg-opacity-30 text-red-500;
}
</style>
