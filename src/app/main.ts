import { createApp } from 'vue';
import App from './App.vue';
import router from '@/app/router';
import { createPinia } from 'pinia';
import { PiniaColada } from '@pinia/colada';

const app = createApp(App);
const pinia = createPinia();

app.use(router);
app.use(pinia);
app.use(PiniaColada, {
  queryOptions: {
    staleTime: 300_000
  }
});

app.mount('#app');
