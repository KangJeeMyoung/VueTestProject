import Vue from 'vue';
import Router from 'vue-router';
import App from './App.vue';
import GuideApp from './Guide/GuideApp.vue';

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/:contentName',
      name: 'App',
      alias: 'App',
      props: true,
      meta: { scrollToTop: true },
      component: App
    },
    {
      path: '/Guide/:contentName',
      name: 'Guide',
      alias: 'Guide',
      props: true,
      meta: { scrollToTop: true },
      component: GuideApp
      //children: [
      //  {
      //    path: '/Grid/:contentName',
      //    name: 'Content',
      //    alias: '/Content',
      //    component: Content,
      //    //props: true,
      //    meta: { scrollToTop: true }
      //  }
      //]
    }
  ]
})
