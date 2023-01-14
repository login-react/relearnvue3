<template>
  <div class="box">
    <button @click="handleAudo">测试</button>
    <div>
      <audio
        ref="audoRef"
        controls
        src="https://win-web-rc01-sycdn.kuwo.cn/8f0e38063badef347cd015698f35521a/63c25f31/resource/n2/67/24/3501219204.mp3"
      ></audio>
    </div>
    <div class="audoContainer">
      <ul class="lrc-list">
      </ul>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import {
  findTargetIndex,
  useCreateLrcElement,
  useParseLrc,
  setOfffset
} from "./useAudoController";
onMounted(() => {
  useParseLrc();
  useCreateLrcElement();
});

const handleAudo = () => {
  console.log(setOfffset());
};
</script>

<style  lang="scss">
.box {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}
.audoContainer {
  width: 100%;
  text-align: center;
  height: 420px;
  background: #000;
  color: #605959;
  overflow: hidden;
}
.audoContainer ul {
  transition: 0.5s;
}
.audoContainer li {
  width: 100%;
  height: 30px;
  line-height: 30px;
  transition: 0.9s;
}
audio {
  width: 450px;
  margin: 30px 0;
}
ul {
  padding: 0;
  margin: 0;
}

li {
  list-style: none;
  margin: 0px;
  padding: 0px;
   
}

.audoContainer li.active {
  color: #ffffff !important;
  transform: scale(1.2);
}
.active {
   color: #ffffff;
  transform: scale(1.2);
}
</style>
