import { createRouter, createWebHistory } from 'vue-router'
import Data from '../views/Data.vue'

const routes = [
  {
    path: '/',
    name: 'Data',
    component: Data,
  },
  {
    path: '/ref',
    name: 'Ref',
    component: () => import(/* webpackChunkName: 'ref' */ '../views/Ref.vue'),
  },
  {
    path: '/reactive',
    name: 'Reactive',
    component: () =>
      import(/* webpackChunkName: 'reactive' */ '../views/Reactive.vue'),
  },
  {
    path: '/computed',
    name: 'Computed',
    component: () =>
      import(/* webpackChunkName: 'Computed' */ '../views/Computed.vue'),
  },
  {
    path: '/Event',
    name: 'Event',
    component: () =>
      import(/* webpackChunkName: 'Event' */ '../views/Event.vue'),
  },
  {
    path: '/list',
    name: 'List',
    component: () =>
      import(/* webpackChunkName: 'Event' */ '../views/List.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
