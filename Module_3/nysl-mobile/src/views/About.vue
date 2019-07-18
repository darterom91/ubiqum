<template>
  <div class="about bg-dark">
    <div class="text-center p-2 mb-2 bg-light border-bottom border-top border-dark">
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
