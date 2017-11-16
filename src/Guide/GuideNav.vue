<template>
  <div class="navigate">
    <div class="naviTitle">
      <p>Guide Navigate</p>
    </div>

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
          },
          {
            name: 'Test'
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

        // 임시 Static...........................
        if ( name == 'ContentA' ) {
          name = 'Content';
        } else if ( name == 'ContentB' ) {
          name = 'Test1';
        } else {
          name = 'Test2';
        }
        //-------------------------------------

        this.$emit('getVueFile', name);
      }
    }
  }
</script>


<style scoped>
  .navigate {
    position: absolute;
    width: 250px;
    left:0px;
    top:0px;
    bottom:0px;
    overflow: auto;
    background: red;
  }

  .cursor-hand {
    cursor:pointer;
  }

  .navigate .naviTitle > p {
    font-size: 28px;
    color: aqua;
  }
</style>
