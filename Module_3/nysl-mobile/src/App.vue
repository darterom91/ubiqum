<template>
  <div id="app" class="bg-dark">
    <div>
      <cabecera/>
    </div>
    <!-- <div id="nav" class="bg-light">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    <router-view class="bg-light"/>
    <div>
      <div class="border-bottom border-light">
          <h2 class="text-white text-center p-2">NYLS</h2>
      </div>
      <pie/>
    </div>
  </div>
</template>

<script>
import cabecera from '@/components/Cabecera.vue'
import pie from '@/components/Pie.vue'

export default {
  components: {
    cabecera,
    pie
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
  text-align: center;
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
