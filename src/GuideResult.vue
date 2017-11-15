<template>
  <div class="result">

    <h1>Result</h1>
    {{ 'content: '+contentName +' / count: '+ count }}
    {{ fileList }}
  </div>
</template>

<script>
  export default {
    props: [
      'fileList'
    ],
    data() {
      return {
        contentName: 'ContentA',
        count: 1
      }
    },
    methods: {
      update( name, cnt ) {
        this.contentName = name;
        this.count = cnt;

        console.log('updateResult!!!!!!!!!!!!!! name: ', name, ' / cnt: ' , cnt);
      },
      getProps: function(){
        console.log(this.props);
      }
    },
    mounted() {
      console.log('----------------------- Result Mounted -----------------------');
    }
  }
</script>


<style scoped>
  .result {
    float: left;
    width: calc(calc(100% - 380px)/2);
    background: greenyellow;
  }
</style>
