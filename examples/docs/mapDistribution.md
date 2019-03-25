<!--
注意：具有交互功能的说明文档，需要有<script></script>标签，在标签元素中定义需要导出的vue实例。
在:::demo ::: 代码块中定义的模版<template></template>会作为导出的vue实例的模版，但是在代码块中的<script></script>中的内容仅作为展示，需注意。
-->
<script>
export default {
  data () {
    return {
      mapData: [
        {
          "name": '广东',
          "value": 220
        },
        {
          "name": '湖南',
          "value": 120
        }
      ]
    }
  },
  methods: {
  }
}
</script>
## MapBistribution
介绍MapBistribution的使用
:::demo
``` html
<template>
  <map-distribution :id="'distribution'" :map-data="mapData" height="500px" width="100%"></map-distribution>
</template>
<script>
export default {
  data () {
    return {
      mapData: [
        {
          "name": '广东',
          "value": 220
        },
        {
          "name": '湖南',
          "value": 120
        }
      ]
    }
  }
}
</script>
```
:::