import { createApp } from "vue";
import installElementPlus from "./plugins/element";
import { router } from "./route";
import App from "./App.vue";
import { toast } from "./customer/Toast/toast";
import * as utils from './lib/utils.js';
import MyUI from "./myUI";
const app = createApp(App);
app.use(MyUI, {
  component: ["MyButton"],
});
// app.config.globalProperties.$toast = toast;
app.config.globalProperties.$utils = utils;
app.use(router).use(installElementPlus).mount("#app");
