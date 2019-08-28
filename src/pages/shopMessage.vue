<template>
  <div>
    <el-table
      ref="singleTable"
      :data="tableData"
      highlight-current-row
      style="width: 100%"
      size="medium"
      border
      @cell-click="transferId"
      :default-sort="{prop: 'id_purchase', order: 'descending'}"
    >
      <el-table-column type="index" width="50"></el-table-column>
      <el-table-column property="id" label="产品" width="120"></el-table-column>
      <el-table-column property="id_pageview" label="pageview" width="120" sortable></el-table-column>
      <el-table-column property="id_checkout" label="checkout" width="120" sortable></el-table-column>
      <el-table-column
        property="id_purchase"
        label="purchase"
        width="120"
        sortable
        :sort-method="sortByPurchase"
      ></el-table-column>
      <el-table-column property="belong" label="belong" width="120"></el-table-column>
      <el-table-column property="pimg" label="pimg" width="240">
        <template slot-scope="scope">
          <img :src="scope.row.pimg" alt style="width:50px;height:50px;" />
        </template>
      </el-table-column>
      <el-table-column property="url" label="url" width="240">
        <template slot-scope="scope">
          <a
            :href="scope.row.url"
            style="text-decoration:none;font-size:14px;"
            target="_blank"
          >{{scope.row.url}}</a>
        </template>
      </el-table-column>
      <el-table-column property="nums" label="访问IP"></el-table-column>
    </el-table>
  </div>
</template>

<script>
import Bus from "./../assets/bus";
export default {
  name: "shopMessage",
  data() {
    return {
      tableData: [],
      currentRow: null,
      recordData:""
    };
  },
  methods: {
    transferId(row, column) {
      if (column.type === "index") {
        this.$router.push({
          name: "personIp",
          params: { id: row.id,recordData:this.recordData}
        });
      }
    },
    sortByPurchase(obj1, obj2) {
      var a = obj1.id_purchase;
      var b = obj2.id_purchase;
      return a - b;
    },
    //封装请求
    getTableData(date) {
      this.tableData = [];
      let self = this;
      //没有点击查询
      this.$http
        .get("/record/get?date=" + date)
        .then(function(reponse) {
          var datas = reponse.data.record;
          self.recordData = datas;
          reponse.data.record.forEach((item, index) => {
            self.tableData[index] = {};
            self.tableData[index].id = item.id;
            self.tableData[index].belong = item.belong;
            self.tableData[index].id_pageview = item.id_pageview;
            self.tableData[index].id_checkout = item.id_checkout;
            self.tableData[index].id_purchase = item.id_purchase;
            self.tableData[index].pimg = item.pimg;
            self.tableData[index].url = item.url;
            self.tableData[index].nums = item.nums;
            self.$set(self.tableData, index, self.tableData[index]);
          });
        })
        .catch(function(err) {
          console.log(err);
        });
    }
  },
  mounted() {
    let self = this;
    var loadTime = sessionStorage.getItem("signoutShow");
    let arr = loadTime.split("");
    arr.splice(4, 1);
    arr.splice(6, 1);
    let dealAfterTime = arr.join("");
    this.getTableData(dealAfterTime);

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
div {
  width: 100%;
  height: auto;
}
.btn {
  margin-bottom: 10px;
}
</style>