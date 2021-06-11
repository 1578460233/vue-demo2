import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../views/home.vue'
// import About from '../views/about.vue'
//路由懒加载
const About = () => import('../views/about.vue');

//router.push跳转（有记录）
//router.replace跳转（无记录）
//router.back返回上
//router.go(-1)去哪？




Vue.use(VueRouter)



const routes = [
  {
    path: '/',//访问/
    path: '*',//访问路由以外路径
    redirect: '/home', //重定向到/home
    redirect: { name: 'home' }, //重定向到/home 
    redirect: to => { return '/home' }, //重定向到/home
  },
  {
    path: '/home',
    name: 'home',
    // this.$router.push(`/home/${id}`)
    //命名方式路由 this.$router.push({name:home},params:{id:this.id})
    
    component: Home
  },
  /* {
    path: '/home',
    component: () => import('../views/about.vue') //懒加载
  }, */
  {
    path: '/about',
    // path: '/about/:name',
    //动态路由--路由要完全匹配才能进入--传递的name参数可以在route->params中获取
    component: About,
    // props: { name: '张三', age: 19 }, //直接在页面的props就能接收--优点，地址栏没有信息
    // path: '/about/:name'/:sex,props:true   //允许props方式传递，地址栏没东西，--只能用？转换
    //path: '/about/:name'/?sex, props:func  //接收个对象
  },

  //        配置子路由

  /* {
    path: '/home',
    name: 'home',
    component: Home,
    children: [
      {
        path: 'mine',//不用加/了
        name: 'home',//父路由一定要配置出口/home/mine
        component: Home

      },
      {
        path: '/home',//重定向的配置
        redirect: '/home/mine',//
      },
       path: '',
      redirect: '/home', 
    ]
  }, */

]
let func = ({ params, query }) => {
  //默认传入route,{}解构出来
  return {
    name: params.name,
    sex: params.sex,
    height: query.height,
  }
  //优点，通过props传入属性
}



/*全局前置守卫

router.beforeEach((to, from, next) => {
  if (to.path !== '/login') {
    //判断是否登录
  } else {
    //没登录
    next('/login?redirect' + to.path);//记录redirect目的是登录后可以给你跳转回原先需要访问的页面
    //this.$route.query.redirect--//可以拿到
    //this.$router.push(redirect);
    //this.$router.replace('/');
    //push和replace都能跳转不同的是push可以给浏览器历史添加一个记录，方便回退

  }
  //进入login页面直接放行
  next();
})
*/
/*
router.afterEach((to,from)=>{
  //做一些善后操作
})
*/

//局部守卫
/*
{
  path: '/home',
  name: 'home',
  component: Home，
  beforeEach((to, from, next) => {})
},*/

//路由的三个钩子
/*
beforeRouteEnter(to,from,next){next();}
beforeRouteUpdata
beforeRouteLeave*/



const router = new VueRouter({
  mode: 'hash', //history模式
  routes
})

export default router
