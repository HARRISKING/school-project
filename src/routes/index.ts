import deviceRoutes from './modules/device';
import userRoutes from './modules/user';

export default [
  {
    path: '/window',
    component: '@/layouts/WindowLayout',
    routes: [...userRoutes],
  },
  {
    path: '/',
    component: '@/layouts/BasicLayout',
    routes: [...deviceRoutes],
  },
];
