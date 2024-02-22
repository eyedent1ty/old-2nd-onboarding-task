const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '/dashboard',
        name: 'dashboard',
        component: () => import('../pages/Dashboard/DashboardPage.vue'),
      },
      {
        path: '/employee-list',
        name: 'employee-list',
        component: () => import('../pages/EmployeeList/EmployeeList.vue'),
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
