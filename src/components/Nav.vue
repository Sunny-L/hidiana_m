<template>
  <div id="main">
    <drawer :state="drawerState" :onOpenChange="trigger">
        <v-header title="Hi Diana"  class="drawer-trigger" slot="trigger">
          <i slot="left" class="iconfont" @click="trigger()">&#xe619;</i>
        </v-header>
      <ul class="sidebar-nav" slot="sidebar">
        <li class="item item-home">home</li>
        <li class="item">热点</li>
        <li class="item">分时单</li>
        <li class="item"><router-link to="/bbs">股吧</router-link></li>
        <li class="item">测试</li>
      </ul>
      <div>
      </div>
      <router-view slot="content"></router-view>
    </drawer>
  </div>
</template>
<script>
  import { Header } from 'mint-ui';
  import {mapMutation} from 'vuex'
  import Drawer from './Drawer.vue'
  export default {
    components: {
      Drawer,
      vHeader:Header
    },
    data(){
      return {
        drawerState: false
      }
    },
    mounted: function(){
      let self = this
      /*this.$router.afterEach( (to, form, next) => {
        self.trigger()
        next()
      })*/
    },
    methods: {
      trigger(){
        this.drawerState = !this.drawerState
      }
    }
  }
</script>
<style scoped lang="scss">
  .sidebar-nav {
    .item {
      width: 4.5rem;
      min-width: 100%;
      padding-left: .5rem;
      min-height: .9rem;
      border-bottom: 1px solid #ddd;
      display: flex;
      align-items: center;
      &.item-home {
        padding: .32rem;
        padding-left: .5rem;
      }
    }
  }

</style>
