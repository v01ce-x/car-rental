import { createRouter, createWebHistory } from 'vue-router';

import { useRegistrationRentalStore } from '@/entities/car';
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
    },
    {
      path: Routes.carSelection.path,
      name: Routes.carSelection.name,
      component: () => import('@/pages/booking/CarSelectionPage.vue')
    },
    {
      path: Routes.driverDetails.path,
      name: Routes.driverDetails.name,
      component: () => import('@/pages/booking/DriverDetailPage.vue')
    },
    {
      path: Routes.bookingSummary.path,
      name: Routes.bookingSummary.name,
      component: () => import('@/pages/booking/BookingSummaryPage.vue')
    },
    {
      path: Routes.successfulBooking.path,
      name: Routes.successfulBooking.name,
      component: () => import('@/pages/booking/SuccessfulBooking.vue')
    }
  ]
});

router.beforeEach((to, from) => {
  if (to.path === Routes.successfulBooking.path) {
    if (!from.path.includes('/summary') || !from.name) {
      return Routes.catalog.path;
    }
    return;
  }

  const registrationRentalStore = useRegistrationRentalStore();

  const isBookingPage =
    to.path === Routes.carSelection.path ||
    to.path === Routes.driverDetails.path ||
    to.path === Routes.bookingSummary.path;

  if (!from.name && isBookingPage) {
    if (to.path !== Routes.catalog.path) {
      return Routes.catalog.path;
    }
  }

  if (from.name) {
    localStorage.setItem('previous_route_path', from.path);
  } else {
    localStorage.setItem('previous_route_path', '');
  }

  if (to.path !== Routes.driverDetails.path && from.path === Routes.carSelection.path) {
    registrationRentalStore.removeCarData();
  }

  if (to.path === Routes.driverDetails.path) {
    const cameFromStep1 = from.path.includes('/booking/car');
    const cameFromStep3 = from.path.includes('/summary');

    if (!cameFromStep1 && !cameFromStep3) {
      return Routes.carSelection.path;
    }
  }

  if (to.path === Routes.bookingSummary.path && !from.path.includes('/driver')) {
    return Routes.carSelection.path;
  }
});

export default router;