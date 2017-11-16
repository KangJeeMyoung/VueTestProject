<template>
  <div class="navigate">
    <h1>Guide Navigate</h1>

    <ul id="example-list">
      <div class="cursor-hand" v-for="item in naviList" :key="item.id" @click="toMove(item.name)">
        <h2>{{item.name}}</h2>
      </div>
    </ul>
  </div>
</template>

<script>
  export default {
    computed: {
      naviList: function(){
        return [
          {
            name: 'ContentA'
          },
          {
            name: 'ContentB'
          }
        ];
      }
    },
    data: function(){
      return {
      }
    },
    methods: {
      toMove: function(name){
        this.$router.push({
          name: 'GuideContent',
          params: {
            contentName: name,
            count: 1
          }
        });
        this.$emit('getVueFile', name);
      }
    }
  }
</script>


<style scoped>
  .navigate {
    width: 200px;
    height: 668px;
    float: left;
    background: red;
  }

  .cursor-hand {
    cursor:pointer;
  }
</style>
