import MyButton from "./MyButton.vue";
import MyInput from "./MyInput.vue";
const components = [MyButton, MyInput];
export default {
  install(app, options) {
    if (options) {
      options.component?.map((comps) => {
        components?.map((comp) => {
          if (comps === comp.name) {
            app.component(comp.name, comp);
          }
        });
      });
    } else {
      components?.map((comp) => {
        app.component(comp.name, comp);
      });
    }
  },
};
