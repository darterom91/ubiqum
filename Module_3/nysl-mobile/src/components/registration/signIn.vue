<template>
  <div class="signIn">
    <h3 class="text-center border-bottom border-dark col-10 col-sm-8 col-md-4 mx-auto p-2
   b-2 ">Sign In</h3>
    <b-form @submit.prevent="onSignIn()" class="border  mx-auto p-2 col-10 col-sm-8 col-md-4">
      <b-form-group
        class="py-2"
        id="input-group-1"
        label="Email address:"
        label-for="input-1"
        description="We'll never share your email with anyone else."
      >
        <b-form-input
          id="input-1"
          v-model="email"
          type="email"
          required
          placeholder="Enter email"
        ></b-form-input>
      </b-form-group>

      <b-form-group
        class="py-2"
        id="input-group-2" 
        label="Your pass:"
        label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="pass"
          type="password"
          required
          placeholder="Enter pass"
        ></b-form-input>
      </b-form-group>
      <div class="text-center">
        <b-button class="text-center mx-1 py-2" type="submit" variant="primary">Submit</b-button>
        <b-button class="text-center mx-1 py-2" type="reset" variant="danger">Reset</b-button>
      </div>
    </b-form>
  </div>
</template>

<script>
import firebase from 'firebase'
export default {
  name: 'signIn',
  data() {
    return {
      email: '',
      pass: ''
    }
  },
  computed: {
    user(){
      return this.$store.getters.user
    }
  },
  methods: {
    onSignIn(){
      this.$store.dispatch('signUserIn', {email: this.email, password: this.pass});
      console.log("Sign in !!!!!");
      this.email = '';
      this.pass = '';
    },
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