import Vue from 'vue';
import Router from 'vue-router'
import home from '../pages/home'
import movie from '../pages/movie'
import book from '../pages/book'
import broadcast from '../pages/broadcast'
import group from '../pages/group'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'home',
      component: home
    },
    {
      path: '/movie',
      name: 'movie',
      component: movie
    },
    {
      path: '/book',
      name: 'book',
      component: book
    },
    {
      path: '/broadcast',
      name: 'broadcast',
      component: broadcast
    },
    {
      path: '/group',
      name: 'group',
      component: group
    }
  ]
})
