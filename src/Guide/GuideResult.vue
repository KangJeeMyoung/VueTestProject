<template>
  <div id="result" class="result">
    <div class="resultTop">
      <p>Result</p>
    </div>
    <div class="resultCenter">
      <component ref="cmpContent" :is="content"></component>
    </div>
  </div>
</template>

<script>
  import ContentA from './components/ContentA.vue';
  import ContentA_1 from './components/ContentA_1.vue';
  import ContentA_2 from './components/ContentA_2.vue';
  import ContentB from './components/ContentB.vue';

  export default {
    props: [
      'fileList'
    ],
    components: {
      ContentA,
      ContentA_1,
      ContentA_2,
      ContentB
    },
    computed:{
      content(){
        return this.$route.params.contentName || this.$route.params.name || 'ContentA';
      },
      count() {
        return this.$route.params.count || this.$route.params.cnt || 0;
      }
    },
    data() {
      return {
        name: 'ContentA',
        cnt: 1,
        htmlTxt: '<p class="red">It\'s magic!</p>',
        jsTxt: 'console.log("hi");',
        cssTxt: 'p {font-family: Helvetica, Arial; }'
      };
    },
    methods: {
      updateResultFrame( paramObj ) {
//        this.contentName = name;
//        this.count = cnt;
      }
    },
    mounted() {
      console.log('----------------------- Result -----------------------');

//      this.updateResultFrame({
//        'html': html,
//        'js'  : '2',
//        'css' : '3'
//      });
    }
  }
</script>


<style scoped>
  .result {
    position: absolute;
    left: 50%;
    top: 0px;
    bottom: 0px;
    right: 0px;
    border: 1px solid #e5e5e5;
  }
  .result .resultTop {
    position: absolute;
    height: 50px;
    width: 100%;
    border-bottom: 1px solid #e5e5e5;
  }
  .result .resultTop > p {
    font-size: 20px;
    font-weight: bold;
    padding: 0 0 0 20px;
  }
  .result .resultCenter {
    position: absolute;
    top: 51px;
    height: calc(100% - 50px);
    width: 100%;
    padding: 20px 20px 20px 20px;
  }
</style>
