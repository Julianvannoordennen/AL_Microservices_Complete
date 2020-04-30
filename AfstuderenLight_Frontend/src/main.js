import Vue from 'vue';
import App from './App.vue';
import router from './router';
import PortalVue from 'portal-vue';
import {BootstrapVue, IconsPlugin} from 'bootstrap-vue';

Vue.config.productionTip = false;
Vue.use(PortalVue);
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');