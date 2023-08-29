<template>
  <div class="mx-auto p-4 w-full md:w-[560px] mt-0 md:mt-16" id="app">
    <Header />
    <Tasks />
    <Footer />
    <notifications position="bottom right" class="cursor-pointer" />
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Tasks from "./components/Tasks.vue";
import Footer from "./components/Footer.vue";

export default {
  name: "App",
  components: {
    Header,
    Tasks,
    Footer,
  },
};
</script>

<style>
#app {
  font-family: Nunito, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
