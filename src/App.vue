<template>
  <div id="app">
    <load/>
    <topBar />
    <router-view />
  </div>
</template>

<script>
import topBar from "./components/topbar/topbar";
import load from "./pages/loading";
export default {
  name: "App",
  components: {
    topBar,
    load
  }
};
</script>

<style>
#app {
  margin-top: 20px;
  width: 100%;
  height: 100%;
  position: relative;
}
</style>
