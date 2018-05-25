import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
// import todo from '@/components/todo'
import Detail from '../pages/goodsDetail'
import Msg from '../components/Message.vue'
Vue.use(Router)


const routes = [
    {
      path: '/',
      component: resolve => require(['../pages/home'],resolve),
      meta:{
        title:'home'
      }
    },
    {
      path:'/msg',
      component:Msg
    },
    {
      path:'/detail',
      component:Detail,
      children:[
        {
          path:'msg',
          component:Msg
        }
      ]
    }
  ]
  export default new Router({
    routes
})
