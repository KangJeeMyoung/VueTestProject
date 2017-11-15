// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App.vue'
import router from './router.js'

//Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  data() {
    return {
      isLoading: false,
      isError: false
    }
  },
  methods: {
    baseInit () {
      this.isError = false;
      this.isLoading = true;

      //var viewName = this.$route.params.viewName;
      //console.log('This is baseInit, viewName : '+viewName);
      //init();

      // `getPost`를 데이터 가져오기 위한 유틸리티/API 래퍼로 변경합니다.
      //getPost(this.$route.params.id, (err, post) => {
      //    this.loading = false
      //    if (err) {
      //        this.error = err.toString()
      //    } else {
      //        this.post = post
      //    }
      //})
    }
  },
  created () {
    // 뷰가 생성되고 데이터가 이미 감시 되고 있을 때
    //this.baseInit()
  },
  //watch: {
  //  $route ( to, from ) {
  //    this.baseInit();
  //  }
  //},
  render: h => h(App)
});
