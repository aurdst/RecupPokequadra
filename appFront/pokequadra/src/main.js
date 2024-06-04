import { createApp } from 'vue'; 
import App from './App.vue'; 
import router from './router';
import store from './store/store'; // Assure-toi d'importer le store correctement
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faEye, faEdit } from '@fortawesome/free-solid-svg-icons';

library.add(faEye, faEdit);

const app = createApp(App); 
app.use(router);
app.use(store); // Utiliser le store
app.component('font-awesome-icon', FontAwesomeIcon);
app.mount('#app');
