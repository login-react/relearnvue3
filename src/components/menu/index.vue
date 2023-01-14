<template>
  <div class="container">
    <el-menu
      text-color="#FFFFFF"
      :default-openeds="[1]"
      :unique-opened="true"
      :active-text-color="menuItemActityColor"
      background-color="#2F63B8"
      :collapse="!isCollapse"
      :collapse-transition="false"
      router
    >
      <!-- <div class="collapse-style">
        <el-icon @click="handleCollapse"><Expand /></el-icon>
      </div> -->
      <el-sub-menu :index="1">
        <template #title>
          <el-icon>
            <location />
          </el-icon>
          <span>管理模块</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="/layout/report">首页</el-menu-item>
          <el-menu-item index="/layout/user">用户管理</el-menu-item>
          <el-menu-item index="/layout/role">角色管理</el-menu-item>
          <el-menu-item index="/layout/demo">示例demo</el-menu-item>
        </el-menu-item-group>
      </el-sub-menu>
      <el-sub-menu :index="2">
        <template #title>
          <el-icon>
            <location />
          </el-icon>
          <span>全局配置</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="/layout/footer">底部配置</el-menu-item>
        </el-menu-item-group>
      </el-sub-menu>
    </el-menu>
  </div>
</template>

<script>
import { ref, defineComponent, computed, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
import {
  Document,
  Menu as IconMenu,
  Location,
  Setting,
  Expand,
} from "@element-plus/icons-vue";
export default defineComponent({
  components: {
    Document,
    IconMenu,
    Location,
    Setting,
    Expand,
  },
  setup(props, { emit }) {
    const isCollapse = ref(true);
    const route = useRoute();
    const router = useRouter();
    const menuItemActityColor = computed(() => {
      // console.log("route :>> ", route.query);
    });
    onMounted(() => {
      // console.log(route.params, route.query);
    });

    return {
      isCollapse,
      emit,
      route,
      menuItemActityColor,
    };
  },

  methods: {
    handleCollapse() {
      this.isCollapse = !this.isCollapse;
      this.$emit("collapse", {
        collapse: this.isCollapse,
      });
    },
  },
});
</script>
<style scoped lang="scss">
.el-menu-item.is-active {
  color: #6681fa;
  background-color: rgb(241, 243, 244) !important;
}

.container {
  .collapse-style {
    display: flex;
    justify-content: center;
    align-items: center;
    background: #1f2027;
    height: 30px;
    color: white;
    cursor: pointer;
  }
}
</style>
