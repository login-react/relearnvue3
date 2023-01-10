<template>
  <el-card>
    <div class="role-controller">
      <el-transfer
        v-model="transferValue"
        :data="dataList"
        :titles="['权限列表', '已选权限']"
      />
    </div>
  </el-card>
</template>

<script>
import { ref, defineComponent } from "vue";
export default defineComponent({
  setup() {
    const transferValue = ref([]);
    const dataList = ref([
      {
        label: "admin",
      },
    ]);
    return {
      transferValue,
      dataList,
    };
  },
});
</script>

<style scoped lang="scss">
.role-controller {
  display: flex;
  justify-content: center;
}
</style>
