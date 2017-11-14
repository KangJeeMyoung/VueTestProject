import Vue from 'vue';
import Router from 'vue-router';
import App from './App.vue';
import Nav from './GuideNav.vue';
import Content from './GuideContent.vue';

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'App',
      alias: 'App',
      //props: true,
      meta: { scrollToTop: true },
      components: {
        default: App,
        Content: Content
      },
      children: [
        {
          path: ':contentName',
          name: 'Content',
          alias: '/Content',
          component: Content,
          //props: true,
          meta: { scrollToTop: true }
        }
      ]
    }
  ]
})
