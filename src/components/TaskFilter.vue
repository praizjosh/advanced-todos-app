<!-- TasksFilter.vue -->

<template>
  <div class="mb-4">
    <label class="font-semibold">Filter tasks:</label>
    <select
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

<script>
export default {
  name: "TaskFilter",
  data() {
    return {
      selectedFilter: "all",
    };
  },
  watch: {
    selectedFilter: function (newFilter) {
      this.$emit("filter", newFilter);
    },
  },
};
</script>
