<template>
  <div id="app" class="">
    <navLogin/>
    <div>
      <CHeader/>
    </div>
    <!-- <div id="nav" class="bg-light">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    <router-view class="bg-light"/>
    <div class="bg-dark">
      <div class="border-bottom border-light  bg-dark mt-2">
          <h2 class="text-light text-center p-3">NYSL</h2>
      </div>
      <CFooter/>
    </div>
  </div>
</template>

<script>
import navLogin from '@/components/navLogin.vue'
import CHeader from '@/components/C-Header.vue'
import CFooter from '@/components/C-Footer.vue'

export default {
  components: {
    CHeader,
    CFooter,
    navLogin
  }
}
</script>

<style>
/* :root {
  --black: black;
}
header {
  background: var(--black);
} */
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
 
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
