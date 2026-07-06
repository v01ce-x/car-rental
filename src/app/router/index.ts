import { createRouter, createWebHistory } from 'vue-router';

import { Routes } from '@/shared/lib';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: Routes.catalog.path
    },
    {
      path: Routes.catalog.path,
      name: Routes.catalog.name,
      component: () => import('@/pages/cars/CatalogPage.vue')
    },
    {
      path: Routes.carDetail.path,
      name: Routes.carDetail.name,
      component: () => import('@/pages/cars/DetailPage.vue')
    }
  ]
});

export default router;
