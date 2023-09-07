<template>
  <footer class="bg-slate-300 p-4 text-center text-xs my-4 rounded-lg">
    <p class="text-slate-900">
      &copy; {{ currentYear }} | Made with 💖 by
      <a
        class="hover:text-pink-600 decoration-pink-600 hover:underline hover:underline-offset-4"
        href="https://github.com/praizjosh/"
        target="_blank"
        >Josh Praise</a
      >
    </p>
  </footer>
</template>

<script>
export default {
  name: "Footer",
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
