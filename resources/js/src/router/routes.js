import Home from '../components/Home.vue';
import Login from '../components/Login.vue';
import Register from '../components/Register.vue';

const routes = [
    {
        path: '/',
        component: Home
        // component: () => import("../components/Home.vue")
    },
    {
        path: '/login',
        component: Login
        // component: () => import("../components/Login.vue")
    },
    {
        path: '/register',
        component: Register
        // component: () => import("../components/Register.vue")
    },
]

export default routes;
