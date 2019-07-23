<template>
  <div class="signUp">

    <b-alert variant="danger" v-if="mostrar == true" show class="col-10 col-sm-8 col-md-6 mx-auto mt-2 text-center">
      <b-img class="col-10" src="https://i.ytimg.com/vi/P-MfCwLcKlk/hqdefault.jpg"></b-img>
      <h3>You are logged !!!</h3>
      <a href="@/views/home.vue" class="alert-link">Please return to home</a>
    </b-alert>
   
    <b-alert variant="warning" v-if="mostrar == false" show class=" col-10 col-sm-8 col-md-6 mx-auto mt-2 text-center">

      <b-img class="col-8" src="http://img.archiexpo.es/images_ae/photo-mg/11144-5629287.jpg"></b-img>
      <h3 class="">you are not logged!!!</h3>
      <p>Please loggin in my page</p>
    </b-alert>

    <b-form v-if="mostrar == false" @submit.prevent="onSignUp()" class="text-dark border border-dark rounded mx-auto mt-2 p-0 col-10 col-sm-8 col-md-6">
      <h3 class="bg-dark text-light text-center border border-dark">Sign Up</h3>
      <b-form-group
        class="py-2 mx-2"
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
        class="py-2 mx-2"
        id="input-group-2"
        label="Your Pass:"
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
        <b-button class="col-4 text-center mx-1 my-2 py-2" type="submit" variant="primary">Submit</b-button>
        <b-button class="col-4 text-center mx-1 my-2 py-2" type="reset" variant="danger">Reset</b-button>
      </div>
        <b-button block @click="signGmail()" class="text-left mt-2 bg-light text-dark"><img class="col-3 col-sm-2" src="@/assets/gmail.png" alt="gmail sign-Up"> Sign-up with Gmail
        </b-button>
      
    </b-form>
  </div>
</template>

<script>
import firebase from 'firebase'

export default {
  name: 'signUp',
  data() {
    return {
      email: '',
      pass: ''
    }
  },
  computed: {
    user(){
      return this.$store.getters.user
    },
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
    onSignUp(){
      this.$store.dispatch('signUserUp', {email: this.email, password: this.pass})
      this.email = '';
      this.pass = '';
    },

    signGmail(){
        const provider = new firebase.auth.GoogleAuthProvider()
        firebase.auth().signInWithRedirect(provider).then((result) => {
          this.user = result.user
        }).catch(err => console.log(error))
    }
  }
}
</script>