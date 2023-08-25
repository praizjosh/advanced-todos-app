<template>
  <div class="bg-white px-8 py-8 rounded-t-lg shadow">
    <header
      class="bg-white my-6 flex flex-col space-y-4 px-8 py-8 shadow rounded"
    >
      <div class="flex justify-between items-center space-x-4">
        <div class="w-1/2 md:w-3/4">
          <h1 class="font-medium text-2xl md:text-3xl text-blue-600">
            Task Tracker
          </h1>
        </div>
        <div class="w-1/2 md:w-1/4">
          <Button
            text="Add New Task"
            class="bg-indigo-600 hover:bg-indigo-700"
          />
        </div>
      </div>
      <div class="mb-2 mt-8">
        <hr />
      </div>

      <!-- Add New Task -->
      <div class="flex flex-col space-y-4 justify-between items-center">
        <div class="w-full">
          <input
            v-model="newTask"
            @keyup.enter="addTask"
            placeholder="Add a new task..."
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          />
        </div>

        <div class="w-full">
          <Calendar v-model="dueDate" />
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

    <div
      class="flex flex-col space-y-4 md:space-y-0 md:space-x-2 md:flex-row justify-between items-center"
    >
      <div class="w-full md:w-3/5">
        <div>
          <input
            v-model="newTask"
            @keyup.enter="addTask"
            placeholder="Add a new task..."
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          />
        </div>
      </div>

      <!-- <div class="w-full space-x-2 md:w-2/5 flex justify-evenly items-center">
        <button
          @click="addTask"
          class="w-full py-2 px-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-md"
        >
          Add Item
        </button>

        <button
          @click="clearTasks"
          class="w-full py-2 px-4 bg-pink-600 hover:bg-pink-700 text-white rounded-md"
        >
          Clear
        </button>
      </div> -->
    </div>
  </div>
</template>

<script>
import Button from "./Button.vue";
import Calendar from "./Calendar.vue";

export default {
  data() {
    return {
      newTask: "",
    };
  },
  components: {
    Button,
    Calendar,
  },
  methods: {
    addTask() {
      if (this.newTask !== "") {
        this.$store.dispatch("addTask", this.newTask);
        this.newTask = "";
      } else {
        alert("Field can't be blank. Please enter a valid task.");
      }
    },
    clearTasks() {
      this.$store.dispatch("clearTasks"); // Clear all the tasks
      this.newTask = ""; // Clear the input field
    },
  },
};
</script>
