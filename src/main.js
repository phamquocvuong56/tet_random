import { createApp } from "vue";
import router from "./routes";
import App from "./App.vue";
import ElementPlus from 'element-plus'
import store from './store'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import 'element-plus/dist/index.css'

import "./assets/main.css";
const app = createApp(App);
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}
app.use(router);
app.use(store)
app.use(ElementPlus)
app.mount('#app')
