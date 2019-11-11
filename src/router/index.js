import Vue from 'vue'
import Router from 'vue-router'
import Index from '../components/Index'
import Getstart from '../components/Getstart'
import Api from '../components/Api'
import About from '../components/About'
import Register from '../components/Register'
import Login from '../components/Login'

/* loading */
import Loading from '../components/Loading'

/* topics */
import All from '../components/topics/All'
import Good from '../components/topics/Good'
import Share from '../components/topics/Share'
import Ask from '../components/topics/Ask'
import Job from '../components/topics/Job'
import Dev from '../components/topics/Dev'
import Detail from '../components/topics/detail'

Vue.use(Router);

/* 路由配置 */
export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index,
      redirect:'/all',
      children:[
        {
          path:'/all',
          name:'all',
          component:All
        },
        {
          path:'/good',
          name:'good',
          component:Good
        },
        {
          path:'/share',
          name:'share',
          component:Share
        },
        {
          path:'/ask',
          name:'ask',
          component:Ask
        },
        {
          path:'/job',
          name:'job',
          component:Job
        },
        {
          path:'/dev',
          name:'dev',
          component:Dev
        },
      ]
    },
    {
      path:'/detail/:id',
      name:'detail',
      component:Detail
    },
    {
      path:'/*',
      redirect:'/index'
    }
  ]
})
