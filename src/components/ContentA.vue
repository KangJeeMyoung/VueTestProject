<template>
    <div class="ContentA">
        <h1>Content A</h1>
        <button @click="btnClick()">Count++</button>
        {{ 'content: '+name +' / count: '+ cnt }}
    </div>
</template>

<script>
    export default {
        props: {
            contentName: {
                type: String,
                default: 'ContentA'
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
            console.log('----------------------- Content A -----------------------');
        }
    }
</script>

<style scoped>
</style>
