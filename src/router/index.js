import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      children: [ {
        path: '/task/add',
        name: 'task/add',
        component: () => import('../views/NewTaskModal.vue'),
      },
      {
        path: '/exit',
        name: 'exit',
        component: () => import('../views/ExitModal.vue')
      },
      {
        path: '/task/:id',
        name: 'task',
        component: () => import('../views/EditTaskModal.vue')
      }
      ],
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: '/sign-in',
      name: 'sign-in',
      component: () => import('../views/SignInView.vue'),
    },
    {
      path: '/sign-up',
      name: 'sign-up',
      component: () => import('../views/SignUpView.vue'),
    },
    {
      path: '/:pathMatch(.*)*',
      component: () => import('../views/NotFoundView.vue'),
    }
  ],
})

router.beforeEach((to, from, next) => {
    const token = localStorage.getItem('userInfo');
   if (to.meta.requiresAuth && !token) {
      next('/sign-in');
   } else {
      next(); 
   }
});

export default router
