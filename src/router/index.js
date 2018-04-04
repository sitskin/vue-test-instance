import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from '@/components/HelloWorld';
import Login from '@/components/Login';
import Info from '@/components/Info';
import StyleGuide from '@/components/StyleGuide';

Vue.use( Router );

export default new Router({
  routes: [
    { path: '/', name: 'HelloWorld', component: HelloWorld },
    { path: '/login', name: 'Login', component: Login },
    { path: '/dev/login', name: 'LoginDev', component: Login },
    { path: '/info', name: 'Info', component: Info },
    { path: '/dev/info', name: 'InfoDev', component: Info },
    { path: '/style', name: 'StyleGuide', component: StyleGuide },
  ],
});
