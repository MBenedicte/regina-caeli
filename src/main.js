import { createApp } from "vue";
import "@/assets/styles/main.scss";
import App from "./App.vue";
import router from "./router";
import "./firebase.js";
import "remixicon/fonts/remixicon.css";

createApp(App).use(router).mount("#app");
