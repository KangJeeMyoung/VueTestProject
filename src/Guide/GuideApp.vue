<template>
    <div class="guide-app">
        <div class="loading" v-if="isLoading">Loading...</div>
        <div class="error" v-if="isError">{{ isError }}</div>

        <h1>Guide App</h1>

        <cmp-nav></cmp-nav>
        <cmp-content></cmp-content>
        <cmp-result ref="cmpResult"></cmp-result>

        <!--<cmp-content ref="cmpContent" @emitContent="emitContent"></cmp-content>-->
        <!--<div><router-view name="Result"></router-view></div>-->
    </div>
</template>

<script>
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
            }
        },
        mounted() {
            console.log('----------------------- Guide App -----------------------');
        }
    }
</script>

<style>
    .guide-app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }
</style>
