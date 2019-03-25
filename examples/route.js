import Install from './docs/install.md'
import QuikeStart from './docs/quikeStart.md'
import barChart from './docs/barChart.md'
import MapDistribution from './docs/mapDistribution.md'
const routes = [
  {
    path: '/',
    component: Install,
    name: 'default'
  },
  {
    path: '/guide/install',
    name: 'Install',
    component: Install
  },
  {
    path: '/guide/quikeStart',
    name: 'quikeStart',
    component: QuikeStart
  },
  {
    path: '/barChart',
    name: 'barChart',
    component:barChart
  },
  {
    path: '/mapDistribution',
    name: 'mapDistribution',
    component:MapDistribution
  }
]

export default routes
