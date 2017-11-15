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
    data: function(){
      return {
        naviList: [
          {
            name: 'test',
            params: {
              a: 1,
              b: 2
            }
          },
          {
            name: 'test2',
            params: {
              a: 1,
              b: 2
            }
          },
          {
            name: 'test3',
            params: {
              a: 1,
              b: 2
            }
          },
          {
            name: 'test4',
            params: {
              a: 1,
              b: 2
            }
          }
        ]
      }
    },
    methods: {
      loadData: function(){
      },
      toMove: function(name){
        this.$router.push(
                {
                  name: 'Guide',
                  contentName: name
                }
        );

        this.$emit('getVueFile', path);
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

  .cursor-hand {
    cursor:pointer;
  }
</style>
