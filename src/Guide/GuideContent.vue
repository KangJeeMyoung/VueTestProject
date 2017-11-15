<template>
  <div id="content" class="content">
    <h1>Content</h1>

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

      <textarea name='html'>{{ editorInfo.html.value }}</textarea>
      <textarea name='js'>{{ editorInfo.javascript.value }}</textarea>
      <textarea name='css'>{{ editorInfo.css.value }}</textarea>
    </form>


    <ul class="tab-title">
      <li v-for="name in tabList" :class="{active: name===active}" @click="_tabChange(name)">
        <span>{{name}}</span>
        <!--<span class="close" v-if="name !== 'default'" @click="closeTab(name)">&times;</span>-->
      </li>
    </ul>


    <div class="editor" id="editor"></div>

    <div style="height: 55px;text-align: right; margin-right: 100px;"><button @click="tryIt()" style="margin-top: 10px; height: 35px;">Try it</button></div>

    <!--<div class="test">{{ fileList }}</div>-->

  </div>
</template>

<script>
  import ContentA from './components/ContentA.vue';
  import ContentB from './components/ContentB.vue';
  import Content from './components/Content.vue';

  import ace from 'brace';
  import 'brace/mode/javascript';
  import 'brace/theme/monokai';

  export default {
    components: {
      ContentA,
      ContentB
    },
    props: {
      fileList: {
        type: Object
        //default: Array()
      },
      editorInfo: {
        type: Object,
        default: function() {
          return {
            html: {
              theme: 'ace/theme/textmate',
              mode: 'ace/mode/javascript',
              readOnly: true,
              value: ''
            },
            javascript: {
              theme: 'ace/theme/monokai',
              mode: 'ace/mode/javascript',
              readOnly: true,
              value: ''
            },
            css: {
              theme: 'ace/theme/monokai',
              mode: 'ace/mode/javascript',
              readOnly: true,
              value: ''
            }
          }
        }
      }
    },
    data() {
      return {
        active: 'default',
        tabList: ['HTML', 'JAVASCRIPT', 'CSS'],
        editor: null,
        result: ''
      }
    },
    computed:{
      htmlValue() {
        return this.$route.params.contentName || this.$route.params.name || 'ContentA';
      },
      content(){
//        var value = this.$route.params.contentName || this.$route.params.name || 'ContentA';
//        this.editorInfo.html.value = value;
//        this.editorInfo.javascript.value += value;
//        this.editorInfo.css.value += value;
      }
    },
    watch: {
      '$route' (to, from) {
        this._initSettings();
      }
    },
    methods: {
      _initSettings() {
        this.editor = ace.edit('editor');

        var value = this.$route.params.contentName || 'ContentA';
        this.editorInfo.html.value = value + ' / HTML HTML HTML HTML HTML';
        this.editorInfo.javascript.value = value + ' / JAVASCRIPT JAVASCRIPT JAVASCRIPT JAVASCRIPT JAVASCRIPT JAVASCRIPT ';
        this.editorInfo.css.value = value + ' / CSS CSS CSS CSS CSS CSS CSS CSS ';

        this._tabChange();
      },
      _tabChange(name) {
        this.active = name || 'HTML';

        switch (this.active) {
          case 'HTML'      : this.setEditor(this.editorInfo.html); break;
          case 'JAVASCRIPT': this.setEditor(this.editorInfo.javascript); break;
          case 'CSS'       : this.setEditor(this.editorInfo.css); break;
          default: break;
        }
      },
      setEditor(paramObj) {
        var defaultObj = {
          theme: 'ace/theme/textmate',
          mode: 'ace/mode/javascript',
          readOnly: true,
          value: ''
        };

        Object.assign( defaultObj, paramObj );

        this.editor.setTheme(defaultObj.theme);
        this.editor.getSession().setMode(defaultObj.mode);
        this.editor.setReadOnly(defaultObj.readOnly);
        this.editor.setValue(defaultObj.value);
      },
      tryIt() {
        document.getElementById('resultForm').submit();
      },
      getContentName() {
        return this.$refs.cmpContent.contentName || 'ContentA';
      },
      showData (){
        console.log(this.fileList);
      }
    },
    mounted() {
      console.log('----------------------- Content -----------------------');

      this._initSettings();
    }
  }
</script>


<style scoped>
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

  .editor {
    width: 100%;
    height: 500px;
  }

  .test {
    background-color: #11ffee;
  }
</style>
