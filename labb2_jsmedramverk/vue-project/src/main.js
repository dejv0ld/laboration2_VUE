import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "bootstrap/dist/css/bootstrap.css";
import "./assets/main.css";
import bootstrap from "bootstrap/dist/js/bootstrap.bundle.js";
import { createStore } from "vuex";

//VUEX STORE
const store = createStore({
  state: {
    color: "black",
  },
  mutations: {
    setColor(state, newColor) {
      state.color = newColor;
    },
  },
});

const app = createApp(App);

app.use(store);
app.use(router);
app.use(bootstrap);
app.mount("#app");
