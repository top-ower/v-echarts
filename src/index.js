import BarChart from './components/barChart'
import GaugeChart from './components/gaugeChart'
import LineBarChart from './components/lineBarChart'
import LineChart from './components/lineChart'
import MapDistribution from './components/mapDistribution'
import PieChart from './components/pieChart'
import SvgIcon from './components/svgIcon'

const components = [
  BarChart,
  GaugeChart,
  LineBarChart,
  LineChart,
  MapDistribution,
  PieChart,
  SvgIcon,
]

const install = function(Vue, opts = {}) {
  components.map(component => {
    Vue.component(component.name, component);
  })
}

/* 支持使用标签的方式引入 */
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export default {
  install,
  BarChart,
  GaugeChart,
  LineBarChart,
  LineChart,
  MapDistribution,
  PieChart,
  SvgIcon,
}