import { defineComponent, ref } from "vue";
import styles from './logo.module.scss';
export default defineComponent({
  setup() {
    const loginHeaderUrl = ref(
      "https://tse3-mm.cn.bing.net/th/id/OIP-C.DQErt06dt0JSewG_vNNEwAAAAA?w=174&h=175&c=7&r=0&o=5&pid=1.7"
    );
    return {
      loginHeaderUrl,
    };
  },
  render() {
    return (
      <div class={styles.loginHeader}>
        <el-image src={this.loginHeaderUrl}  />
      </div>
    );
  },
});
