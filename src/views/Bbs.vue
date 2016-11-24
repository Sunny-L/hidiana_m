<template>
  <div class="page page-bbs">
    <List :data="data" header="股吧"></List>
  </div>
</template>
<script>
  import 'whatwg-fetch'
  import List from '../components/List.vue' 
  export default {
    components: {
      List
    },
    data(){
      return {
        kw: '',
        data: []
      }
    },
    computed: {
      /*_data(){
        return this.data.map(item => {
          return {
            title: item.title,
            extra: item.creationDate,
            brief: item.comments
          } 
        })
      }*/
    },
    mounted(){
      let self = this
      fetch('http://hidiana.cn/bbs/bbsList?searchValue='+this.kw)
        .then(res => res.json())
        .then(data => {
          self.data = data.bbses.map(item => {
            return {
              title: item.title,
              extra: item.creationDate,
              brief: item.comments
            } 
          })
        })
    }
  }
</script>
<style lang="scss" scoped>


</style>
