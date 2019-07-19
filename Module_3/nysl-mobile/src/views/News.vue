<template>
  <div class="News">
    <h3 class="text-center p-2 mb-2 bg-light border-bottom border-top border-dark">
      News page
    </h3>
    <sectionNews/>
  </div>
</template>

<script>
import sectionNews from '@/components/sections/sectionNews.vue'
export default {
  name: 'news',
  components: {
    sectionNews
  }
}
</script>