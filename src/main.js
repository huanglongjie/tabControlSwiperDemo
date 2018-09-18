// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import one from './components/one/one.vue';
import two from './components/two/two.vue';
import three from './components/three/three.vue';
import four from './components/four/four.vue';
import five from './components/five/five.vue';

Vue.config.productionTip = false;

Vue.use(VueRouter);

// 定义路由
// 每个路由应该映射一个组件。
let router = new VueRouter({
  routes: [
    {path: '/', redirect: '/one'},
    {path: '/one', component: one},
    {path: '/two', component: two},
    {path: '/three', component: three},
    {path: '/four', component: four},
    {path: '/five', component: five}
  ]
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router: router,
  template: '<App/>',
  components: {App},
  data: {
    eventHub: new Vue() // 使用集中的事件处理器,一劳永逸的在任何组件调用事件发射、接受的方法
  }
});
