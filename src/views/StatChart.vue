<template>
  <div class="page page-statchart">
    <h2 class="header">统计图表</h2>
    <div>
      <line-chart :labels="labels" :datasets="datasets"></line-chart>
    </div>
  </div>
</template>
<script>
  import {
    lineChart
  } from '../components/Chart'
  export default {
    components: {
      lineChart: lineChart
    },
    data() {
      return {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
        datasets: [{
          label: 'GitHub Commits',
          backgroundColor: '#fff',
          data: [40, 20, 12, 39, 10, 40, 39, 80, 40, 20, 12, 11]
        }]
      }
    },
    created() {
      let self = this,
        labels = [],
        _data = []
      
      $.get('http://hidiana.cn/stock/findStatTurnWhenNines', data => {
        data.statTurnWhenNines.forEach(item => {
          labels.push(item.tradedTime)
          _data.push(item.highNine)
        })
        // self.labels = labels
        // self.datasets[0].data = _data
      })

    }
  }
</script>
<style lang="scss" scoped>

</style>