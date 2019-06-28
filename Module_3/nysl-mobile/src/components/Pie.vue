<template>
  <div class="pie">
    <b-container>
      <b-row align-v="center">
        <b-col cols="12" sm="12" md="12">
          <h2 class="text-white text-center">NYLS</h2>
        </b-col>
      </b-row>
      <b-row align-h="center" align-v="center" class="mt-2">
        <b-col cols="10" sm="10" md="10" class="border-bottom border-light rounded p-2">
          <b-row align-v="center" align-h="center">
            <b-col cols="6" md="6"><a class="b-link"><b-link to="/">Home</b-link></a></b-col>
            <b-col cols="6" md="6"><a class="b-link"><b-link to="/about">About</b-link></a></b-col>
          </b-row>
        </b-col>
      </b-row>
      <b-row align-v="center">
        <b-col cols="4" sm="4" md="5">
          <p class="pt-2 text-white text-left">© page registred for NYLS
          </p>
        </b-col>
        <b-col cols="4" sm="3" md="2">
          <b-link to="/"><b-img :src="require('../assets/nysl_logo.png')" fluid alt="Responsive image"></b-img></b-link>
        </b-col>
        <b-col cols="4" sm="4" md="5">
          <p class="text-white">Lorem, ipsum.</p>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  name: 'pie'
}
</script>

<style>
.b-link a{
  text-decoration: none;
  font-style:
  italic;
  color:rgb(123, 254, 68);
}
</style>
