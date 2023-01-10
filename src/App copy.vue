<template>
  <div>
    <button @click="setClick">{{ count }}</button>
    <Demo :count="count" @plus="handle" />
    <!-- <router-view></router-view> -->
    <button>改变</button>
  </div>
</template>
<script>
import { reactive, toRefs, provide, ref } from "vue";
import Demo from "./Demo.vue";
export default {
  components: {
    Demo,
  },
  setup() {
    const name = ref("王五")
    const state = reactive({
      count: 1,
    });
   

    const setClick = () => {
      state.count = 3;
    };
    const handle = (num) => {
      state.count += num;
    };
    const changeName = ()=> {
      name.value = "你好世界"
    }
     provide("name", name);
     // provide同时也可以注入函数方法
     provide("changeName", changeName)
    return {
      ...toRefs(state),
      setClick,
      handle,
    };
  },
};
</script>
