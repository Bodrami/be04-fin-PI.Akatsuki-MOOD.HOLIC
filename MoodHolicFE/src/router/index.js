import { createRouter, createWebHistory } from 'vue-router';

import Login from "@/components/MainPage/Login/LogIn.vue";
import SignUp from "@/components/MainPage/SighUp/SignUp.vue";
import BeforeLogInMain from "@/components/MainPage/BeforeLogInMain/BeforeLogInMain.vue";

const routes = [
    {   // 로그인
        path: '/login',
        component: Login
    },
    {   // 회원가입
        path: '/signup',
        component: SignUp
    },
    {   // 비회원 메인
        path: '/',
        component: BeforeLogInMain
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
