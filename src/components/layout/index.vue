<template>
  <div class="common-layout">
    <el-container>
      <el-header style="background: #ffffff; color: #ccc">
        <div>
          <logoComp />
        </div>
        <div>
          <operationComp />
        </div>
      </el-header>
      <el-container>
        <el-aside :style="{ width: `${asideWidth}px`, background: '#2F63B8' }">
          <MainMenu @collapse="handleCollapse" />
        </el-aside>
        <el-container>
          <div>
            <el-main style="height: calc(100vh - 123px); background: #f1f3f4">
              <div class="routeMeta">
                {{ routeMeta }}
              </div>
              <router-view></router-view>
            </el-main>
          </div>
          <el-footer>
            <div class="footer">I will work together to become stronger</div>
          </el-footer>
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>
<script>
import { ref, computed } from "vue";
import { useRouter, useRoute } from "vue-router";
import MainMenu from "../menu/index.vue";
import logoComp from "../logoComp/index.vue";
import operationComp from "../operationComp/index.vue";
export default {
  components: {
    MainMenu,
    logoComp,
    operationComp,
  },
  setup() {
    const asideWidth = ref(200);
    const router = useRouter();
    const route = useRoute();
    const routeMeta = computed(() => {
      return route?.meta?.title;
    });
    return {
      asideWidth,
      router,
      routeMeta,
    };
  },
  methods: {
    handleCollapse({ collapse }) {
      !collapse ? (this.asideWidth = 64) : (this.asideWidth = 200);
    },
  },
};
</script>
<style scoped lang="scss">
.el-header {
  display: flex;
  width: 100%;
  align-items: center !important;
  justify-content: space-between;
}

.footer {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  font-size: 13px;
  color: rgba(42, 39, 39, 0.8);
}
.routeMeta {
  height: 30px;
}
</style>
