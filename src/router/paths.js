export default [
  {
    path: "*",
    meta: {
      public: true,
    },
    redirect: {
      path: "/404",
    },
  },
  {
    path: "/",
    name: "Root",
    redirect: {
      path: "/login",
    },
  },
  {
    path: "/404",
    meta: {
      public: true,
      title: "404",
    },
    name: "NotFound",
    component: () => import("@/views/Protocols/NotFound.vue"),
  },
  {
    path: "/403",
    meta: {
      public: true,
      title: "403",
    },
    name: "AccessDenied",
    component: () => import("@/views/Protocols/AccessDenied.vue"),
  },
  {
    path: "/login",
    meta: {
      public: true,
      title: "Login",
    },
    name: "login",
    component: () => import("@/views/Account/Login.vue"),
  },
];
