<template>
  <div class="home bg-dark">
    <div class="p-2 mt-1 mb-1 bg-light">
      home
    </div>
    <slides/>
    <sectionH/>
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import sectionH from '@/components/sections/sectionH.vue'
import slides from '@/components/Slides.vue'
export default {
  name: 'home',
  components: {
    HelloWorld,
    sectionH,
    slides
  }
}
</script>
