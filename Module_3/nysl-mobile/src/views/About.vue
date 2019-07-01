<template>
  <div class="about bg-dark">
    <div class="p-2 mt-1 mb-1 bg-light">
      about page
    </div>
    <sectionAB/>
  </div>
</template>

<script>
import sectionAB from '@/components/sections/sectionAB.vue'
export default {
  name: 'about',
  components: {
    sectionAB
  }
}
</script>
