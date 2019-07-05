import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/registration',
      name: 'registration',
      component: () => import(/* webpackChunkName: "Contact" */ './views/Registration.vue')
    },
    {
      path: '/gameInformation',
      name: 'gameInformation',
      component: () => import(/* webpackChunkName: "Contact" */ './views/GameInformation.vue')
    },
    {
      path: '/rules',
      name: 'rules',
      component: () => import(/* webpackChunkName: "Contact" */ './views/Rules.vue')
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import(/* webpackChunkName: "Contact" */ './views/Contact.vue')
    },
    {
      path: '/teams/:id',
      name: 'teams',
      component: () => import(/* webpackChunkName: "Contact" */ './views/Teams.vue')
    }
  ]
})
