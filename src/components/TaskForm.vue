<template>
  <div class="bg-white px-8 py-8 rounded-t-lg shadow">
    <header class="pb-8 rounded-t">
      <h1 class="text-center font-medium text-3xl text-blue-600">
        Task Tracker
      </h1>
      <div class="mb-2 mt-8">
        <hr />
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

      <div class="w-full space-x-2 md:w-2/5 flex justify-evenly items-center">
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
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newTask: "",
    };
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
