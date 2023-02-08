import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import GäddaView from "../views/GäddaView.vue";
import BorreView from "../views/BorreView.vue";
import GösView from "../views/GösView.vue";
import AspView from "../views/AspView.vue";
import LaxView from "../views/LaxView.vue";
import HarrView from "../views/HarrView.vue";
import ÖringView from "../views/ÖringView.vue";
import RegnbågeView from "../views/RegnbågeView.vue";
import BraxenView from "../views/BraxenView.vue";
import MörtView from "../views/MörtView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/AboutView.vue"),
    },
    {
      path: "/gädda/:id",
      name: "gädda",
      component: GäddaView,
    },
    {
      path: "/abborre/:id",
      name: "abborre",
      component: BorreView,
    },
    {
      path: "/gös/:id",
      name: "gös",
      component: GösView,
    },
    {
      path: "/asp/:id",
      name: "asp",
      component: AspView,
    },
    {
      path: "/lax/:id",
      name: "lax",
      component: LaxView,
    },
    {
      path: "/öring/:id",
      name: "öring",
      component: ÖringView,
    },
    {
      path: "/regnbåge/:id",
      name: "regnbåge",
      component: RegnbågeView,
    },
    {
      path: "/harr/:id",
      name: "harr",
      component: HarrView,
    },
    {
      path: "/mört/:id",
      name: "mört",
      component: MörtView,
    },
    {
      path: "/braxen/:id",
      name: "braxen",
      component: BraxenView,
    },
  ],
});

export default router;
