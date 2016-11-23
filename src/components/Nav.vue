<template>
  <div>
    <v-header fixed title="Hi Diana"></v-header>
    <drawer>
      <ul slot="sidebar">
        <li>热点</li>
        <li>分时单</li>
        <li>股吧</li>
        <li>测试</li>
      </ul>
      <slot name="content"></slot>
    </drawer>
  </div>
</template>
<script>
  import { Header } from 'mint-ui';
  import Drawer from './Drawer.vue'
  export default {
    components: {
      Drawer,
      vHeader:Header
    },
    data(){
      return {
        
      }
    }
  }
</script>
<style lang="scss">


</style>
