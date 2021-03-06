export default [
  {
    path: "/",
    redirect: "/home"
  },
  {
    path: "/login",
    name: "login",
    component: () => import("@/pages/login")
  },
  {
    path: "*",
    name: "page404",
    component: () => import("@/pages/page404")
  }
];
