<template>
  <footer class="bg-slate-100 p-4 text-center text-xs rounded-b-lg">
    <p class="text-gray-600">
      &copy; {{ currentYear }} All rights reserved. | Made with 💖 by
      <a
        class="hover:text-indigo-500 decoration-indigo-600 hover:underline hover:underline-offset-4"
        href="https://github.com/praizjosh/"
        target="_blank"
        >Josh Praise</a
      >
    </p>
  </footer>
</template>

<script>
export default {
  computed: {
    currentYear() {
      return new Date().getFullYear();
    },
  },
};
</script>

<style scoped>
/* Add component-specific styles here */
</style>
