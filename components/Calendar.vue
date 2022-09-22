<script setup>
const { $fullCalendar } = useNuxtApp();
const FullCalendar = $fullCalendar();

defineProps(['calendarOptions']);
</script>

<template>
  <FullCalendar :options="{ ...FullCalendar.options, ...calendarOptions }" />
</template>

<style>
/* .fc .fc-daygrid-day-frame {
  aspect-ratio: 1;
} */
@media only screen and (max-width: 600px) {
  .fc .fc-toolbar {
    flex-direction: column;
  }
}
.dark .fc .fc-popover {
  background-color: #000;
}
</style>
