<template>
  <div class="mx-auto p-4 w-full md:w-[600px] mt-0 md:mt-16" id="app">
    <span class="p-1 text-2xl text-blue-600"> Hello! </span>
    <Header />
    <!-- <TaskForm /> -->
    <TaskList />
    <Footer />
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import TaskForm from "./components/TaskForm.vue";
import TaskList from "./components/TaskList.vue";
import Footer from "./components/Footer.vue";

export default {
  name: "App",
  components: {
    Header,
    TaskForm,
    TaskList,
    Footer,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
