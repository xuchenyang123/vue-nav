<!--  -->
<template>
  <div class="btn">
    <ul>
      <li style="width:100px;height:100%;">
        <el-row>
          <el-button size="mini" @click="upload()">刷新</el-button>
        </el-row>
      </li>
      <li style="width:220px;height:100%;">
        <el-date-picker
          v-model="value1"
          type="date"
          placeholder="选择日期"
          format="yyyy 年 MM 月 dd 日"
          value-format="yyyy-MM-dd"
          size="mini"
        ></el-date-picker>
      </li>
      <li>
        <el-row>
          <el-button size="mini" @click="update" v-show="show">查询</el-button>
        </el-row>
      </li>
    </ul>
  </div>
</template>

<script>
import Bus from "./../assets/bus";
export default {
  name: "load",
  data() {
    return {
      value1: "",
      show:true
    };
  },
  watch: {
    $route(to, from) {
      if(to.path === "/shop"){
        this.show = true;
      }else{
        this.show = false;
      }
    }
  },
  methods: {
    upload() {
      window.location.reload();
    },
    //点击查询传值日期
    update() {
      sessionStorage.setItem("signoutShow", this.value1);
      Bus.$emit("transferDate", this.value1);
    },
    getDefaultTime() {
      let date = new Date();
      let y = date.getFullYear();
      let MM = date.getMonth() + 1;
      MM = MM < 10 ? "0" + MM : MM;
      let d = date.getDate();
      d = d < 10 ? "0" + d : d;
      let h = date.getHours();
      h = h < 10 ? "0" + h : h;
      let m = date.getMinutes();
      m = m < 10 ? "0" + m : m;
      let s = date.getSeconds();
      s = s < 10 ? "0" + s : s;
      var currentStrTime = y + "-" + MM + "-" + d;
      // return this.value1;
      sessionStorage.setItem("signoutShow", currentStrTime);
    }
  },

  mounted() {
    //将现在的时间存进session
    if (!sessionStorage.getItem("signoutShow")) {
      this.getDefaultTime();
      var loadTime = sessionStorage.getItem("signoutShow");
      this.value1 = loadTime;
    } else {
      this.value1 = sessionStorage.getItem("signoutShow");
    }
  }
};
</script>
<style scoped>
.btn {
  margin-left: 10px;
}
ul {
  width: 100%;
  height: 40px;
  display: flex;
  align-items: center;
}
ul li {
  margin-right: 10px;
  display: flex;
  align-items: center;
}
</style>