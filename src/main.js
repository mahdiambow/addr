import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import axios from "axios";
import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";
axios.defaults.headers.common["Authorization"] =
  "Basic MDk4MjIyMjIyMjI6U2FuYTEyMzQ1Njc4";
axios.defaults.baseURL = process.env.VUE_APP_API_BASE_URL;
createApp(App)
  .use(store)
  .use(Toast, {
    transition: "Vue-Toastification__fade",
    maxToasts: 20,
    newestOnTop: true,
  })
  .use(router)
  .mount("#app");
