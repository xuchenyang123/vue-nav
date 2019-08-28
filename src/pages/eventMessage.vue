<template>
  <div>
    <el-table
      ref="singleTable"
      :data="tableData"
      highlight-current-row
      @current-change="handleCurrentChange"
      style="width: 100%"
      border
    >
      <el-table-column type="index" width="50"></el-table-column>
      <el-table-column property="time" label="访问时间" width="200">
        <template slot-scope="scope">
          <span>{{scope.row.time | dealTime(scope.row.time)}}</span>
        </template>
      </el-table-column>
      <el-table-column property="event" label="触发事件" width="120"></el-table-column>
      <el-table-column property="plat" label="访问终端" width="120"></el-table-column>
      <el-table-column property="browser" label="访问所属浏览器"></el-table-column>
    </el-table>
  </div>
</template>

<script>
let moment = require("moment");
import bus from "./../assets/bus";
export default {
  name: "eventMessage",
  data() {
    return {
      tableData: [],
      currentRow: null
    };
  },
  methods: {
    handleCurrentChange(val) {
      this.currentRow = val;
    }
  },
  filters: {
    dealTime:function(value) {
      let str1 = value.substring(0, 4);
      //0823
      let str2 = value.substring(4, 8);
      var arr1 = new Array(); //定义一数组
      arr1 = str2.split(""); //字符分割
      arr1.splice(2, 0, "-");
      let str3 = arr1.join("");
      let str6 = str1 + "-" + str3;
      //hms
      let str4 = value.substring(8, 14);
      var arr2 = new Array();
      arr2 = str4.split("");
      arr2.splice(2, 0, ":");
      arr2.splice(5, 0, ":");
      let str5 = arr2.join("");
      let allStr = str6 + " " + str5;
      return allStr;
    }
  },
  mounted() {
    this.tableData = this.$route.params.data;
  }
};
</script>

<style>
</style>