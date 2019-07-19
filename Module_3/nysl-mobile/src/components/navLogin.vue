<template>
  <div class="bg-dark border-bottom border-dark d-flex justify-content-end">
    <div v-if="mostrar == false" class="text-light my-auto mx-auto">
      <div class="py-2">You are not online</div>
    </div>
    <div v-if="mostrar == true" class="text-light m-auto">
      <div class="py-3">{{text}} {{users}}</div>
    </div>
    <b-button-group class="mx-auto p-2">
      <b-button squared v-if="mostrar == false" variant="success" class="p-2 m-1" to="/SignIn">Sign In</b-button>
      <b-button squared v-if="mostrar == false"  variant="primary" class="p-2 m-1" to="/SignUp">Sign Up</b-button>
      <b-button squared v-if="mostrar == true"  @click="signOut()" variant="danger" class="p-2">Sign Out</b-button>
    </b-button-group>
  </div>
</template>

<script>
import firebase from 'firebase'
import {mapState} from 'vuex'
export default {
  name: 'navLogin',
  data() {
    return {
      users: null,
      text: 'Hi'
    }
  },
  computed: {
    mostrar(){
      if(firebase.auth().currentUser != null){
        console.log('if mostrar');
        
        this.users = firebase.auth().currentUser.email;
        return true;
      }else{
        console.log('else mostrar');
        this.users = null;
        return false;
      }
    }
  },
  methods: {
    signOut(){
      firebase.auth().signOut().then(function() {
      // Sign-out successful.
      })
      .then(()=> this.$router.replace('SignIn'))
      .catch(function(error) {
      // An error happened.
      });
    }
  },
}
</script>