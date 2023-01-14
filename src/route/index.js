import { createRouter, createWebHashHistory } from "vue-router";
const Layout = () => import("@/components/layout/index.vue");
const User = () => import("@/views/user/index.vue");
const Role = () => import("@/views/role/index.vue");
const Login = () => import("@/views/login/login.jsx");
const Report = () => import("@/views/firstPage/index.vue");
const Demo = () => import("@/views/demo/index.vue");
const routes = [
  { path: "/", redirect: "/layout/report" },
  {
    path: "/login",
    name: "login",
    component: Login,
  },
  {
    path: "/layout",
    name: "layout",
    component: Layout,
    children: [
      {
        path: "/layout/report",
        name: "Report",
        meta: {
          title: "首页",
        },
        component: Report,
      },
      {
        path: "/layout/user",
        name: "Use",
        meta: {
          title: "用户",
        },
        component: User,
      },
      {
        path: "/layout/role",
        name: "role",
        meta: {
          title: "角色",
        },
        component: Role,
      },
      {
        path: "/layout/demo",
        name: "demo",
        meta: {
          title: "示例",
        },
        component: Demo,
      },
    ],
  },
];
export const router = createRouter({
  history: createWebHashHistory(),
  routes: routes,
});
