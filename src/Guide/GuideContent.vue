<template>
  <div id="content" class="content">

    <h1>Content</h1>

    <ul class="tab-title">
      <li v-for="name in tabList" :class="{active: name===active}" @click="_tabChange(name)">
        <span>{{name}}</span>
        <!--<span class="close" v-if="name !== 'default'" @click="closeTab(name)">&times;</span>-->
      </li>
    </ul>

    <div class="editor" id="editorHtml"></div>
    <div class="editor" id="editorJavascript"></div>
    <div class="editor" id="editorCss"></div>

    <!--<router-view ref="contentView" name="Content" @emitContent="emitContent"></router-view>-->
    <!--<component ref="cmpContent" :is="content"></component>-->
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
    data() {
      return {
        active: 'default',
        tabList: ['HTML', 'JAVASCRIPT', 'CSS'],
        editorHtml: null,
        editorJavascript: null,
        editorCss: null
      }
    },
    computed:{
      content(){
        return this.$route.params.contentName || this.$route.params.name || 'ContentA';
      },
      count() {
        return this.$route.params.count || this.$route.params.cnt || 0;
      }
    },
    methods: {
      _initSettings() {
        this.editorHtml = this._createEditor({
          id   : 'editorHtml',
          theme: 'ace/theme/textmate',
          value: 'html'
        });

        this.editorJavascript = this._createEditor({
          id   : 'editorJavascript',
          theme: 'ace/theme/monokai',
          value: 'javascript'
        });

        this.editorCss = this._createEditor({
          id   : 'editorCss',
          theme: 'ace/theme/monokai',
          value: 'css'
        });

        this._tabChange();
      },
      _createEditor(paramObj) {
        if ( !paramObj || !paramObj.id ) {
          return;
        }

        var defaultObj = {
          theme: 'ace/theme/textmate',
          mode: 'ace/mode/javascript',
          readOnly: true,
          value: ''
        };

        Object.assign( defaultObj, paramObj );

        var editor = ace.edit(defaultObj.id);
        editor.setTheme(defaultObj.theme);
        editor.getSession().setMode(defaultObj.mode);
        editor.setReadOnly(defaultObj.readOnly);
        editor.setValue(defaultObj.value);

        return editor;
      },
      _tabChange(name) {
        this.active = name || 'HTML';

        var editorHtml = document.getElementById('editorHtml').style;
        var editorJavascript = document.getElementById('editorJavascript').style;
        var editorCss = document.getElementById('editorCss').style;

        editorHtml.display = 'none';
        editorJavascript.display = 'none';
        editorCss.display = 'none';

        switch (this.active) {
          case 'HTML'      : editorHtml.display = 'block'; break;
          case 'JAVASCRIPT': editorJavascript.display = 'block'; break;
          case 'CSS'       : editorCss.display = 'block'; break;
          default: break;
        }
      },
      // getHTMLTxt
      setEditorValue(value) {
        //this.$data.editor.setValue(value || '', -1);
      },
      getContentName() {
        return this.$refs.cmpContent.contentName || 'ContentA';
      },
      getValue() {
        return this.$refs.cmpContent.count || 0;
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
    height: 400px;
  }
</style>
