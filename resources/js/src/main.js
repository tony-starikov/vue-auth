import {createApp} from "vue";
import router from "./router/router.js";
import {createPinia} from "pinia"
import "./axios";
import App from './App.vue';

const pinia = createPinia();

createApp(App)
    .use(router)
    .use(pinia)
    .mount('#app');
