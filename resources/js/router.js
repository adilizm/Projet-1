import { createRouter, createWebHistory } from 'vue-router'

import Home from '../js/views/Home.vue';
import singin from '../js/views/singin.vue';


 let routes= [
    {
        path: '/',
        name: 'home',
        component: Home
    },{
        path: '/singin',
        name: 'singin',
        component: singin
    }
]
const router = createRouter({
    history: createWebHistory('#'),
    routes
  })

export default router;