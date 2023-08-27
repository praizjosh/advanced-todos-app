<template>
  <header
    class="bg-white my-6 flex flex-col space-y-4 px-8 py-8 shadow rounded-lg"
  >
    <div class="flex justify-between items-center space-x-4">
      <div class="w-1/2 md:w-3/5">
        <h1 class="font-medium text-2xl md:text-3xl text-blue-600">
          Task Tracker
        </h1>
      </div>
      <div class="w-1/2 md:w-2/5">
        <Button
          @click="toggleAddTask"
          :showAddTask="showAddTask"
          :text="showAddTask ? 'Close' : 'Add Task'"
          :class="
            showAddTask
              ? 'bg-red-600 hover:bg-red-700'
              : 'bg-indigo-600 hover:bg-indigo-700'
          "
        />
      </div>
    </div>
    <div class="mb-2 mt-8">
      <hr />
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
          class="w-full py-2 px-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-md"
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
