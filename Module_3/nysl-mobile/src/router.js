import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

const router =  new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '*',
      redirect: '/home'
    },
    {
      path: '/',
      name: 'home',
      component: () => import(/* webpackChunkName: "about" */ './views/Home.vue')
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
      path: '/SignUp',
      name: 'SignUp',
      component: () => import(/* webpackChunkName: "Contact" */ './views/SignUp.vue')
    },
    {
      path: '/SignIn',
      name: 'SignIn',
      component: () => import(/* webpackChunkName: "Contact" */ './views/SignIn.vue')
    },
    {
      path: '/gameInformation',
      name: 'gameInformation',
      component: () => import(/* webpackChunkName: "Contact" */ './views/GameInformation.vue'),
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
      props: true,
      component: () => import(/* webpackChunkName: "Contact" */ './views/Teams.vue')
    }
  ]
})

export default router;
