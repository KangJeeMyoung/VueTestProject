import Vue from 'vue';
import Router from 'vue-router';
import App from './App.vue';
import GuideApp from './Guide/GuideApp.vue';

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'App',
      alias: 'App',
      props: true,
      meta: { scrollToTop: true },
      component: App
    },
    {
      path: '/Guide',
      name: 'Guide',
      alias: 'Guide',
      component: GuideApp,
      props: true,
      meta: { scrollToTop: true },
      children: [
        {
          path: ':contentName',
          name: 'GuideContent',
          alias: '/GuideContent',
          component: GuideApp,
          props: true,
          meta: { scrollToTop: true }
        }
      ]
    }
  ]
})
