import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex, axios)

export default new Vuex.Store({
  state: {
    posts: []
  },
  actions: {
    loadPost({commit}){
      axios.get('https://api.myjson.com/bins/m6k0f')
      .then(data => {
        let posts = data.data;
        console.log(data.data);
        commit('SET_POSTS', posts);
      })
      .catch()
    }
  },
  mutations: {
    SET_POSTS(state, posts){
      state.posts = posts;
    }
  }
})
