<template>
  <div class="top-bar">
    <ul>
      <router-link to="shop">
        <li>产品</li>
      </router-link>
      <router-link to="ip">
        <li>IP</li>
      </router-link>
      <router-link to="eve">
        <li>事件</li>
      </router-link>
    </ul>
  </div>
</template>

<script>
export default {
  name: "topBar",
  data() {
    return {};
  },
  methods: {}
};
</script>
<style scoped>
/* .router-link-active {
  background: skyblue !important; 
  color: #fff;
} */

.router-link-active::before {
  background: skyblue !important; 
  color: #fff !important; 
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: -1;
  background: #f5f5f5;
  transform: perspective(0.5em) rotateX(5deg);
  transform-origin: bottom;
}
.top-bar {
  width: 100%;
  height: 60px;
}

.top-bar ul {
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: row;
}
.router-link-active{
  color: #fff !important; 
  font-size: 16px;
}
ul > a {
  width: 25%;
  height: 60px;
  line-height: 75px;
  cursor: pointer;
  text-decoration: none;
  text-align: center;
  position: relative;
  display: inline-block;
  font-size: 14px;
  color: black;
}
ul > a::before {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: -1;
  background: #f5f5f5;
  transform: perspective(0.5em) rotateX(5deg);
  transform-origin: bottom;
}
</style>