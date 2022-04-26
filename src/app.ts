import { enableES5 } from 'immer';
import { Performance } from 'poseidon-web-monitoring';

import '@/styles/index.less';
import '@/styles/reset.less';

enableES5();

// Poseidon 采集数据
const id = process.env.POSEIDON_MONITORING_ID;
const url = process.env.POSEIDON_MONITORING_URL;

if (id) {
  const monitor = new Performance({
    url,
    appId: id,
  });
  monitor.start();
}
