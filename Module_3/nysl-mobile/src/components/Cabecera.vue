<template>
  <div class="cabecera mb-4 bg-light">
    <b-container>
      <b-row align-v="center" align-h="start" class="pt-2 pb-3" >
        <b-col cols="8" md="9" class="border"><h1 class="text-left">NYSL</h1></b-col>
        <b-col cols="4" md="2" class="border ">
          <b-link to="/"><b-img :src="require('../assets/nysl_logo.png')" fluid alt="Responsive image"></b-img></b-link>
        </b-col>
      </b-row>
    </b-container>
    <NavBar/>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue'
export default {
  name: 'cabecera',
  components: {
    NavBar
  }
}
</script>

<style>
  h1.text-left{
    font-size: 70px;
  }
</style>
