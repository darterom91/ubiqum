<template>
  <div class="C-Footer">     
    <b-container class="bg-dark">
      <b-row align-h="center" align-v="center" class="text-center">
        <b-col cols="12" sm="12" md="12" class="border-bottom border-light rounded p-2">
          <b-row align-v="center" align-h="center">
            <b-col cols="6" md="6"><a class="b-link"><b-link to="/">Home</b-link></a></b-col>
            <b-col cols="6" md="6"><a class="b-link"><b-link to="/about">About</b-link></a></b-col>
            <b-col cols="6" md="6"><a class="b-link"><b-link to="/registration">Registration</b-link></a></b-col>
            <b-col cols="6" md="6"><a class="b-link"><b-link to="/gameInformation">Game Information</b-link></a></b-col>
            <b-col cols="6" md="6"><a class="b-link"><b-link to="/News">News</b-link></a></b-col>
            <b-col cols="6" md="6"><a class="b-link"><b-link to="/contact">Contact</b-link></a></b-col>
          </b-row>
        </b-col>
      </b-row>
      <b-row align-v="center" class="text-center">
        <b-col cols="4" sm="4" md="5">
          <p class="pt-2 text-light ">© page registred for NYLS
          </p>
        </b-col>
        <b-col cols="4" sm="4" md="2">
          <b-link to="/"><b-img class="p-2" :src="require('../assets/nysl_logo.png')" fluid alt="Responsive image"></b-img></b-link>
        </b-col>
        <b-col cols="4" sm="4" md="5">
          <p class="text-light">Lorem, ipsum.</p>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  name: 'C-Footer'
}
</script>

<style>
.b-link a{
  text-decoration: none;
  font-style:
  italic;
  color:rgb(0, 165, 65);
}
</style>
