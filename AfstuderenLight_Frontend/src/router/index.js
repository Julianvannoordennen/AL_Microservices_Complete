import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/products',
    name: 'Products',
    component: () => import('../views/products/Products.vue'),
  },
  {
    path: '/reviews',
    name: 'Reviews',
    component: () => import('../views/reviews/Reviews.vue'),
  },
  {
    path: '/users',
    name: 'Users',
    component: () => import('../views/users/Users.vue'),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
