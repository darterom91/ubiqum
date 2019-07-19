<template>
  <div class="slides">
    <b-carousel
      id="carousel-1"
      v-model="slide"
      :interval="4000"
      controls
      indicators
      background="#ababab"
      img-width="1024"
      img-height="480"
      style="text-shadow: 1px 1px 2px #333;"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
      <!-- Text slides with image -->
      <b-carousel-slide>
        <img
          slot="img"
          class="d-block img-fluid"
          src="http://www.elganchocf.com/wp-content/uploads/2016/02/DSC_0105.jpg"
          alt="image slot"
        >
      </b-carousel-slide>

      <!-- Slides with custom text -->
      <b-carousel-slide>
        <img
          slot="img"
          class="d-block img-fluid"
          src="https://bsbproduction.s3.amazonaws.com/portals/28590/contentrotator/contentrotator636843630201138335.png"
          alt="image slot"
        >
        <h1>Hello world!</h1>
      </b-carousel-slide>

      <!-- Slides with image only -->
      <b-carousel-slide>
        <img
          slot="img"
          class="d-block img-fluid"
          src="https://nbocdn.akamaized.net/Assets/Images_Upload/2016/10/03/voetbal.jpg?maxheight=460&maxwidth=638"
          alt="image slot"
        >
        <h1>Vive con VUE</h1>
      </b-carousel-slide>
    </b-carousel>
  </div>
</template>

<script>
export default {
  name: 'slides',
    data() {
      return {
        slide: 0,
        sliding: null
      }
    },
    methods: {
      onSlideStart(slide) {
        this.sliding = true
      },
      onSlideEnd(slide) {
        this.sliding = false
      }
    }
}
</script>

<style scoped>
.carousel-item img {
    height: 300px;
    width: 100%;
}
  @media (max-width: 668px) {
      .carousel-item img {
        height: 200px;
        width: 100%;
  }
}
</style>
