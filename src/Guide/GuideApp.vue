<template>
    <div class="guide-app">
        <div class="loading" v-if="isLoading">Loading...</div>
        <div class="error" v-if="isError">{{ isError }}</div>

        <h1>Guide App</h1>

        <cmp-nav v-on:getVueFile="getVueFile"></cmp-nav>
        <cmp-content></cmp-content>
        <cmp-result ref="cmpResult" :fileList="vueFileList"></cmp-result>

        <!--<cmp-content ref="cmpContent" @emitContent="emitContent"></cmp-content>-->
        <!--<div><router-view name="Result"></router-view></div>-->
    </div>
</template>

<script>
    import CodeParser from '../codeParser.js'

    import Nav from './GuideNav.vue';
    import Content from './GuideContent.vue';
    import Result from './GuideResult.vue';

    export default {
        components: {
            'cmpNav': Nav,
            'cmpContent': Content,
            'cmpResult': Result
        },
        data() {
            return {
                isLoading: false,
                isError: false
            }
        },
        methods: {
            emitContent(id) {
                var contentView;

                if ( id == 'updateResult' ) {
                    contentView = this.$refs.contentView;
                    this.$refs.cmpResult.update( contentView.getContentName(), contentView .getValue() );
                }
            },
            getVueFile: function(path){
                const baseURI = '../../static/';
                var parser = CodeParser.parse;
                var vm = this;
                var fileName = 'Content';

                if(this.vueFileList[fileName]){
                    return;
                }

                this.$http.get(`${baseURI}${fileName}.vue`)
                        .then((result) => {
                    let tmpObj = {};
                    tmpObj[fileName] = parser(result.data);
                    if(tmpObj){
                        vm.$set(vm.vueFileList, fileName, tmpObj);
                    }
                }, (err) => {});
            }
        },
        mounted() {
            console.log('----------------------- Guide App -----------------------');
        },
        watch: {
            vueFileList: function ( newData ) {
            }
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
