import Vue from 'vue'
import Router from 'vue-router'
import firebase from 'firebase'


Vue.use(Router)

const router =  new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '*',
      redirect: '/'
    },
    {
      path: '/',
      name: 'home',
      component: () => import(/* webpackChunkName: "about" */ './views/Home.vue'),
    },
    {
      path: '/about',
      name: 'about',
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue'),
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
      meta: {
        authorization: true
      }
    },
    {
      path: '/News',
      name: 'News',
      component: () => import(/* webpackChunkName: "Contact" */ './views/News.vue')
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

router.beforeEach((to, from, next) => {
  let users = firebase.auth().currentUser;
  let authentication = to.matched.some(record => record.meta.authorization)

  if (authentication && !users) {
    next('SignUp');
  }else if (!authentication && users) {
    next();
  }else{
    next();
  }
})

export default router;
