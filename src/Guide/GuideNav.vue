<template>
  <div class="navigate">
    <h1>Guide Navigate</h1>

    <div>
      <router-link :to=routerLink(0)>Content A</router-link>
    </div>
    <div>
      <router-link :to=routerLink(1)>Content B</router-link>
    </div>

  </div>
</template>

<script>
  export default {
    methods: {
      routerLink( type ) {
        var name = type == 0 ? 'ContentA' : 'ContentB';

        return {
          name: 'Guide',
          params: {
            contentName: name,
            count: 1
          }
        }
      }
    }
  }
</script>


<style scoped>
  .navigate {
    width: 200px;
    float: left;
    background: red;
  }

</style>
