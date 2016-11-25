<template>
  <div class="page page-hello">
    <div class="hello">
      <img src="../assets/images/index.png" alt="">
    </div>
  </div>
</template>
<script>
  export default {
    name: 'hello',
    data() {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    },
    mounted: function() {
      let self = this
      setTimeout(() => {
        self.$router.push('index')
      }, 1500)
    }
  }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
  html,
  body,
  #app {
    height: 100%;
    margin: 0;
    padding: 0;
  }
  
  .page {
    height: 100%;
    .hello {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100%;
      background: #fff;
      position: fixed;
      left: 0;
      right: 0;
      bottom: 0;
      top: 0;
      img {
        width: 100%;
      }
    }
  }
</style>