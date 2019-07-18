import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import router from './router'
import store from './store'
import BootstrapVue from 'bootstrap-vue'
import firebase from 'firebase'


Vue.use(BootstrapVue)

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.config.productionTip = false

const firebaseConfig = {
  apiKey: "AIzaSyA81HdmYdUu4oix0i0TmHxLgWOzj1JZrQI",
  authDomain: "nysldata.firebaseapp.com",
  databaseURL: "https://nysldata.firebaseio.com",
  projectId: "nysldata",
  storageBucket: "",
  messagingSenderId: "794562016449",
  appId: "1:794562016449:web:7478e703c629ad4c"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig)

firebase.auth().onAuthStateChanged(function (user) {
  if (user) {
    console.log('conectado ' + user.email);
    new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount('#app')

  } else {
    console.log('no conectado');
    // No user is signed in.
    new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount('#app')
  }
});
