<template>
  <div class="page page-index">
    <h5>趋势为王，结构修边~</h5>
  </div>
</template>
<script>
  import {
    Header
  } from 'mint-ui';

  export default {
    name: 'hello',
    components: {
      vHeader: Header,
    },
    data() {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    },
    mounted: function() {
      setTimeout(() => {

      })
    }
  }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .page {
    display: flex;
    justify-content: center;
    flex-direction: column;
    height: 100%;
    align-items: center;
  }
</style>