import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import firebase from 'firebase'

Vue.use(Vuex, axios)

export default new Vuex.Store({
  state: {
    posts: [],
    user: []
  },
  getters:{
    user(state){
      return state.user;
    }
  },
  actions: {
    loadPost({commit}){
      axios.get('https://api.myjson.com/bins/sdjv7')
      .then(data => {
        let posts = data.data;
        console.log("LoadPost()");
        console.log(data.data);
        commit('SET_POSTS', posts);
      })
      .catch()
    },
    signUserUp({ commit }, payload){
      const auth = firebase.auth();
      firebase.auth().createUserWithEmailAndPassword(payload.email, payload.password)
        .then(
          data => {
            let user = data.data
            commit('setUser', user)
            auth.currentUser.sendEmailVerification();
          })
        .catch(error => console.error(error))
    },
    signUserIn({ commit }, payload) {
      const auth = firebase.auth();
      firebase.auth().signInWithEmailAndPassword(payload.email, payload.password)
        .then(
          data => {
            let user = data.data
            commit('setUser', user)
          })
        .catch(error => console.error(error))
    },
  },
  mutations: {
    SET_POSTS(state, posts){
      console.log("SET_POST()");
      console.log(posts);
      state.posts = posts;
    },
    setUser(state, users){
      state.user = users
    }
  }
})
