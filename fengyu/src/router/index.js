import Vue from 'vue'
import Router from 'vue-router'
import nav1 from '@/components/nav1/nav1';
import nav2 from '@/components/nav2/nav2';
import nav3 from '@/components/nav3/nav3';
import nav4 from '@/components/nav4/nav4';
import nav5 from '@/components/nav5/nav5';
import nav6 from '@/components/nav6/nav6';
import nav7 from '@/components/nav7/nav7';
import nav8 from '@/components/nav8/nav8';
import nav9 from '@/components/nav9/nav9';
import nav10 from '@/components/nav10/nav10';
import nav11 from '@/components/nav11/nav11';
import nav12 from '@/components/nav12/nav12';
import nav13 from '@/components/nav13/nav13';
import nav14 from '@/components/nav14/nav14';
import nav15 from '@/components/nav15/nav15';
import nav16 from '@/components/nav16/nav16';
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/nav1',
      component: nav1
    },
    {
      path: '/nav2',
      component: nav2
    },
    {
      path: '/nav3',
      component: nav3
    },
    {
      path: '/nav4',
      component: nav4
    },
    {
      path: '/nav5',
      component: nav5
    },
    {
      path: '/nav6',
      component: nav6
    },
    {
      path: '/nav7',
      component: nav7
    },
    {
      path: '/nav8',
      component: nav8
    },
    {
      path: '/nav9',
      component: nav9
    },
    {
      path: '/nav10',
      component: nav10
    },
    {
      path: '/nav11',
      component: nav11
    },
    {
      path: '/nav12',
      component: nav12
    },
    {
      path: '/nav13',
      component: nav13
    },
    {
      path: '/nav14',
      component: nav14
    },{
      path: '/nav15',
      component: nav15
    },
    {
      path: '/nav16',
      component: nav16
    },
    { path: '/', redirect: '/nav1' }

  ]
})
