<!-- Tasks.vue -->

<template>
  <div>
    <template v-if="pendingTasksCount !== 0">
      <h2 class="text-pink-500 font-semibold uppercase mt-8 mb-3">
        Pending Tasks
      </h2>
    </template>

    <select v-model="selectedFilter">
      <option value="all">All</option>
      <option value="completed">Completed</option>
      <option value="pending">Pending</option>
      <option value="overdue">Overdue</option>
    </select>

    <Task v-for="(task, index) in filteredTasks" :key="index" :task="task" />
  </div>
</template>

<script>
import Task from "./Task.vue";

export default {
  name: "Tasks",
  components: {
    Task,
  },
  computed: {
    tasks() {
      return this.$store.state.tasks;
    },
    pendingTasksCount() {
      return this.tasks.filter((task) => !task.completed).length;
    },
    filteredTasks() {
      if (this.selectedFilter === "all") {
        return this.tasks;
      } else if (this.selectedFilter === "completed") {
        return this.tasks.filter((task) => task.completed);
      } else if (this.selectedFilter === "pending") {
        return this.tasks.filter((task) => !task.completed);
      } else if (this.selectedFilter === "overdue") {
        const now = new Date().getTime(); // Get current timestamp
        return this.tasks.filter(
          (task) => !task.completed && new Date(task.dueDate).getTime() < now
        );
      }
    },
  },
  data() {
    return {
      selectedFilter: "all",
    };
  },
};
</script>
