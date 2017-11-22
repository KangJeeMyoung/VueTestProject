<template>
  <div class="navigate">
    <div class="naviTitle">
      <p>Guide Navigate</p>
    </div>

    <ul>
      <li v-for="item in naviList" :key="item.id" @click="toMove(item.name)" :class="{ active: isActive(item.name) }">
        <p>{{item.name}}</p>
        <ul>
          <li v-for="i in item.children" @click.stop="toMove(i.name)">
            <p>{{i.name}}</p>
          </li>
        </ul>
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
            name: 'ContentA',
            children: [{
              name: 'ContentA_1'
            }, {
              name: 'ContentA_2'
            }]
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
    height: 100%;
    overflow: auto;
  }
  .navigate .naviTitle {
    height: 50px;
    border: 1px solid #00baff;
    background: #00baff;
  }
  .navigate .naviTitle > p {
    color: white;
    text-align: center;
  }


  .navigate > ul {
    border: 1px solid #e5e5e5;
    list-style: none;
    margin: 0;
    padding: 0;
    height: calc(100% - 54px);
  }
  .navigate > ul > li {
    cursor: pointer;
    padding: 10px 0px 10px 20px;
    margin: 0;
  }
  .navigate > ul > li > p {
    margin: 10px 0 10px 0;
  }
  /*.navigate > ul > li > p:active {*/
    /*color: #000 !important;*/
    /*cursor: default;*/
    /*font-weight: bold;*/
  /*}*/
  .navigate > ul > li > p:hover {
    color: #00baff;
    background-color: #eee;
  }

  .navigate > ul > li > ul > li {
    list-style: none;
    padding: 10px 0px 10px 0px;
    margin: 0;
  }
  .navigate > ul > li > ul > li > p {
    margin: 0;
  }
  .navigate > ul > li > ul > li > p:hover {
    color: #00baff;
    background-color: #eee;
  }
</style>
