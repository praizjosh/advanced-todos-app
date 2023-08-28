<template>
  <div class="mx-auto p-4 w-full md:w-[560px] mt-0 md:mt-16" id="app">
    <div class="flex flex-col p-8 space-y-3">
      <!-- <Button
        text="Show Notification"
        @click="showNotification"
        class="bg-green-500 mb-4 py-2 px-4 text-white rounded-md"
      /> -->
    </div>
    <Header />
    <Tasks />
    <!-- <TaskList /> -->
    <Footer />
  </div>
</template>

<script>
import Button from "./components/Button.vue";
import Header from "./components/Header.vue";
import Tasks from "./components/Tasks.vue";
import TaskList from "./components/TaskList.vue";
import Footer from "./components/Footer.vue";

export default {
  name: "App",
  components: {
    Button,
    Header,
    Tasks,
    TaskList,
    Footer,
  },
  methods: {
    showNotification() {
      console.log("show notification clicked!");
      this.$notify({
        title: "Notification Title",
        text: "This is the notification content.",
        duration: 5000, // Optional: Set the duration (in milliseconds) for how long the notification should be shown.
      });
    },
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
