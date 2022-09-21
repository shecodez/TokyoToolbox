<script setup>
import { Icon } from '@iconify/vue';

import { encode } from '~~/utils';

const formEl = ref();
const form = reactive({
  email: '',
  message: '',
  name: '',
  subject: '',
});
const state = reactive({
  loading: false,
  sent: false,
  error: '',
  bot: null,
  isBot: false,
});

// const config = useRuntimeConfig();
async function handleSubmit() {
  try {
    // console.log('Send Email', form.value);
    state.loading = true;
    if (state.bot) {
      state.isBot = true;
    } else {
      await $fetch('/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },

        body: encode({
          'form-name': 'contact',
          ...form,
        }),
      });
    }
  } catch (error) {
    console.error(error);
    state.error = 'Error sending message, please try again later.';
  } finally {
    state.loading = false;
    state.sent = true;
  }

  // reset form
  form.email = '';
  form.message = '';
  form.name = '';
  form.subject = '';
}
</script>

<template>
  <div class="contact-form">
    <div v-if="state.isBot" class="alert bot-alert">🍯 Oh honey pot! We think not, you're a bot!</div>
    <div v-if="state.sent" class="alert" :class="state.error ? 'error-alert' : 'success-alert'">
      <span v-if="state.error">❗ {{ state.error }}</span>
      <span v-else>✔️ Message sent. Thanks!</span>
    </div>
    <form v-else name="contact" netlify ref="formEl" @submit.prevent="handleSubmit">
      <input type="hidden" name="form-name" value="contact" />
      <div class="flex flex-col md:flex-row gap-3">
        <div class="flex-1">
          <label for="name" class="sr-only">Name*</label>
          <input type="text" v-model="form.name" name="name" placeholder="Name" required />
        </div>
        <div class="flex-1">
          <label for="email" class="sr-only">Email*</label>
          <input type="email" v-model="form.email" name="email" placeholder="E-mail" required />
        </div>
      </div>
      <div>
        <label for="subject" class="sr-only">Subject</label>
        <input type="text" v-model="form.subject" name="subject" placeholder="Subject" />
      </div>
      <div class="hidden">
        <label class="sr-only">Don't fill this out if you're human</label>
        <input v-model="state.bot" name="bot-field" placeholder="This field is only for bots." />
      </div>
      <div>
        <label for="message" class="sr-only">Message*</label>
        <textarea v-model="form.message" name="message" placeholder="Message" rows="4" required />
      </div>
      <!-- <div data-netlify-recaptcha="true" /> -->
      <button type="submit" class="send-btn rainbow-bg">
        <Icon v-if="state.loading" icon="gg:spinner-two" class="animate-spin" />
        <Icon v-else icon="bi:send-fill" />
        {{ state.loading ? 'Sending...' : 'Send' }}
      </button>
    </form>
  </div>
</template>

<style scoped>
.contact-form input,
.contact-form textarea {
  @apply bg-gray-300 dark:bg-gray-900 placeholder:text-black dark:placeholder:text-white p-3 w-full;
}

.contact-form form {
  @apply flex flex-col gap-3 mt-6;
}

input[required],
textarea[required] {
  background-image: radial-gradient(#f00 15%, transparent 16%), radial-gradient(#f00 15%, transparent 16%);
  background-size: 1.2em 1.2em;
  background-position: right top;
  background-repeat: no-repeat;
}

.send-btn {
  transition: all 600ms cubic-bezier(0.23, 1, 0.32, 1);
  @apply w-max px-6 py-2 uppercase hover:ring ring-current flex items-center gap-2;
}

.alert {
  @apply p-4 flex items-center my-4;
}
.success-alert {
  @apply border-l-4 border-green-600 bg-green-400 bg-opacity-20 text-green-600;
}
.error-alert {
  @apply border-l-4 border-red-600 bg-red-400 bg-opacity-20 text-red-600;
}
.bot-alert {
  @apply border-l-4 border-orange-600 bg-orange-400 bg-opacity-20 text-orange-600;
}
</style>
