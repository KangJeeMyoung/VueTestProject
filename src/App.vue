<template>
  <div id="main" class="main">
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    mounted() {
      console.log('----------------------- App -----------------------');

      // 임시로 Guide로 보내기.....
      this.$router.push({
        name: 'Guide',
        params: {
          contentName: 'ContentA',
          count: 1
        }
      });
    }
  }

</script>
<style>
  .main {
    width: 100%;
    height: 100%;
  }
</style>
