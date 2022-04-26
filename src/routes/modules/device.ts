export default [
  { exact: true, path: '/', redirect: '/device' },
  {
    path: 'device',
    component: '@/pages/index',
    name: '一级菜单',
    title: '一级菜单',
    icon: 'EntranceOutlined',
  },
];
