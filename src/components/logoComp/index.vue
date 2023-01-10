<template>
  <div class="header-styles">
    <!-- <el-image style="width: 50px; height: 50px; rotate: 180deg" :src="logo" /> -->
    BESTOFYOURSELF
  </div>
</template>

<script>
import { defineComponent } from "vue";
import logo from "@/assets/logo.jpeg";
export default defineComponent({
  setup() {
    return {
      logo,
    };
  },
});
</script>

<style scoped lang="scss">
.header-styles {
  display: flex;
  justify-content: space-between;
  color: orange;
  font-size: 16px;
  font-weight: bold;
}
</style>
