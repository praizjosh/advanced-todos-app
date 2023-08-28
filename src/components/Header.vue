<template>
  <header
    class="bg-white my-6 flex flex-col space-y-4 px-8 py-8 shadow rounded-2xl"
  >
    <div class="flex justify-between items-center space-x-4">
      <div class="w-1/2 md:w-3/5">
        <h1 class="font-medium text-2xl md:text-3xl text-sky-500">Hello!</h1>
      </div>
      <div class="w-1/2 md:w-2/5">
        <Button
          @click="toggleAddTask"
          :showAddTask="showAddTask"
          :text="showAddTask ? 'Close' : 'Add a Task'"
          :class="
            showAddTask
              ? 'bg-red-600 hover:bg-red-700'
              : 'bg-sky-600 hover:bg-sky-700'
          "
        />
      </div>
    </div>
    <div class="mb-2 mt-8">
      <hr />
    </div>
    <h2 class="text-md font-medium uppercase text-pink-600">Summary</h2>
    <div class="grid grid-cols-2 gap-4">
      <div class="px-4 py-3 flex flex-col space-y-4 shadow rounded-lg">
        <div class="flex items-center justify-between">
          <div
            class="bg-yellow-500 p-2 rounded-full justify-center items-center"
          >
            <svg
              class="w-4 h-4 text-white dark:text-slate-200"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 18 20"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.6"
                d="M5 5h8m-1-3a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1m6 0v3H6V2m6 0h4a1 1 0 0 1 1 1v15a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h4m0 9.464 2.025 1.965L12 9.571"
              />
            </svg>
          </div>
          <span class="text-xl font-bold">7</span>
        </div>
        <span class="text-gray-600 text-sm">Tasks</span>
      </div>
      <div class="px-4 py-3 flex flex-col space-y-4 shadow rounded-lg">
        <div class="flex items-center justify-between">
          <div
            class="bg-green-500 p-2 rounded-full justify-center items-center"
          >
            <svg
              class="w-4 h-4 text-white dark:text-slate-200"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 21 21"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.5"
                d="m6.072 10.072 2 2 6-4m3.586 4.314.9-.9a2 2 0 0 0 0-2.828l-.9-.9a2 2 0 0 1-.586-1.414V5.072a2 2 0 0 0-2-2H13.8a2 2 0 0 1-1.414-.586l-.9-.9a2 2 0 0 0-2.828 0l-.9.9a2 2 0 0 1-1.414.586H5.072a2 2 0 0 0-2 2v1.272a2 2 0 0 1-.586 1.414l-.9.9a2 2 0 0 0 0 2.828l.9.9a2 2 0 0 1 .586 1.414v1.272a2 2 0 0 0 2 2h1.272a2 2 0 0 1 1.414.586l.9.9a2 2 0 0 0 2.828 0l.9-.9a2 2 0 0 1 1.414-.586h1.272a2 2 0 0 0 2-2V13.8a2 2 0 0 1 .586-1.414Z"
              />
            </svg>
          </div>
          <span class="text-xl font-bold">4</span>
        </div>
        <span class="text-gray-600 text-sm">Completed</span>
      </div>
      <div class="px-4 py-3 flex flex-col space-y-4 shadow rounded-lg">
        <div class="flex items-center justify-between">
          <div
            class="bg-orange-500 p-2 rounded-full justify-center items-center"
          >
            <svg
              class="w-4 h-4 text-white dark:text-slate-200"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                stroke-linejoin="round"
                stroke-width="1.5"
                d="M10 6v4l3.276 3.276M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
          </div>
          <span class="text-xl font-bold">2</span>
        </div>
        <span class="text-gray-600 text-sm">Pending</span>
      </div>
      <div class="px-4 py-3 flex flex-col space-y-4 shadow rounded-lg">
        <div class="flex items-center justify-between">
          <div class="bg-red-500 p-2 rounded-full justify-center items-center">
            <svg
              class="w-4 h-4 text-white dark:text-slate-200"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 21"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.6"
                d="m9.046 3.59-.435-2.324m.435 2.324a5.338 5.338 0 0 1 6.033 4.333l.331 1.77c.439 2.344 2.383 2.587 2.599 3.76.11.586.22 1.171-.309 1.271L5 17.101c-.529.1-.639-.488-.749-1.074-.219-1.172 1.506-2.102 1.067-4.447l-.331-1.769a5.338 5.338 0 0 1 4.059-6.22Zm-7.13 4.602a8.472 8.472 0 0 1 2.17-5.048m2.646 13.633A3.472 3.472 0 0 0 13.46 16l.089-.5-6.817 1.277Z"
              />
            </svg>
          </div>
          <span class="text-xl font-bold">1</span>
        </div>
        <span class="text-gray-600 text-sm">Overdue</span>
      </div>
    </div>

    <!-- Add New Task -->
    <div
      v-show="showAddTask"
      class="flex flex-col space-y-4 justify-between items-center"
    >
      <div class="w-full">
        <input
          v-model="newTask"
          @keyup.enter="addTask"
          placeholder="Add a new task..."
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        />
      </div>

      <div class="w-full">
        <Calendar
          id="cal"
          ref="dueDateCalendar"
          v-model="dueDate"
          @input="calendarOpen = false"
        />
      </div>

      <div class="w-full flex space-x-4 justify-evenly items-center">
        <Button
          @click="addTask"
          text="Add Task"
          class="w-full py-2 px-4 bg-sky-600 hover:bg-sky-700 text-white rounded-md"
        />

        <Button
          @click="clearTasks"
          text="Clear"
          class="w-full py-2 px-4 bg-pink-600 hover:bg-pink-700 text-white rounded-md"
        />
      </div>
    </div>
  </header>
</template>

<script>
import { parse, format } from "date-fns"; // Import Date formatter function
import Button from "./Button.vue";
import Calendar from "./Calendar.vue";

export default {
  data() {
    return {
      showAddTask: false,
      newTask: "",
      dueDate: null,
      calendarOpen: true,
    };
  },
  created() {},
  name: "Header",
  components: {
    Button,
    Calendar,
  },
  methods: {
    toggleAddTask() {
      this.showAddTask = !this.showAddTask;
    },
    addTask() {
      if (this.newTask !== "" && this.dueDate !== null) {
        const formattedDueDate = this.formatDueDate(this.dueDate);
        this.$store.dispatch("addTask", {
          description: this.newTask,
          dueDate: formattedDueDate,
        });
        this.newTask = "";
        // this.resetCalendar();
        this.dueDate = null; // Set dueDate back to null
      } else {
        alert("Field can't be blank. Please enter a valid task and due date.");
      }
    },
    formatDueDate(dueDate) {
      const parsedDate = parse(dueDate, "d-M-yyyy H:mm", new Date()); // Parse the selected date using "d-M-yyyy H:mm" format
      return format(parsedDate, "dd MMM yyyy HH:mm a"); // Format the date as "30 Aug 2023, 02:10 AM"
    },
    // resetCalendar() {
    //   const calendar = document.querySelector("#cal").flatpickr();
    //   if (calendar) {
    //     console.log(calendar);
    //     // this.$refs.dueDateCalendar.clear(); // Call the reset method of the Calendar component
    //     calendar.clear();
    //   }
    // },
    clearTasks() {
      this.$store.dispatch("clearTasks"); // Clear all the tasks
      this.newTask = ""; // Clear the input field
    },
  },
};
</script>
