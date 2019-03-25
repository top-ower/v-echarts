/*
 * @Author: david.deng 
 * @Email: dengfd88@163.com 
 * @Date: 2019-03-19 15:49:13 
 * @Last Modified by:   david.deng 
 * @Last Modified time: 2019-03-21 15:49:13 
 * @Description: File desctiption 
 */
 
import GaugeChart from './gauge-chart';

GaugeChart.install = function(Vue) {
  Vue.component(GaugeChart.name, GaugeChart);
};

export default GaugeChart;