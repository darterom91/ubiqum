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
      component: () => import(/* webpackChunkName: "Home" */ './views/Home.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/registration',
      name: 'registration',
      component: () => import(/* webpackChunkName: "Registration" */ './views/Registration.vue')
    },
    {
      path: '/gameInformation',
      name: 'gameInformation',
      component: () => import(/* webpackChunkName: "GameInformation" */ './views/GameInformation.vue')
    },
    {
      path: '/rule',
      name: 'rule',
      component: () => import(/* webpackChunkName: "Rule" */ './views/Rule.vue')
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import(/* webpackChunkName: "Contact" */ './views/Contact.vue')
    }
  ]
})
