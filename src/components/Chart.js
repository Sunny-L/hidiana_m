import {
  Line
} from 'vue-chartjs'

export const lineChart = Line.extend({
  props: ['labels', 'datasets'],
  mounted() {
    this.renderChart({
      labels: this.labels,
      datasets: this.datasets
    })
  }
})
