import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../../views/HomeView.vue";
import CartView from "../../views/CartView.vue";
import SignupView from "../../views/SignupView.vue";

const routes = [
    {
        path: "/",
        name: "Home",
        component: HomeView
    },
    {
        path: "/cart",
        name: "Cart",
        component: CartView
    },
    {
        path: "/signup",
        name: "Signup",
        component: SignupView
    },
]

const router = createRouter({  
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
});

export default router;