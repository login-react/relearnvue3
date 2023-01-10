import { defineComponent, ref, reactive, onMounted } from "vue";
import { ElMessage } from "element-plus";
import { login } from "@/service/user";
import { useRouter } from "vue-router";
import LoginHeader from "./LoginHeader";
import styles from "./style.module.scss";
export default defineComponent({
  components: {
    LoginHeader,
  },
  setup() {
    const username = ref("");
    const password = ref("");
    const state = reactive({
      name: "张三",
    });
    const router = useRouter();
    return {
      username,
      password,
      router,
      state,
    };
  },
  methods: {
    handleSubmit() {
      console.log(this.password, this.username);
      const data = {
        username: this.username,
        password: this.password,
      };
      login(data)
        .then(() => {
          ElMessage.success("登录成功");
          this.router.push("/layout/report");
        })
        .catch((error) => {
          ElMessage.error(error.message);
        });
    },
  },
  render() {
    return (
      <div class={styles.container}>
        <div class={styles.box}>
          <el-card shadow="hover">
            <LoginHeader />
            <el-form label-width="60px">
              <el-form-item label="用户名">
                <el-input v-model={this.username} suffix-icon="Calendar" />
              </el-form-item>
              <el-form-item label="密码">
                <el-input
                  type="password"
                  show-password
                  v-model={this.password}
                />
              </el-form-item>
              <el-form-item>
                <el-button
                  type="primary"
                  onClick={this.handleSubmit}
                  style="width: 300px;"
                >
                  登录
                </el-button>
              </el-form-item>
            </el-form>
          </el-card>
        </div>
      </div>
    );
  },
});
