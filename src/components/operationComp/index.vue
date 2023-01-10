<template>
  <el-dropdown :hide-on-click="false" @command="handleCommand">
    <el-icon style="font-size: 22px">
      <UserFilled />
    </el-icon>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item command="logout">登出</el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<script>
import { defineComponent } from "vue";
import { useRouter } from "vue-router";
import { UserFilled } from "@element-plus/icons-vue";

export default defineComponent({
  components: {
    UserFilled,
  },
  setup() {
    const router = useRouter();
    return {
      router,
    };
  },
  methods: {
    handleCommand(type) {
      this.router.push("/login");
    },
  },
});
</script>

<style></style>
