<!-- Tasks.vue -->

<template>
  <div>
    <Task
      v-for="(task, index) in tasks"
      :key="index"
      :task="task"
      :index="index"
      :class="{
        'completed-task': task.completed,
        'bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-indigo-50 dark:hover:bg-gray-600': true,
      }"
    />
  </div>
</template>

<script>
import Task from "./Task.vue";

export default {
  name: "Tasks",
  computed: {
    tasks() {
      return this.$store.state.tasks;
    },
  },
  components: {
    Task,
  },
};
</script>
