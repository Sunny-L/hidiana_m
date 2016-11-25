<template>
  <div class="page page-hotspot">
    <p :class="{'websocket-error':websocketInfo}"v-if="websocketInfo">{{websocketInfo}}</p>
    <List header="热点行业" v-else>
      <table class="w-table" slot="body">
        <thead>
          <tr>
            <th>行业名称</th>
            <th>热度</th>
            <th>热比</th>
            <th>股票总家数</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in items" class="w-list-item">
            <td >{{item.industry}}</td>
            <td class="teal">{{item.times}}</td>
            <td class="red">{{item.hotRatio}}</td>
            <td class="indigo">{{item.totalStocks}}</td>
          </tr>
        </tbody>
      </table>

    </List>
  </div>
</template>
<script>
  import {
    websocket
  } from '../utils'
  import {
    mapState
  } from 'vuex'
  import List from '../components/List.vue'
  export default {
    components: {
      List
    },
    data() {
      return {
        items: []
      }
    },
    computed:
    /*mapState([
         'sgUser',
         'websocketInfo'
       ])*/
      mapState({
      sgUser(state) {
        console.log(state)
        return state.sgUser
      },
      websocketInfo(state) {
        return state.websocketInfo
      }
    }),
    created() {
      let userId = this.sgUser.id
        // websocket.connect(`${websocket.websocket_url}?userId=${userId}`)
      websocket.connect(`${websocket.websocket_url}hs-msg`, this)
        // websocket.connect(websocket.websocket_url+'?userId='+userId)
    },
    methods: {
      render(data) {
        this.items = data
      }
    }
  }
</script>
<style lang="scss" scoped>
  .websocket-error {
    margin-top: 3rem;
    text-align: center;
  }
</style>