<template>
  <!-- <div>
    <router-view></router-view>
  </div> -->
  <div>
    <el-button @click="handleTest" type="primary">获取token</el-button>
    <el-button @click="handleGetUser" type="primary">获取用户</el-button>
  </div>
</template>
<script setup>
import { setToken } from "@/utils/auth.js";
import { login, getUser } from "@/service/user.js";
const handleTest = async () => {
  const response = await login({
    userName: "admin",
    passWord: "123456",
  });
  setToken("USER_INFO", JSON.stringify(response.data));
};
const handleGetUser = () => {
  getUser({
    userName: "admin",
    passWord: "123456",
  });
};
</script>
