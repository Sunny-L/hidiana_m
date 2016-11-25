<template>
  <div class="page page-bbs">
    <List :data="data" header="股吧"></List>
    <Loading :state="loading"></Loading>
  </div>
</template>
<script>
  import List from '../components/List.vue' 
  import Loading from '../components/Loading.vue'
  export default {
    components: {
      List,
      Loading
    },
    computed: {
      loading(){
        return this.$store.state.loading
      }
    },
    afterEach(to, from, next){
      $('.drawer-content').off('scroll')
    },
    data(){
      return {
        kw: '',
        data: []
      }
    },
    mounted(){
      let self = this
      self.loadDown()
      $('.drawer-content').scroll(function() {
        let $this = $(this)
        if($this.scrollTop()+$(window).height() +200 >= $('.page').height()){
          if(!self.$store.state.loading) {
            self.loadDown()
          }
        }
      })
    },
    methods: {
      getItems(){
        let self = this
        $.getJSON('http://hidiana.cn/bbs/bbsList?searchValue='+this.kw, (data) => {
          this.data = this.data.concat(data.bbses.map(item => {
              return {
                title: item.title,
                extra: item.creationDate.slice(0,-2),
                brief: item.comments
              } 
            }))
        })
      },
      loadDown(){
        let self = this
        self.$store.commit('setLoading')
        setTimeout(function(){
          self.$store.commit('setLoaded')
          self.getItems()
        },1000)
      }
    }
  }
</script>
<style lang="scss" scoped>


</style>
