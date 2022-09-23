<script setup>
import { Icon } from '@iconify/vue';

const today = new Date();

const handleDateClick = (arg) => {
  alert('date click! ' + arg.dateStr);
};

const handleEventClick = (info) => {
  const event = info.event;

  if (event.url) {
    alert('Clicked ' + event.title + '.\n' + 'Will open ' + event.url + ' in a new tab');
    window.open(event.url);
    info.jsEvent.preventDefault(); // prevents browser from following link in current tab.
  } else {
    alert('Clicked ' + event.title);
  }
};

// const showEventTooltip = (info) => {
//   const tooltip = new Tooltip(info.el, {
//     title: info.event.extendedProps.description,
//     placement: 'top',
//     trigger: 'hover',
//     container: 'body',
//   });
// };
const events = [
  {
    title: 'simple event',
    start: '2022-09-02',
    color: 'orange', // override!
  },
  {
    title: 'event with URL',
    url: 'https://www.google.com/',
    start: '2022-09-03',
  },
  {
    title: 'Long Event',
    description: 'This is a long @$$ Event',
    start: '2022-09-04',
    end: '2022-09-07',
    color: 'red', // override!
  },
  {
    title: 'Meeting',
    start: '2022-09-12T10:30:00',
    end: '2022-09-12T12:30:00',
  },
  {
    title: 'Lunch',
    start: '2022-09-12T12:00:00',
  },
  {
    title: 'Dinner',
    start: '2022-09-12T12:00:00',
  },
  {
    groupId: '999',
    title: 'Repeating Event',
    start: '2022-09-09T16:00:00',
  },
  {
    groupId: '999',
    title: 'Repeating Event',
    start: '2022-09-16T16:00:00',
  },
];
const calendarOptions = {
  initialView: 'dayGridMonth',
  weekNumbers: true,
  dayMaxEventRows: 2,
  headerToolbar: {
    left: 'prevYear,prev today', //'dayGridMonth,dayGridWeek,timeGridDay,listWeek'
    center: 'title',
    right: 'next,nextYear',
  },
  dateClick: handleDateClick,
  eventClick: handleEventClick,
  //eventDidMount: showEventTooltip,
  //eventColor: 'red',
  events,
};
</script>

<template>
  <div class="calendar container mx-auto">
    <h1 class="sr-only">All Events Calendar</h1>
    <div class="flex w-full">
      <div class="flex-1 pt-4">
        <client-only>
          <Calendar :calendarOptions="calendarOptions" />
        </client-only>
      </div>
      <div class="hidden lg:flex flex-col w-64 p-4">
        <div class="side-panel-header rounded flex items-center justify-between">
          <div class="flex items-center">
            <button class="p-1 rounded hover:bg-primary">
              <Icon icon="carbon:location-filled" width="24" />
            </button>
            <div class="flex flex-col mx-2 leading-3">
              <span class="font-bold capitalize">Hachiōji</span>
              <span class="text-xs uppercase">東京</span>
            </div>
          </div>
          <div class="ml-auto flex items-center pr-2">
            <span class="text-4xl font-bold">72</span>
            <Icon icon="bx:circle" class="py-1 self-start" />
            <h5 class="font-bold">F</h5>
          </div>
        </div>

        <div class="flex flex-col items-center justify-center font-semibold p-4 mt-16 mb-10">
          <h3 class="text-7xl mb-1">{{ today.getDate() }}</h3>
          <span class="uppercase text-sm">{{ today.toLocaleString('en-US', { weekday: 'long' }) }}</span>
        </div>

        <div class="flex-1">
          <div v-if="!events.length" class="text-center p-4 font-bold">No upcoming events.</div>
          <div v-else class="p-3">
            <h5 class="text-xs font-bold mb-2">Upcoming Events:</h5>
            <!-- TODO: events.slice(0,3) where event.start_date >= today -->
            <ul class="divide-y">
              <li v-for="(e, i) in events.slice(0, 5)" :key="`event-${i}`" class="py-3">
                {{ e.title || 'Untitled' }}<br />
                <span class="text-xs">{{ e.description }}</span>
              </li>
            </ul>
          </div>
        </div>
        <!-- <div><button class="rainbow-bg w-full py-2">Add Event</button></div> -->
      </div>
    </div>
  </div>
</template>

<style scoped>
/* div.calendar {
  height: calc(80vh);
} */

.side-panel-header {
  background-color: var(--fc-button-bg-color, #2c3e50);
  border: 1px solid var(--fc-button-bg-color, #2c3e50);
}
</style>
