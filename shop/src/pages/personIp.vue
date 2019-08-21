<template>
  <div>
    <el-table
      ref="singleTable"
      :data="tableData"
      highlight-current-row
      @current-change="handleCurrentChange"
      style="width: 100%"
    >
      <el-table-column type="index" width="50"></el-table-column>
      <el-table-column property="ip" label="ip" width="200"></el-table-column>
      <el-table-column property="length" label="点击次数"></el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: "personIp",
  data() {
    return {
      tableData: [],
      currentRow: null
    };
  },
  methods: {
    handleCurrentChange(row) {
      debugger;
      this.$router.push({ name: "eventMessage", params: { ip: row.ip } });
    }
  },
  mounted() {
    console.log(this.$route.params);
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
     console.log(datas);
     datas.record.forEach((item,index)=>{
       console.log(item);
       if(item.id === this.$route.params.id){
         console.log(item);
         item.ips.forEach((items,num)=>{
           console.log(items);
           this.tableData[num] = {};
           this.tableData[num].ip = items.ip;
           this.tableData[num].length = items.events.length;
         });
       }else{
         return false;
       }
     });
  }
};
</script>

<style>
</style>