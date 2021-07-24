<template>
  <div class="nav-item" @click="getType(index)" :data-index="index">
    {{ item.chs }}
  </div>
</template>
<script>
export default {
  name: "NavItem",
  props: {
    item: Object,
    index: Number,
  },
  setup(props, { emit }) {
    const getType = (index) => {
      emit("directiveCurIdx", index);
    };
    return {
      getType,
    };
  },
};
</script>
<style scoped>
.active {
  color: orange;
}
</style>