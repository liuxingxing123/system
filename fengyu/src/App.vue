<template>
  <div class="app">
    <vueheader></vueheader>
    <div class="mian-wrapper">
      <div  class="navbar" ref="navbar">
        <ul>
          <li  v-for="(item,index) in slidebar" key="index" class="navbar-item">
          <router-link :to="item.path"><span class="tablecell">{{item.title}}</span></router-link>
          </li>
        </ul>
      </div>
        <div class="main-right" ref="content">
          <div >
          <router-view />
        </div>
      </div>
      </div>
   <vuefooter></vuefooter>
  </div>
</template>

<script>
import vueheader from '@/components/header/header';
import vuefooter from '@/components/footer/footer';
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
import BScroll from 'better-scroll'
export default {
  name: 'app',
  components:{
    vueheader,
    vuefooter,
    nav1,
    nav2,
    nav3,
    nav4,
    nav5,
    nav6,
    nav7,
    nav8,
    nav9,
    nav10,
    nav11,
    nav12,
    nav13,
    nav14,
    nav15,
    nav16
  },
  data(){
    return {
      slidebar:[
       {path:'nav1',title:'管理主要问题'} ,
        {path:'nav2',title:'智能管理的优势'},
        {path:'nav3',title:'设计目标'},
        {path:'nav4',title:'设计思路'},
        {path:'nav5',title:'系统功能'},
        {path:'nav6',title:'工具出入库'},
        {path:'nav7',title:'工具借用'},
        {path:'nav8',title:'工具归还'},
        {path:'nav9',title:'自动盘库'},
        {path:'nav10',title:'统计查询'},
        {path:'nav11',title:'定制工具柜'},
        {path:'nav12',title:'设备/仪器备案登记'},
        {path:'nav13',title:'定位路线跟踪'},
        {path:'nav14',title:'地理围栏'},
        {path:'nav15',title:'系统组成'},
        {path:'nav16',title:'实施架构'}
      ]
    }
  },
  created(){
        this.$nextTick(() => {
          this._initScroll();
        })
  },
  methods:{
    _initScroll(){
      this.navScroll = new BScroll(this.$refs.navbar,{
        click:true
      });
      this.contentScroll = new BScroll(this.$refs.content,{
        click:true,
        probeType:3
      })
    }
  }
}
</script>

<style scoped>
  .mian-wrapper{
    display: flex;
    height: 437px;
    overflow: hidden;
  }
  .mian-wrapper .navbar{
    flex:0 0 140px;
    border-right: 1px solid rgba(147,153,159,0.2);
    box-sizing: border-box;
    background: #fff;
    width: 140px;
  }
  .mian-wrapper .navbar .navbar-item{
    margin-bottom: 3px ;
    height: 50px;
    background: #4e9f8e;
    width: 100%;
    text-align: center;
  }
  .mian-wrapper .navbar .navbar-item .tablecell{
    display: block;
    line-height:50px;
    font-size: 16px;
    color: white;
    font-weight:600;
  }
  .mian-wrapper .navbar .navbar-item a{
    display: block;
    height: 100%;
  }
  .mian-wrapper .main-right{
    flex: 1;
    width: 100%;
  }
</style>
