import { defineConfig } from 'umi';

// TODO: 
// 获取 poseidon 监控应用 id
// 获取地址 https://poseidon.uni-ubi.com/#/application
// 如遇访问白屏请刷新页面
// 完成后删除该 TODO
export default defineConfig({
  define: {
    'process.env.BASE_API': '/api',
    'process.env.POSEIDON_MONITORING_ID': undefined,
    'process.env.POSEIDON_MONITORING_URL': 'https://poseidon-server.uni-ubi.com/monitor',
  },
  extraBabelPlugins: [
    ['transform-remove-console', { "exclude": [ "error", "warn"] }]
  ],
});
