<template>
  <div>
    <el-table
      ref="singleTable"
      :data="tableData"
      highlight-current-row
      @current-change="handleCurrentChange"
      style="width: 100%"
      size="medium"
    >
      <el-table-column type="index" width="50"></el-table-column>
      <el-table-column property="id" label="产品" width="120"></el-table-column>
      <el-table-column property="length" label="点击次数"></el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: "shopMessage",
  data() {
    return {
      tableData: [],
      currentRow: null
    };
  },
  methods: {
    handleCurrentChange(row) {
      this.$router.push({ name: "personIp", params: { id: row.id } });
    }
  },
  mounted() {
   let datas = {
      message: "succ",
      r_code: 0,
      record: [
        {
          id: 1234,
          ips: [
            {
              events: [
                {
                  browser: "Apple Safari",
                  event: "checkout",
                  plat: "Win32",
                  time: "20190820171511"
                },
                {
                  browser: "Apple Safari",
                  event: "pageview",
                  plat: "Win32",
                  time: "20190820171632"
                }
              ],
              ip: "113.139.89.110"
            },
            {
              events: [
                {
                  browser: "Apple Safari",
                  event: "checkout",
                  plat: "Win32",
                  time: "20190820171511"
                },
                {
                  browser: "Apple Safari",
                  event: "pageview",
                  plat: "Win32",
                  time: "20190820171632"
                }
              ],
              ip: "556.139.89.888"
            },
            {
              events: [
                {
                  browser: "Apple Safari",
                  event: "checkout",
                  plat: "Win32",
                  time: "20190820171511"
                },
                {
                  browser: "Apple Safari",
                  event: "pageview",
                  plat: "Win32",
                  time: "20190820171632"
                },
                {
                  browser: "Apple Safari",
                  event: "pageview",
                  plat: "Win32",
                  time: "20190820171632"
                }
              ],
              ip: "556.139.89.887"
            },
            {
              events: [
                {
                  browser: "Apple Safari",
                  event: "checkout",
                  plat: "Win32",
                  time: "20190820171511"
                },
                {
                  browser: "Apple Safari",
                  event: "pageview",
                  plat: "Win32",
                  time: "20190820171632"
                },
                {
                  browser: "Apple Safari",
                  event: "pageview",
                  plat: "Win32",
                  time: "20190820171632"
                }
              ],
              ip: "556.139.89.887"
            }
          ]
        },
        {
          id: 52313,
          ips: [
            {
              events: [
                {
                  browser: "Apple Safari",
                  event: "checkout",
                  plat: "Win32",
                  time: "20190820171518"
                }
              ],
              ip: "113.139.89.110"
            }
          ]
        }
      ]
    };
    if (datas) {
      // console.log(datas);
      // var arr = [];
      // var arr1 = [];
      // var arr2 = [];
      // var arr3 = [];

      datas.record.forEach((item, index) => {
        this.tableData[index] = {};
        this.tableData[index].id = datas.record[index].id;
        // this.tableData[index].length = datas.record[index].ips[0].events.length;
        // console.log(datas.record[index].ips[0].events);

        // arr.push(item);
      });

      // arr.forEach((item, index) => {
      //   arr1.push(item.ips);
      // });
      // for (var i = 0; i < arr1.length; i++) {
      //   for (var j = 0; j < arr1[i].length; j++) {
      //     // console.log(arr1[i][j].events.length);
      //     arr3.push(arr1[i][j].events.length);
      //   }
      // }
      // for(var n = 0;n < this.tableData.length;n++){
      //   arr2.push(arr1[n].length);
      // }
      // console.log(arr2);
      // console.log(arr3);
      // console.log(typeof arr2[0]);
      // for(var v = 0;v < arr2.length;v++){
      //   for(var b = 0;b < arr3.length;b++){

      //   }
      // }
    }


  }
};
</script>

<style>
div {
  width: 100%;
  height: auto;
}
</style>