<template>
  <nav
    class="nav-bar"
    v-navCurrent="{
      className: 'nav-item',
      activeClass: 'active',
      curIdx,
    }"
  >
    <div class="scroll-area">
      <div class="nav-wrapper">
        <NavItem
          v-for="(item, index) of typeData"
          :key="index"
          :item="item"
          :index="index"
          @directiveCurIdx="directiveCurIdx"
        />
      </div>
    </div>
  </nav>
</template>
<script>
import typeData from "@/configs/types";
import NavItem from "./item.vue";
import { ref } from "vue";
export default {
  components: {
    NavItem,
  },
  name: "NavBar",
  setup() {
    const curIdx = ref(0);
    const directiveCurIdx = (idx) => {
      curIdx.value = idx;
    };
    return {
      typeData,
      curIdx,
      directiveCurIdx,
    };
  },
};
</script>
<style scoped>
.nav-wrapper {
  display: flex;
}
</style>