<template>
  <div class="loading" v-show="state">
    <img src="../assets/images/loading.gif" alt="loading">
  </div>
</template>
<script>
  export default {
    props:['state'],
    data(){
      return {
        
      }
    }
  }
</script>
<style lang="scss" scoped>
  .loading {
    display: flex;
    justify-content: center;
  }

</style>
