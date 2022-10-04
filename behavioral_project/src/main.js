import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import { autoAnimatePlugin } from '@formkit/auto-animate/vue'


// import './assets/main.css'

createApp(App)
  .use(autoAnimatePlugin)
  .use(ElementPlus)
  .mount('#app')
