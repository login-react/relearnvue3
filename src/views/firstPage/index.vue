<template>
  <!-- <el-card>
    <my-input></my-input>
    <my-button></my-button>
    <div ref="firstPageRef" style="width: 100%; height: 400px"></div>
  </el-card> -->
  <div @click="handleTest">测试</div>
</template>

<script setup>
import { login } from "@/service/user.js";
const handleTest = () => {
  login({
    userName: "admin",
    passWord: "123456",
  });
};
// import * as echarts from "echarts";
// import { optionsConfig } from "./options";
// export default {
//   mounted() {
//     this.myEcharts();
//   },
//   methods: {
//     myEcharts() {
//       const myChart = echarts.init(this.$refs.firstPageRef);
//       myChart.setOption(optionsConfig());
//     },
//   },
// };
</script>

<style></style>
