<template>
  <flat-pickr
    class="w-full text-gray-900 text-sm rounded-md bg-gray-50 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 block p-2.5"
    ref="flatpickr"
    v-model="selectedDate"
    :config="flatpickrConfig"
    placeholder="Select date and time"
    id="fp-calendar"
  />
</template>

<script>
import FlatPickr from "vue-flatpickr-component";
import "flatpickr/dist/flatpickr.css"; // Import the Flatpickr styles

export default {
  components: {
    FlatPickr,
  },
  props: {
    value: String,
  },
  data() {
    return {
      selectedDate: this.value || null,
      flatpickrConfig: {
        //    minDate: "today", // This will disable previous dates before today
        enableTime: true,
        dateFormat: "d-m-Y H:i",
      },
    };
  },
  watch: {
    selectedDate(newValue) {
      this.$emit("input", newValue);
    },
  },
  methods: {
    closeCalendar() {
      this.$refs.flatpickr.close(); // Close the calendar
    },
  },
};
</script>

<!-- Tailwind -->
<style>
/* Custom styling for the Flatpickr calendar */
/* .flatpickr-calendar {
  @apply bg-red-600 shadow-md rounded-lg p-4;
} */

/* Styling for the calendar header */
/* .flatpickr-month {
  @apply text-xl font-semibold mb-2;
} */

/* Styling for the days in the calendar */
/* .flatpickr-day {
  @apply rounded-md p-1 hover:bg-blue-200 cursor-pointer;
} */
</style>
