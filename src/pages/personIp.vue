<template>
  <div>
    <el-table
      ref="singleTable"
      :data="tableData"
      highlight-current-row
      style="width: 100%"
      border
      @cell-click="transferIp"
      :default-sort="{prop: 'ip_purchase', order: 'descending'}"
    >
      <el-table-column type="index" width="50"></el-table-column>
      <el-table-column property="ip" label="ip" width="200"></el-table-column>
      <el-table-column property="ip_info" label="info" width="300"></el-table-column>
      <el-table-column property="ip_pageview" label="pageview" width="200" sortable></el-table-column>
      <el-table-column property="ip_checkout" label="checkout" width="200" sortable></el-table-column>
      <el-table-column
        property="ip_purchase"
        label="purchase"
        sortable
        :sort-method="sortByPurchaseIp"
        width="200"
      ></el-table-column>
      <el-table-column property="time" label="访问时间" sortable>
        <template slot-scope="scope">
          <span>{{scope.row.time | dealTime(scope.row.time)}}</span>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import Bus from "./../assets/bus";
export default {
  name: "personIp",
  data() {
    return {
      tableData: [],
      currentRow: null,
      currentTime: "",
      loadTime: ""
    };
  },
  beforeRouteEnter: (to, from, next) => {
    if(from.path === "/eve" && to.path === "/ip"){
      next(vm=>{
        var ipCurrentData = sessionStorage.getItem("ipData");
        vm.tableData = JSON.parse(ipCurrentData);
      });
    }else{
      next()
    }
  },
  filters: {
    dealTime: function(value) {
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
  methods: {
    transferIp(row, column) {
      let data = row.events;
      if (column.type === "index") {
        this.$router.push({ name: "eventMessage", params: { data } });
      }
    },

    sortByPurchaseIp(obj1, obj2) {
      var a = obj1.ip_purchase;
      var b = obj2.ip_purchase;
      return a - b;
    }
  },
  mounted() {
    if (!this.$route.params.id) {
      return;
    }
    let recordData = this.$route.params.recordData;
    recordData.forEach((item, index) => {
      if (item.id === this.$route.params.id) {
        item.ips.forEach((items, num) => {
          items.time = items.events[0].time;
          this.$set(this.tableData, num, items);
        });
        var sessionIpData = window.sessionStorage;
        sessionIpData.ipData = JSON.stringify(item.ips);
      }
    });
    Bus.$on("transferDate", function(data) {
      var datas = data.split("");
      datas.splice(4, 1);
      datas.splice(6, 1);
      let str = datas.join("");
      self.getTableData(str);
    });
  },
  destroyed: function() {
    Bus.$off("transferDate");
  }
};
</script>

<style>
.btn {
  margin-bottom: 10px;
}
</style>