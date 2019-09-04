import Vue from 'vue'
import Router from 'vue-router'
// import Home from '@/pages/home/Home'
// import Topic from '@/pages/topic/Topic'
// import Category from '@/pages/category/Category'
// import Cart from '@/pages/cart/Cart'
// import Book from '@/pages/book/Book'
import VueRouter from 'vue-router';

import Home from '@/pages/Home'
import Topic from '@/pages/Topic'
import Category from '@/pages/Category'
import Cart from '@/pages/Cart'
import Book from '@/pages/Book'

Vue.use(Router)

export default new Router({
  base: __dirname,
  mode: 'history',
  linkActiveClass: 'active',
  routes: [
    {
      path: '/',
      name: 'Home',
      meta: {
        title: '首页'
      },
      component: Home
    },
    {
      path: '/topic/:topicName',
      name: 'Topic',
      component: Topic
    },
    {
      path: '/category/:category',
      name: 'Category',
      component: Category
    },
    {
      path: '/cart',
      name: 'Cart',
      component: Cart
    },
    {
      path: '/book/:id',
      name: 'Book',
      component: Book
    }
  ]
})
