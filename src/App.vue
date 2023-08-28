<template>
  <div class="mx-auto p-4 w-full md:w-[560px] mt-0 md:mt-16" id="app">
    <Tasks />
    <Header />
    <TaskList />
    <Footer />
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Tasks from "./components/Tasks.vue";
import TaskList from "./components/TaskList.vue";
import Footer from "./components/Footer.vue";

export default {
  name: "App",
  components: {
    Header,
    Tasks,
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
