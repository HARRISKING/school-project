import { defineConfig } from 'umi';
import routes from './src/routes'

export default defineConfig({
  publicPath: '/',
  hash: true,
  dva: {
    immer: true,
    hmr: false,
  },
  webpack5: {},
  dynamicImport: {
    loading: '@/components/PageLoading/index',
  },
  define: {
    'process.env.BASE_API': '/api',
  },
  proxy: {
    '/api': {
      target: 'http://mock.com',
      changeOrigin: true,
      pathRewrite: { '^/api': '' },
    },
  },
  theme: {},
  routes,
  locale: {},
  ignoreMomentLocale: true,
  targets: {
    ie: 10,
  }
});
