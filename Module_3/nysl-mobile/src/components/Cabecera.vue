<template>
  <div class="cabecera mb-4 bg-light">
    <b-container>
      <b-row align-v="center" align-h="start" >
        <b-col cols="8" sm="8" md=10><h1 class="text-left">NYSL</h1></b-col>
        <b-col cols="4" sm="4" md=2>
          <b-link to="/"><b-img :src="require('../assets/nysl_logo.png')" fluid alt="Responsive image"></b-img></b-link>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  name: 'cabecera'
}
</script>

<style>
  h1.text-left{
    font-size: 50px;
  }
</style>
