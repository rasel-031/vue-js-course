import 'tailwindcss/tailwind.css';

import { createApp } from 'vue';
import App from './App.vue';
import "./main.css";

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faUser, faClock } from '@fortawesome/free-solid-svg-icons';

library.add(faUser, faClock);
createApp(App).component('font-awesome-icon', FontAwesomeIcon)

createApp(App).mount('#app');

