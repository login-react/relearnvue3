<template>
  <div @click="handleChildEmits">
    {{ title }}
  </div>
</template>

<script setup>
const props = defineProps({
  title: String,
});
const emits = defineEmits(["handleChildEmits"]);
const handleChildClick = () => {
  console.log("子组件");
};
// 暴露方法
defineExpose(handleChildClick);
const handleChildEmits = () => {
  emits("gateway", {
    data: 1,
  });
};
</script>

<style></style>
