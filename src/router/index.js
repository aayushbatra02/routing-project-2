import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("@/views/HomeView.vue"),
  },
  {
    path: "/about",
    name: "about",
    component: () => import("@/views/AboutView.vue"),
  },
  {
    path: "/jobs",
    name: "jobs",
    children: [
      {
        path: "",
        name: "jobs",
        component: () => import("@/views/JobsView.vue"),
      },
      {
        path: ":jobId",
        name: "jobDetail",
        component: () => import("@/views/JobDetailView.vue"),
      },
    ],
  },
  {
    path: "/:pathMatch(.*)*",
    name: "notFound",
    component: import("@/views/NotFound.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes,
});

export default router;
