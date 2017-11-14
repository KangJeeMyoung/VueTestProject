<template>
  <div class="navigate">
    <h1>Guide Navigate</h1>

    <div>
      <!--<button @click="buttonClick('ContentA')">Content A</button>-->
      <!--<router-link :to="{ name: 'Content', params: { contentName:'ContentA', count:1 } }">Content A</router-link>-->
      <router-link :to=routerLink(0)>Content A</router-link>
    </div>
    <div>
      <!--<button @click="buttonClick('ContentB')">Content B</button>-->
      <!--<router-link :to="{ name: 'Content', params: { contentName:'ContentB', count:1 } }">Content B</router-link>-->
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
          name: 'Content',
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
