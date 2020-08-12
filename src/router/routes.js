
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') }
    ]
  },
  {
    path: '/login',
    component: () => import('layouts/AuthLayout.vue'),
    children: [
      { path: '/', component: () => import('pages/Auth/LoginPage') }
    ]
  },

  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
];

export default routes
