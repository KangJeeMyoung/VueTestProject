<template>
    <div class="ContentA_1">
        <h1>A</h1>

        <div>
            <button @click="btnClick()">A_1 Count++</button> {{ name +' / count: '+ cnt }}
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            contentName: {
                type: String,
                default: 'ContentA_1'
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
            console.log('----------------------- A_1 -----------------------');
        }
    }
</script>

<style scoped>
</style>
