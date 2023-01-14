<template>
  <div>
    <router-view></router-view>
  </div>
  <!-- <div>
    <el-button @click="handleTest" type="primary">获取token</el-button>
    <el-button @click="handleGetUser" type="primary">获取用户</el-button>
    <el-button type="primary" @click="handlTestDefValue">测试def值</el-button>
  </div>
  <Demo ref="treeRef" :title="testData.title" @gateway="handleGateway" />
  <Provide /> -->
</template>
<script setup>
import { reactive, ref, watchEffect, provide } from "vue";
import Demo from "./Demo.vue";
import Provide from "./Provide.vue";
import { setToken } from "@/utils/auth.js";
import { login, getUser } from "@/service/user.js";
provide("getData", {
  val: "this is a provide",
});
const testData = reactive({
  title: "测试",
});
const treeRef = ref();
const handlTestDefValue = () => {
  console.log(treeRef.value);
};
const handleGateway = ({ data }) => {
  console.log("data的值:>> ", data);
};

watchEffect(() => {
  // console.log("------->>>测试", import.meta.env);
});
const handleTest = async () => {
  const response = await login({
    userName: "admin",
    passWord: "123456",
  });
  setToken("USER_INFO", JSON.stringify(response.data));
};
const handleGetUser = () => {
  getUser({
    fileName: "/Users/edy/Desktop/node文件夹/abc/testdd2.pptx",
  });
};
</script>
