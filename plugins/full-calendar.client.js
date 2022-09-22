import '@fullcalendar/core/vdom'; // solve problem with Vite
import FullCalendar from '@fullcalendar/vue3';
import dayGridPlugin from '@fullcalendar/daygrid';
//import timeGridPlugin from '@fullcalendar/timegrid';
//import listPlugin from '@fullcalendar/list';
import interactionPlugin from '@fullcalendar/interaction';

FullCalendar.options = {
  plugins: [dayGridPlugin, interactionPlugin],
};

export default defineNuxtPlugin((/* nuxtApp */) => {
  return {
    provide: {
      fullCalendar: () => FullCalendar,
    },
  };
});
