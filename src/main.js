import { createApp } from 'vue'
import App from './App'
import './assets/font.css'
import router from "@/router";

const app = createApp(App);

app.use(router)
app.mount('#app')

