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
  }
};
</script>
<style scoped>
.router-link-active {
  background: skyblue !important;
  color: #fff;
}
.top-bar {
  width: 100%;
  height: 40px;
  margin-bottom: 10px;
}

.top-bar ul {
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}
.top-bar ul a {
  width: 32%;
  height: 40px;
  line-height: 40px;
  list-style: none;
  cursor: pointer;
  text-decoration: none;
  text-align: center;
  border-radius: 5px;
  margin-right: 10px;
  background: #f5f5f5;
  color: black;
}
.top-bar ul a li{
  width: 100%;
  height: 100%;
  
}
</style>