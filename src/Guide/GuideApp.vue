<template>
    <div class="guide-app">
        <div class="loading" v-if="isLoading">Loading...</div>
        <div class="error" v-if="isError">{{ isError }}</div>

        <div class="header">
            <div class="logo">
                <img src="../../images/company_logo_exem.png"/>
            </div>
            <div class="top">
                <h1>Guide App</h1>
            </div>
        </div>

        <div class="container">
            <cmp-nav v-on:getVueFile="getVueFile"></cmp-nav>
            <div class="right">
                <cmp-content :fileList="vueFileList"></cmp-content>
                <cmp-result ref="cmpResult" :fileList="vueFileList"></cmp-result>
            </div>
            <!--<cmp-content ref="cmpContent" @emitContent="emitContent"></cmp-content>-->
            <!--<div><router-view name="Result"></router-view></div>-->
        </div>
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
        data() {
            return {
                isLoading: false,
                isError: false,
                vueFileList: {}
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
                var fileName = path;

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

            if ( !this.$route.params.contentName ) {
                this.$router.push({
                    name: 'GuideContent',
                    params: {
                        contentName: 'ContentA',
                        count: 1
                    }
                });
            }
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
    }
    .guide-app .header {
        position:absolute;
        left: 0px;
        top: 0px;
        bottom: 0px;
        height: 60px;
        right: 0px;
        margin: 0 auto;
        background: white;
    }
    .guide-app .header .logo {
        position: relative;
        float: left;
        width: 90px;
        z-index: 1;
        padding-top: 20px;
    }
    .guide-app .header .logo > img {
        max-width: 80%;
        cursor: pointer;
    }
    .guide-app .header .top {
        position: relative;
        bottom: 10px;
    }

    .guide-app .container {
        position: absolute;
        top: 60px;
        left: 0px;
        right: 0px;
        bottom: 0px;
        height: auto !important;
    }
    .guide-app .container .right {
        padding: 0 !important;
        position: absolute;
        top:0px;
        right:0px;
        left:250px;
        bottom:0px;
    }
</style>
