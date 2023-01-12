<template>
  <div>
    <span @click="handle">test</span>
    {{ text }}
    <input v-model="text" type="text" />
    {{ val }}
    <button @click="changeName">触发子组件</button>
  </div>
</template>

<script>
import { watchEffect, watch, defineComponent, getCurrentInstance, customRef, inject } from "vue";

export default {
  // props: {
  //   count: Number,
  // },
  emits: ["plus"],
  setup(props, ctx) {
    const instance = getCurrentInstance();
    console.log("instance :>> ", instance.appContext.config.globalProperties);
    const val = inject("name");
    const changeName = inject("changeName");
    function useDebounce(value, delay = 200) {
      let t = null;
      return customRef((track, trigger) => {
        return {
          get() {
            track();
            return value;
          },
          set(newVal) {
            clearTimeout(t);
            t = setTimeout(() => {
              value = newVal;
              trigger();
            }, delay);
          },
        };
      });
    }
    const text = useDebounce("", 500);
    return {
      text,
      val,
      changeName,
    };
    // watchEffect(()=> {
    //   console.log(props.count);
    // })
    // watch(
    //   () => props.count,
    //   (newValue) => {
    //     console.log("newValue :>> ", newValue);
    //   }
    // );
    // const handle = () => {
    //   ctx.emit("plus", 100);
    // };
    // return {
    //   handle,
    // };
  },
};
</script>

<style></style>
