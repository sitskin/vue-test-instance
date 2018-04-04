// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import axios from 'axios';
import router from './router';

Vue.config.productionTip = false;

var instance = axios.create({
  baseURL: `https://${ location.hash.match( /dev/ ) ? 'apidev' : 'api' }.hop.life/v1`,
  withCredentials: true,
});

instance.interceptors.request.use( ( config ) => {
	HopAndroid.refreshIfExpired();
	return config;
});

Vue.prototype.$http = instance;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
});
