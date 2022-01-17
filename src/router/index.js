import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import Layout from '../layout'

const routes = [

  {//系统界面
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [
      {//仪表盘
        path: 'dashboard',
        name: 'Dashboard',
        meta: '仪表盘',
        component: () => import('../views/dashboard/index'),
      }
    ]

  },
  {//用户管理
    path: '/user-manager',
    component: Layout,
    redirect: '/user-manager/index',
    children: [
      {
        path: 'index',
        name: 'User-manager',
        meta: "用户管理",
        component: () => import('../views/user-manager/index')
      }
    ]
  },
  {//文章管理
    path: '/paper-manager',
    redirect: '/paper-manager/manage',
    name: 'Paper-manager',
    meta: "文章管理",
    component: Layout,
    children: [
      {//文章管理
        path: 'manage',
        name: 'Manage',
        meta: '已发布',
        component: () => import('../views/paper-manager/index'),
      },
      {//文章管理-创作
        path: 'write',
        name: 'Write',
        meta: '创作',
        component: () => import('../views/paper-manager/write'),
      },
      {//文章管理-图床
        path: 'photo',
        name: 'Photo',
        meta: '图床',
        component: () => import('../views/paper-manager/photo'),
      },
      {//评论管理
        path: 'comment',
        name: 'Comment',
        meta: '评论管理',
        component: () => import('../views/paper-manager/comment'),
      },
    ]
  },
  {//系统设置
    path: '/setting',
    redirect: '/setting/index',
    component: Layout,
    children: [{
      path: 'index',
      name: 'Setting',
      meta: '系统设置',
      component: () => import('../views/setting/index'),
    }]
  },
  {//工具
    path: '/tools',
    component: Layout,
    redirect: '/tools/index',
    children: [{
      path: 'index',
      name: 'Tools',
      meta: '工具',
      component: () => import('../views/tools/index'),
    }]
  }

]


//解决报错
const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

export default new Router({
  routes
})


