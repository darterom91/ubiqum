<template>
  <div class="sectionGI">
    <h1>sectionGI</h1>
    <div>
      <div v-for="(team, index) in posts.teams" :key="index" class="card border-bottom m-2">
        <div class="card-header bg-dark text-light">
          Featured
        </div>
        <div class="card-body">
          <div class="d-flex flex-row justify-content-around">
            <div class="border rounded m-3">
              <h5 class="card-title">{{team.nameTeam}}</h5>
              <img class="team img-fluid p-2" v-bind:src="team.shield" alt="">
            </div>
            <div class="d-flex flex-row bg-dark text-light text-center p-5">
              <h1>0</h1>
              <h5>vs</h5>
              <h1>0</h1>
            </div>
            <div class="border rounded m-3">
              <h5 class="card-title">{{team.nameTeam}}</h5>
              <img class="team img-fluid p-2" src="https://www.rivercitiessc.com/x/cdn/?https://storage.googleapis.com/wzukusers/user-30330925/images/5b06bd0c7f3a9KJ9J3VQ/RCSC-Shield-3_d600.png" alt="">
            </div>
          </div>
          <img v-bind:src="team.stadio" class="card-img-top" style="max-width: 1268px; height: 300px" alt="...">
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
  name: 'sectionGI',
  mounted() {
    this.$store.dispatch('loadPost');
  },
  computed: {
    ...mapState([
      'posts'
    ])
  },
}
</script>

<style scoped>
  .team{
    width: 200px;
  }
</style>
