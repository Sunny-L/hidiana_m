<template>
  <div id="main">
    <drawer :state="drawerState" :onOpenChange="trigger">
      <v-header title="Hi Diana" class="drawer-trigger" slot="trigger">
        <i slot="left" class="iconfont" id="nav_menu" @click="trigger()">&#xe619;</i>
      </v-header>
      <ul class="sidebar-nav" slot="sidebar">
        <li class="item item-home">
          <router-link to="/index">Home</router-link>
        </li>
        <li class="item">
          <router-link to="/index">热点</router-link>
        </li>
        <li class="item">
          <router-link to="/index">分时单</router-link>
        </li>
        <li class="item">
          <router-link to="/bbs">股吧</router-link>
        </li>
        <li class="item">
          <router-link to="/bbs">测试</router-link>
        </li>
        <li class="item">
          <router-link to="/login">登录</router-link>
        </li>
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
      }
    },
    computed:{
      drawerState(){
        return this.$store.state.drawerState
      }
    },
    mounted: function(){
      let self = this
      /*this.$router.beforeLeave( (to, form, next) => {
        self.trigger()
        next()
      })*/
    },
    methods: {
      trigger(){
        this.$store.commit('tiggerDrawerState')
      }
    }
  }
</script>
<style scoped lang="scss">
  #nav_menu {
    font-size: 20px;
  }
  
  .sidebar-nav {
    .item {
      width: 4.5rem;
      min-width: 100%;
      padding-left: .5rem;
      min-height: 1.1rem;
      border-bottom: 1px solid #ddd;
      display: flex;
      align-items: center;
      &.item-home {
        padding: .32rem;
        padding-left: .5rem;
      }
      a {
        font-size: 16px;
      }
    }
  }

</style>
