<template>
  <div id="result" class="result">

    <form id="resultForm" method="post" action="http://jsfiddle.net/api/post/vue/2.2.1/" target="check" style="display:none">
      <select name="panel_html">
        <option value="0" selected>HTML</option>
      </select>
      <select name="panel_js">
        <option value="0" selected>JavaScript</option>
      </select>
      <select name="panel_css">
        <option value="0" selected>CSS</option>
      </select>

      <textarea name='html'>{{ htmlTxt }}</textarea>
      <textarea name='js'>{{ jsTxt }}</textarea>
      <textarea name='css'>{{ cssTxt }}</textarea>
    </form>

    <button @click="tryIt()">Try it</button>
    <component ref="cmpContent" :is="content"></component>

  </div>
</template>

<script>
  import ContentA from './components/ContentA.vue';
  import ContentB from './components/ContentB.vue';

  export default {
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
      tryIt() {
        document.getElementById('resultForm').submit();
      },
      updateResultFrame( paramObj ) {
//        this.contentName = name;
//        this.count = cnt;
      }
    },
    mounted() {
      console.log('----------------------- Result Mounted -----------------------');

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
    float: left;
    width: calc(calc(100% - 380px)/2);
    height: 400px;
    background: greenyellow;
  }
</style>
