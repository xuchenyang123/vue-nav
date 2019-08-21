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
      <el-table-column property label="访问时间" width="120"></el-table-column>
      <el-table-column property label="触发事件" width="120"></el-table-column>
      <el-table-column property label="访问终端"></el-table-column>
    </el-table>
  </div>
</template>

<script>
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

  }
};
</script>

<style>
</style>