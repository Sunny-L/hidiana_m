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
      let labels = [],
        _data1 = [],
        _data2 = []

      $.ajax({
          url: 'http://hidiana.cn/stock/findStatTurnWhenNines',
          async: false,
          success(data) {
            data.statTurnWhenNines.forEach(item => {
              labels.push(item.tradedTime)
              _data1.push(item.highNine)
              _data2.push(item.lowNine)
            })
          }
        })
        /*$.ajax({
          url: 'http://hidiana.cn/stock/findStatPassivations',
          success(data) {
            data.statTurnWhenNines.forEach(item => {
              _data2.push(item.highNine)
            })
          }
        })*/
      return {
        labels: labels,
        datasets: [{
          label: '低9',
          fill: false,
          lineTension: 0.1,
          backgroundColor: "#F44336",
          borderColor: "#F44336",
          borderCapStyle: 'butt',
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: 'miter',
          pointBorderColor: "#F44336",
          pointBackgroundColor: "#fff",
          pointBorderWidth: 1,
          pointRadius: 1,
          pointHitRadius: 10,
          data: _data1
        }, {
          label: '高9',
          fill: false,
          lineTension: 0.1,
          backgroundColor: "#3F51B5",
          borderColor: "#3F51B5",
          borderCapStyle: 'butt',
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: 'miter',
          pointBorderColor: "#3F51B5",
          pointBackgroundColor: "#fff",
          pointBorderWidth: 1,
          pointRadius: 1,
          pointHitRadius: 10,
          data: _data2
        }]
      }
    },
    created() {
      let self = this,
        labels = [],
        _data = []

      /*$.get('http://hidiana.cn/stock/findStatTurnWhenNines', data => {
        data.statTurnWhenNines.forEach(item => {
            labels.push(item.tradedTime)
            _data.push(item.highNine)
          })
          self.labels = labels
          self.datasets[0].data = _data
      })*/

    }
  }
</script>
<style lang="scss" scoped>

</style>