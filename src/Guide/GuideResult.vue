<template>
  <div id="result" class="result">
    <component ref="cmpContent" :is="content"></component>
  </div>
</template>

<script>
  import ContentA from './components/ContentA.vue';
  import ContentB from './components/ContentB.vue';

  export default {
    props: [
      'fileList'
    ],
    components: {
      ContentA,
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
    background: greenyellow;
  }
</style>
