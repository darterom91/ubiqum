<template>
  <div class="bg-light border-bottom border-dark d-flex justify-content-end">
    <b-button-group>
      <b-button squared v-if="mostrar == false" variant="dark" class="p-2" to="/SignIn">Sign In</b-button>
      <b-button squared v-if="mostrar == false"  variant="dark" class="p-2" to="/SignUp">Sign Up</b-button>
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
      users: null
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
      }).catch(function(error) {
      // An error happened.
      });
    }
  },
}
</script>