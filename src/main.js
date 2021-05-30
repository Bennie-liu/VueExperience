import { createApp } from "vue";
import App from "./App.vue";
import ElementPlus from "element-plus";
import Router from "./router";

import "element-plus/lib/theme-chalk/index.css";

// 导入阿里iconfont资源文件
import "./assets/icons/iconfont.js";
import "./assets/icons/iconfont.css";

createApp(App)
  .use(ElementPlus)
  .use(Router)
  .mount("#app");
