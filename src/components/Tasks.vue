<!-- Tasks.vue -->

<template>
  <div>
    <Task
      v-for="(task, index) in tasks"
      :key="index"
      :task="task"
      :index="index"
      class="bg-white hover:bg-indigo-50"
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
