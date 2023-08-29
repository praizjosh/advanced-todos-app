<!-- Summary.vue -->

<template>
  <div>
    <h2 class="mb-3 text-sm font-bold uppercase tracking-wide text-pink-500">
      Summary
    </h2>
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
                stroke-width="1.7"
                d="M5 5h8m-1-3a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1m6 0v3H6V2m6 0h4a1 1 0 0 1 1 1v15a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h4m0 9.464 2.025 1.965L12 9.571"
              />
            </svg>
          </div>
          <span class="text-xl text-slate-700 font-bold">{{
            tasks.length
          }}</span>
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
                stroke-width="1.7"
                d="m6.072 10.072 2 2 6-4m3.586 4.314.9-.9a2 2 0 0 0 0-2.828l-.9-.9a2 2 0 0 1-.586-1.414V5.072a2 2 0 0 0-2-2H13.8a2 2 0 0 1-1.414-.586l-.9-.9a2 2 0 0 0-2.828 0l-.9.9a2 2 0 0 1-1.414.586H5.072a2 2 0 0 0-2 2v1.272a2 2 0 0 1-.586 1.414l-.9.9a2 2 0 0 0 0 2.828l.9.9a2 2 0 0 1 .586 1.414v1.272a2 2 0 0 0 2 2h1.272a2 2 0 0 1 1.414.586l.9.9a2 2 0 0 0 2.828 0l.9-.9a2 2 0 0 1 1.414-.586h1.272a2 2 0 0 0 2-2V13.8a2 2 0 0 1 .586-1.414Z"
              />
            </svg>
          </div>
          <span class="text-xl text-slate-700 font-bold">{{
            completedTasksCount
          }}</span>
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
                stroke-width="1.7"
                d="M10 6v4l3.276 3.276M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
          </div>
          <span class="text-xl text-slate-700 font-bold">{{
            pendingTasksCount
          }}</span>
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
                stroke-width="1.7"
                d="m9.046 3.59-.435-2.324m.435 2.324a5.338 5.338 0 0 1 6.033 4.333l.331 1.77c.439 2.344 2.383 2.587 2.599 3.76.11.786.22 1.171-.309 1.271L5 17.101c-.529.1-.639-.488-.749-1.074-.219-1.172 1.706-2.102 1.067-4.447l-.331-1.769a5.338 5.338 0 0 1 4.059-6.22Zm-7.13 4.602a8.472 8.472 0 0 1 2.17-5.048m2.646 13.633A3.472 3.472 0 0 0 13.46 16l.089-.5-6.817 1.277Z"
              />
            </svg>
          </div>
          <span class="text-xl text-slate-700 font-bold">{{
            overdueTasksCount
          }}</span>
        </div>
        <span class="text-gray-600 text-sm">Overdue</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Summary",
  components: {},
  computed: {
    tasks() {
      return this.$store.state.tasks;
    },
    completedTasksCount() {
      return this.tasks.filter((task) => task.completed).length;
    },
    pendingTasksCount() {
      return this.tasks.filter((task) => !task.completed).length;
    },
    overdueTasksCount() {
      const now = new Date();
      return this.tasks.filter(
        (task) => !task.completed && new Date(task.dueDate) < now
      ).length;
    },
  },

  methods: {},
};
</script>
