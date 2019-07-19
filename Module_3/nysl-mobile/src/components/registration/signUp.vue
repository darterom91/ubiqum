<template>
  <div class="signUp">
   <h3 class=" bg-dark text-light text-center border-bottom border-dark col-10 col-sm-8 col-md-4 mt-2 mx-auto p-2
   b-2 ">Sign Up</h3>
    <b-form @submit.prevent="onSignUp()" class="border  mx-auto p-2 col-10 col-sm-8 col-md-4">
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
        <b-button class="text-center mx-1 py-2" type="submit" variant="primary">Submit</b-button>
        <b-button class="text-center mx-1 py-2" type="reset" variant="danger">Reset</b-button>
      </div>
      <div class=" m-2">
        <b-button @click="signGmail()" class=" bg-light text-dark"><img class="col-3" src="@/assets/gmail.png" alt="gmail sign-Up"> Sign-UP</b-button>
      </div>
    </b-form>
  </div>
</template>

<script>
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
    }
  },
  watch: {
    user (value) {
        if (value !== null && value !== undefined) {
          this.$router.push('/')
        }
      }
  },
  methods: {
    onSignUp(){
      this.$store.dispatch('signUserUp', {email: this.email, password: this.pass})
      this.email = '';
      this.pass = '';
    },
  }
}
</script>