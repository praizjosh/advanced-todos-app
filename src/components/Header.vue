<template>
  <header class="bg-white my-4 flex flex-col space-y-6 p-8 shadow rounded-2xl">
    <div
      class="flex flex-col md:flex-row justify-between md:items-center space-y-4 md:space-x-4"
    >
      <!-- <div class="w-full md:flex-row"> -->
      <div
        class="w-full flex flex-row items-center justify-start space-y-0 space-x-1"
      >
        <h1 class="font-medium text-xl md:text-2xl text-gray-600">Hello,</h1>
        <span class="text-xl md:text-2xl text-sky-500">
          {{ greeting() }}
        </span>
      </div>
      <div class="w-full md:w-2/5">
        <Button
          @click="toggleAddTask"
          :showAddTask="showAddTask"
          :text="showAddTask ? 'Close' : 'Add a Task'"
          :class="
            showAddTask
              ? 'bg-red-600 hover:bg-red-700'
              : 'bg-sky-600 hover:bg-sky-700'
          "
          class="w-full"
        />
      </div>
    </div>
    <div class="mb-2 mt-8">
      <hr />
    </div>

    <template v-if="!showAddTask">
      <Summary />
    </template>
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

      <div
        class="w-full flex flex-col md:flex-row space-y-2 md:space-x-4 justify-evenly items-center"
      >
        <Button
          @click="addTask"
          text="Add Task"
          class="w-full py-2 px-4 bg-sky-600 hover:bg-sky-700 text-white rounded-md"
        />

        <Button
          @click="showDeleteModal"
          text="Clear Tasks"
          class="w-full py-2 px-4 bg-pink-600 hover:bg-pink-700 text-white rounded-md"
        />
      </div>
    </div>

    <!-- Insert the modal component -->
    <delete-task-modal
      :show="isDeleteModalOpen"
      @confirm="handleDeleteConfirmation"
      @cancel="closeDeleteModal"
      text="Are you sure you want to clear all tasks?"
    />
  </header>
</template>

<script>
import { parse, format } from "date-fns"; // Import Date formatter function
import Button from "./Button.vue";
import Summary from "./Summary.vue";
import Calendar from "./Calendar.vue";
import DeleteTaskModal from "@/components/DeleteTaskModal.vue";

export default {
  data() {
    return {
      showAddTask: false,
      newTask: "",
      dueDate: null,
      calendarOpen: true,
      isDeleteModalOpen: false,
      delete: null,
    };
  },
  created() {},
  name: "Header",
  components: {
    Button,
    Calendar,
    Summary,
    DeleteTaskModal,
  },
  methods: {
    greeting() {
      const now = new Date();
      const currentHour = now.getHours();
      if (currentHour >= 5 && currentHour < 12) {
        return "Good morning!";
      } else if (currentHour >= 12 && currentHour < 17) {
        return "Good afternoon!";
      } else {
        return "Good evening!";
      }
    },
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
        this.$notify({
          type: "error",
          text: "Field can't be blank. Please enter a valid task and due date.",
        });
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
    handleDeleteConfirmation() {
      this.clearTasks(); // Clear all tasks
      this.$notify({
        type: "success",
        text: "Tasks cleared successfully",
      });
      this.closeDeleteModal(); // Close the modal
    },

    clearTasks() {
      this.$store.dispatch("clearTasks"); // Clear all the tasks
      this.newTask = ""; // Clear the input field
    },
    showDeleteModal() {
      this.isDeleteModalOpen = true;
    },
    closeDeleteModal() {
      this.isDeleteModalOpen = false;
      this.delete = null;
    },
  },
};
</script>
