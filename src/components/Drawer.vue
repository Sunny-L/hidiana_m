<template>
  <div class="drawer-container">
    <div class="drawer-trigger">
      <i class="iconfont">&#xe619;</i>
    </div>
    <div class="drawer-content">
      <slot name="content"></slot>
    </div>
  </div>
</template>
<script>
  export default {
    data(){
      return {
        
      }
    }
  }
</script>
<style lang="scss">
  .drawer-container {
    height: 100%;
    display: flex;
    .drawer-trigger {
      height: .88rem;
      background-color: #f5f5f9;
      border-bottom: .01rem solid #d9d9d9;
    }
  }

</style>
