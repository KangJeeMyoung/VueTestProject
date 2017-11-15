<template>
    <div class="ContentB">
        <h1>Content B</h1>
        <button @click="btnClick()">B Count++</button>
        {{ 'content: '+name +' / count: '+ cnt }}
    </div>
</template>

<script>
    export default {
        props: {
            contentName: {
                type: String,
                default: 'ContentB'
            },
            count: {
                type: Number,
                default: 1
            }
        },
        data() {
            return {
                name: this.contentName,
                cnt: this.count
            }
        },
        methods: {
            btnClick() {
                this.cnt += 1;
            }
        },
        mounted() {
            console.log('----------------------- Content B -----------------------');
        }
    }
</script>

<style scoped>
</style>
