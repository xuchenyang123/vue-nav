<template>
  <div id="app">
    <topBar />
    <router-view />
  </div>
</template>

<script>
import topBar from "./components/topbar/topbar";
export default {
  name: "App",
  components: {
    topBar
  }
};
</script>

<style>
#app {
  margin-top: 200px;
  width: 100%;
  height: 100%;
  position: relative;
}
</style>
