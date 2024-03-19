import {createRouter,createWebHistory} from "vue-router";
import SignUp from './components/SignUp.vue'
import Login from './components/Login.vue'
import Home from './components/Home.vue'

const routes = [
    { path: '/', component: Home },
    { path: '/signup', component: SignUp },
    { path: '/login', component: Login },

  ];
const router = createRouter({
    history:createWebHistory(),
    routes,
})

export default router;