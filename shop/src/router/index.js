import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import shopMessage from './../pages/shopMessage'
import personIp from './../pages/personIp'
import eventMessage from './../pages/eventMessage'

Vue.use(Router)

export default new Router({
  routes: [
    {path: '/shop',name: 'shopMessage',component: shopMessage},
    {path: '/ip',name: 'personIp',component: personIp},
    {path: '/eve',name: 'eventMessage',component: eventMessage},
    {path: '/',redirect:'/shop'}
  ]
})
