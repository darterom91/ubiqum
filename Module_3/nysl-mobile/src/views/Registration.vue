<template>
  <div class="Registration">
    <signUp/>
    <div @click="signGmail()" class="text-center"><img class="col-1" src="@/assets/gmail.png" alt="gmail sign-Up"></div>
    <!-- <signIn/> -->
    <div class="border border-danger text-center">
      {{comprobarUser}}
    </div>
  </div>
</template>

<script>
import signIn from '@/components/registration/signIn.vue'
import signUp from '@/components/registration/signUp.vue'
import {mapState} from 'vuex'
import firebase from 'firebase'

export default {
  name: 'Registration',
  data() {
    return {
      person: '',
      error:''
    }
  },
  components: {
    signUp,
    signIn
  },
  computed: {
    comprobarUser(){
      if(firebase.auth().currentUser !=null){
        this.person = firebase.auth().currentUser.email
        return this.person;
      }else{
        console.log("Error!!! no ha");
        this.error = 'Error!!! no hay datos!!!!'
        return this.error
      }
    }
  },
  methods: {
    mostrar(){
      if(firebase.auth().currentUser !=null){
        this.person = firebase.auth().currentUser.email
      }else{
        console.log("Error!!! no ha");
        this.error = 'Error!!! no hay datos!!!!'
      }
    },

    signGmail(){
        const provider = new firebase.auth.GoogleAuthProvider()
        firebase.auth().signInWithRedirect(provider).then((result) => {
          this.user = result.user
        }).catch(err => console.log(error))
    }
  },
}
</script>