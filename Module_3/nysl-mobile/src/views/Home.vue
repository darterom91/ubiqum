<template>
  <div class="home bg-dark">
    <div class="p-2 mt-1 mb-1 bg-light">
      home
    </div>
    <sectionH/>
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import sectionH from '@/components/sectionHome/sectionH.vue'
export default {
  name: 'home',
  components: {
    HelloWorld,
    sectionH
  }
}
</script>
