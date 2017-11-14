<template>
  <div id="app">
    <div class="loading" v-if="isLoading">Loading...</div>
    <div class="error" v-if="isError">{{ isError }}</div>

    <h1>App</h1>

    <cmp-nav></cmp-nav>

    <div class="content">
      <h1>Content</h1>
      <ul class="tab-title">
        <li v-for="name in tabList" :class="{active: name===active}" @click="tabChange(name)">
          <span>{{name}}</span>
          <!--<span class="close" v-if="name !== 'default'" @click="closeTab(name)">&times;</span>-->
        </li>
        <li><button @click="updateResult()">Check Result</button></li>
      </ul>
      <router-view ref="contentView" name="Content" @emitContent="emitContent"></router-view>
    </div>

    <!--<cmp-content ref="cmpContent" @emitContent="emitContent"></cmp-content>-->
    <cmp-result ref="cmpResult"></cmp-result>

    <!--<div><router-view name="Result"></router-view></div>-->
  </div>
</template>

<script>
import Nav from './GuideNav.vue';
import Content from './GuideContent.vue';
import Result from './GuideResult.vue';

export default {
  components: {
    'cmp-nav': Nav,
    'cmp-content': Content,
    'cmp-result': Result
  },
  data() {
    return {
      isLoading: false,
      isError: false,
      active: 'default',
      tabList: ['CODE', 'HTML', 'JAVASCRIPT', 'CSS']
//      contentName: 'ContentA',
//      count: 1
    }
  },
  methods: {
    updateResult() {
//      this.$emit('emitContent', 'updateResult');

      this.$refs.cmpResult.update( this.$refs.contentView.getContentName(), this.$refs.contentView.getValue() );
    },
    emitContent(id) {
      var contentView;

      if ( id == 'updateResult' ) {
        contentView = this.$refs.contentView;
        this.$refs.cmpResult.update( contentView.getContentName(), contentView .getValue() );
      }
    }
//    changeContent(name, cnt) {
//      this.contentName = name;
//      this.count = cnt;
//    }
  },
  mounted() {
    console.log('----------------------- App -----------------------');
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.content {
  width: calc(calc(100% - 200px)/2);
  float: left;
  background: blue;
}

.tab-title {
  height: 32px; margin: 20px 0 0 0; padding:0;
  border-bottom: 1px solid #ccc;
  list-style: none;
}
.tab-title li {
  min-width: 100px; height: 32px; line-height:32px; float: left; margin-right: 10px;
  text-align:center; cursor: pointer;
  background: #eee; color: #333;
  position: relative;
}
.tab-title li.active {background: #31BFCF; color:#fff;}
/*.tab-title .close {position: absolute; right:0; top: 0; line-height:1}*/
</style>
