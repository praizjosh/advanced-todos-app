<template>
  <div class="mx-auto w-full md:w-[740px] mt-0 md:mt-16" id="app">
    <TaskForm />
    <TaskList />
    <Foot />
  </div>
</template>

<script>
import TaskForm from "./components/TaskForm.vue";
import TaskList from "./components/TaskList.vue";
import Foot from "./components/Foot.vue";

export default {
  name: "App",
  components: {
    TaskForm,
    TaskList,
    Foot,
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
