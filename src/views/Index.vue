<template>
  <div class="page page-index">
    <h5>趋势为王，结构修边~</h5>
    <tabbar v-model="selected">
      <tab-item id="外卖">
        <img slot="icon"> 外卖
      </tab-item>
      <tab-item id="订单">
        <img slot="icon"> 订单
      </tab-item>
      <tab-item id="发现">
        <img slot="icon"> 发现
      </tab-item>
      <tab-item id="我的">
        <img slot="icon"> 我的
      </tab-item>
    </tabbar>
  </div>
</template>
<script>
import { Header } from 'mint-ui';
import { Tabbar, TabItem } from 'mint-ui';

export default {
  name: 'hello',
  components: {
    vHeader: Header,
    tabbar: Tabbar,
    tabItem:TabItem,
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  mounted: function(){
    setTimeout(()=>{
      
    })
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="sass">


</style>
