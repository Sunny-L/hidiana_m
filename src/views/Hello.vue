<template>
  <div class="page page-hello">
    <h5>{{msg}}</h5>
  </div>
</template>
<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  mounted: function(){
    let self = this
    setTimeout(()=>{
      self.$router.push('index')
    },1500)
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  html,
  body,
  #app {
    height: 100%;
    margin: 0;
    padding: 0;
  }
  
  .page {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
  }

</style>
