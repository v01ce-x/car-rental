import { PiniaColada } from '@pinia/colada';
import { createPinia } from 'pinia';
import { createApp } from 'vue';

import router from '@/app/router';

import App from './App.vue';

const app = createApp(App);
const pinia = createPinia();

app.use(pinia);
app.use(PiniaColada, {
  queryOptions: {
    staleTime: 300_000
  }
});
app.use(router);

app.mount('#app');
