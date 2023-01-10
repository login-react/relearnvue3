import { defineComponent, ref } from "vue";

export default defineComponent({
  setup(props, { emit }) {
    const visiable = ref(false);
    const open = () => {
      visiable.value = true;
    };
    return {
      visiable,
      open,
      emit,
    };
  },

  render() {
    return (
      <div>
        <el-dialog v-model={this.visiable} title="Add User">
          <el-button onClick={() => this.emit("cancel", "adflk")}>
            child click
          </el-button>
        </el-dialog>
      </div>
    );
  },
});
