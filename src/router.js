import { createRouter, createWebHistory } from 'vue-router';
import TimeTracking from './pages/TimeTracking.vue'
import Vacation from './pages/Vacation.vue'
import Bot from './pages/Bot.vue'
import App from './App.vue'

export default  createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/bot', component: Bot, alias: '/' },
        { path: '/timetracking', component: TimeTracking },
        { path: '/vacation', component: Vacation }
    ]
})
