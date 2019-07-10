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
      axios.get('https://api.myjson.com/bins/sdjv7')
      .then(data => {
        let posts = data.data;
        console.log("LoadPost()");
        console.log(data.data);
        commit('SET_POSTS', posts);
      })
      .catch()
    }
  },
  mutations: {
    SET_POSTS(state, posts){
      console.log("SET_POST()");
      console.log(posts);
      state.posts = posts;
    }
  }
})
