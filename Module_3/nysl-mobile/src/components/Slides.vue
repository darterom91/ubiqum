<template>
  <div class="slides ">
    <b-container class="bg-dark col-12 col-sm-10 col-md-10 pb-2">
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
            src="https://statics-cuidateplus.marca.com/sites/default/files/styles/natural/public/futbolinfantil.jpg?itok=sGCBBhXw"
            alt="image slot"
          >
          <h3 class="text-light">Fire Ants F.C lost the match...</h3>
        </b-carousel-slide>

        <b-carousel-slide>
          <img
            slot="img"
            class="d-block img-fluid"
            src="https://img.lagaceta.com.ar/fotos/notas/2012/07/23/502148_20120723171654.jpg"
            alt="image slot"
          >
          <h3 class="text-light">Tiger Snakes Win the LEAGUE NYSL !!! </h3>
        </b-carousel-slide>

        <!-- Slides with custom text -->
        <b-carousel-slide>
          <img
            slot="img"
            class="d-block img-fluid"
            src="https://i.ytimg.com/vi/sXUN9jHLIpY/maxresdefault.jpg"
            alt="image slot"
          >
          <h3 class="text-light">NP Gorillas win to Relics!!!</h3>
        </b-carousel-slide>

        <!-- Slides with image only -->
        <b-carousel-slide>
          <img
            slot="img"
            class="d-block img-fluid"
            src="https://nbocdn.akamaized.net/Assets/Images_Upload/2016/10/03/voetbal.jpg?maxheight=460&maxwidth=638"
            alt="image slot"
          >
          <h3 class="text-light">Great game of Tiger Snakes !!</h3>
        </b-carousel-slide>
      </b-carousel>
    </b-container>
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
  @media (min-width: 1200px) {
    .carousel-item img {
        height: 400px;
        width: 100%;
    }
}
</style>
