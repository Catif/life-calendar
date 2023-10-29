import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/HomeView.vue'),
      meta: {
        titlePage: 'Home - TemplateVueJS',
      },
    },

    {
      path: '/calendar',
      name: 'calendar',
      component: () => import('@/views/Calendar/CalendarView.vue'),
      meta: {
        titlePage: 'Calendar - TemplateVueJS',
      },
    },
    {
      path: '/calendar/:year',
      name: 'calendar.year',
      component: () => import('@/views/Calendar/CalendarYearView.vue'),
      meta: {
        titlePage: 'Calendar - TemplateVueJS',
      },
    },

    {
      // 404 error
      path: '/:pathMatch(.*)*', // https://router.vuejs.org/guide/migration/#Removed-star-or-catch-all-routes
      name: 'error404',
      component: () => import('@/views/Error404View.vue'),
      meta: {
        titlePage: 'Page not found - TemplateVueJS',
      },
    },
  ],
})

router.beforeEach((to, from, next) => {
  // scroll top smoothly
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  })

  // set title page
  document.title = to.meta.titlePage || 'TemplateVueJS'

  next()
})

export default router
