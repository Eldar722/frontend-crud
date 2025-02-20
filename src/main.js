import { createApp } from 'vue';
import App from './App.vue';
import './assets/css/style.css';
import router from '@/services/router';

const app = createApp(App);

app.config.errorHandler = (err, instance, info) => {
    console.error('Глобальная ошибка:', err, info);
    router.push('/error'); // Перенаправление на страницу ошибки
};

app.use(router).mount('#app');
