<!-- Tasks.vue -->

<template>
  <div class="mt-8">
    <template v-if="TasksCount !== 0">
      <div class="my-4">
        <label for="filterTasks" class="text-gray-800 font-semibold"
          >Filter tasks:</label
        >
        <select
          id="filterTasks"
          name="filterTasks"
          v-model="selectedFilter"
          class="ml-2 rounded-md border border-gray-300 px-2 py-1"
        >
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="pending">Pending</option>
          <option value="overdue">Overdue</option>
        </select>
      </div>
    </template>

    <Task
      v-for="(task, index) in filteredTasks"
      :key="index"
      :task="task"
      :index="index"
      @toggleCompletion="toggleTaskCompletion(index)"
    />
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
      // return this.$store.state.tasks;
      return this.$store.state.tasks || []; // Handle empty tasks array
    },
    TasksCount() {
      // return this.tasks.length;
      return this.tasks.filter((task) => task).length;
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
  methods: {
    toggleTaskCompletion() {
      const task = this.tasks;
      if (task) {
        const updatedTask = { ...task, completed: !task.completed };
        this.$store.commit("UPDATE_TASK", {
          // index: index,
          task: updatedTask,
        });
        const taskStatus = task.completed ? "completed" : "incomplete";
        this.$notify({
          type: "success",
          text: `Task marked as ${taskStatus}`,
        });
      }
    },
  },
};
</script>
