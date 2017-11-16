<template>
    <div class="guide-app">
        <div class="loading" v-if="isLoading">Loading...</div>
        <div class="error" v-if="isError">{{ isError }}</div>

        <h1>Guide App</h1>

        <cmp-nav v-on:getVueFile="getVueFile"></cmp-nav>
        <cmp-content :fileList="vueFileList"></cmp-content>
        <cmp-result ref="cmpResult" :fileList="vueFileList"></cmp-result>
    </div>
</template>

<script>
    import CodeParser from './../codeParser.js';
    import Nav from './GuideNav.vue';
    import Content from './GuideContent.vue';
    import Result from './GuideResult.vue';

    export default {
        components: {
            'cmpNav': Nav,
            'cmpContent': Content,
            'cmpResult': Result
        },
        computed:{
          initText: function () {
            return {
              value : `EVUI는 웹페이지의 핵심 구성요소인 Grid/Chart 컴포넌트를 제공하는 UI 프레임워크입니다.
                       EVUI Grid와 Chart는 HTML/CSS/JS 및 SVG로 구현되어 있어 다양한 환경에 적용이 가능하며,
                       Vue.JS를 기반으로 구현되어 대량의 데이터를 고속으로 처리합니다.`
            }
          }
        },
        data: function () {
            return {
                isLoading: false,
                isError: false,
                vueFileList: {}
            }
        },
        methods: {
            emitContent: function (id) {
                var contentView;

                if ( id == 'updateResult' ) {
                    contentView = this.$refs.contentView;
                    this.$refs.cmpResult.update( contentView.getContentName(), contentView .getValue() );
                }
            },
            getVueFile: function (path) {
                const baseURI = '../../static/';
                var parser = CodeParser.parse;
                var vm = this;
                var fileName = path;

                if(this.vueFileList[fileName]){
                    return;
                }

                this.$http.get(`${baseURI}${fileName}.vue`)
                        .then((result) => {
                    let tmpObj = parser(result.data);
                    if(tmpObj){
                        vm.$set(vm.vueFileList, fileName, tmpObj);
                    }
                }, (err) => {});
            }
        },
        mounted: function(){

//            if ( !this.$route.params.contentName ) {
//                this.$router.push({
//                    name: 'GuideContent',
//                    params: {
//                        contentName: 'ContentA',
//                        count: 1
//                    }
//                });
//            }
//
//            this.getVueFile('ContentA');
        }

    }
</script>

<style>
    .guide-app {
        width: 100%;
        height: 100%;
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }
</style>
