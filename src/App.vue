<template>
  <div id="main">
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
<style></style>
