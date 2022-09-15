import { createWebHistory, createRouter } from "vue-router"
import Tooltip from "@/pages/customComponents/tooltipPage.vue"
import Tabs from "@/pages/customComponents/tabsPage.vue"
import Dialog from "@/pages/customComponents/dialogPage.vue"


const routes = [
  {
    path: "/tooltip",
    name: "Tooltip",
    component: Tooltip
  },
  {
    path: "/tabs",
    name: "Tabs",
    component: Tabs
  },
  {
    path: "/dialog",
    name: "Dialog",
    component: Dialog
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;