<template>
  <div class="home bg-dark">
    <div class="text-center p-2 mb-2 bg-light border-bottom border-top border-dark">
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
