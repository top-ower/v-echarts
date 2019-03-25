<script>
export default {
  data () {
    return {
      barData: {
        barName: '台',
        seriesNameBar: '数量',
        seriesNameLine: '.',
        xAxisData: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        seriesData: [10, 52, 200, 334, 390, 330, 220]
      }
    }
  }
}
</script>
## BarChart
介绍BarChart的使用
:::demo
``` html
<template>
  <bar-chart :id="'barChart'" :bar-data="barData" height="500px" width="100%"></bar-chart>
</template>
<script>
export default {
  data () {
    return {
      barData: {
        barName: '台',
        seriesNameBar: '数量',
        seriesNameLine: '.',
        xAxisData: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        seriesData: [10, 52, 200, 334, 390, 330, 220]
      }
    }
  }
}
</script>
```
:::
