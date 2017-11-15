<template>
  <div class="contentView">

    <component ref="cmpContent" :is="content"></component>
    <!--<div class="editor"></div>-->

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
    props: {
      editorTheme: {
        type: String,
        default: 'ace/theme/dawn'
      },
      editorMode: {
        type: String,
        default:'ace/mode/javascript'
      },
      isEditorReadOnly: {
        type: Boolean,
        default: true
      },
      editorText: {
        type: String
      }
    },
    data() {
      return {

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
      tabChange(name) {

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

//      var editor = ace.edit(this.$el);
//      editor.setTheme(this.editorTheme);
//      editor.getSession().setMode(this.editorMode);
//      editor.setReadOnly(this.isEditorReadOnly);
//      editor.setValue(this.editorText || '');

      //this.$data.editor = editor;
    }
  }
</script>


<style scoped>

</style>
