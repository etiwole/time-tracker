import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import Test from './components/Test'

import "@/assets/main.scss"
import Dashboard from "@/components/Dashboard";

import UIkit from 'uikit';
import Icons from 'uikit/dist/js/uikit-icons';

UIkit.use(Icons)

const app = createApp(App)

const routes = [
    { path: '/', component: Dashboard },
    { path: '/test', component: Test }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

app.use(router)
app.mount('#app')
