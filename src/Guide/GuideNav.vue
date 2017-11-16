<template>
  <div class="navigate">
    <div class="naviTitle">
      <p>Guide Navigate</p>
    </div>

    <ul>
      <li v-for="item in naviList" :key="item.id" @click="toMove(item.name)" :class="{ active: isActive(item.name) }">
        <p>{{item.name}}</p>
      </li>
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
        activeItem: ''
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

        this.activeItem = name;
      },
      isActive: function(menuItem) {
        return this.activeItem === menuItem;
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
    /*background: red;*/
  }

  .cursor-hand {
    cursor:pointer;
  }

  .navigate .naviTitle {
    height: 50px;
    border: 1px solid;
  }
  .navigate .naviTitle > p {
    font-size: 16px;
    color: black;
    font-weight: bold;
    text-align: center;
  }

  .navigate > ul {
    border: 1px solid #e5e5e5;
    list-style: none;
    margin: 0;
    padding: 0;
    height: 500px;
  }
  .navigate > ul > li {
    cursor: pointer;
    padding: 10px 0px 10px 20px;
    margin: 0;
    height: 30px;
  }
  .navigate > ul > li.active {
    color: #409eff;
    cursor: default;
    font-weight: bold;
  }
  .navigate > ul > li:hover {
    color: #409eff;
    background-color: lightgray;
  }
  .navigate > ul > li > p {
    padding: 0;
    margin: 0;
  }
</style>
