import { createApp } from "vue";
import App from "./App.vue";
import ElementPlus from "element-plus";
import Router from "./router";

import "element-plus/lib/theme-chalk/index.css";

createApp(App)
  .use(ElementPlus)
  .use(Router)
  .mount("#app");
