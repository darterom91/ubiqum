<template>
  <div class="sectionGI">
    <b-container class="">
      <div v-for="(journey, Iindex) in posts.journeys" :key="Iindex" class="mb-3">
      <b-row align-v="center" class="border border-dark justify-content-center">
        <b-col cols="12" sm="12" md="12" class="bg-dark text-light p-2">
            <h1>{{journey.journeyId}} journey</h1>
        </b-col>
      </b-row>
      <div v-for="(match, Jindex) in journey.matchs" :key="Jindex">
        <b-row align-v="center" class="bg-success border border-dark justify-content-center">
          <b-col cols="10" sm="10" md="5" class="bg-secondary text-light p-2">
            <h4>{{match.matchId}} match</h4>
          </b-col>
        </b-row>
        <b-row class="border border-dark bg-dark">
          <b-col cols="5" sm="5" md="5" class="bg-light">
            <spam v-for="(team, Zindex) in posts.teams" :key="Zindex">
              <div class="d-flex justify-content-center" v-if="match.localId == team.id">
                <div class="w-100 mt-2">
                  <p>{{team.nameTeam}}</p>
                </div>
                <div class="w-25 mt-1">
                  <b-img class="shield" v-bind:src="team.shield" alt=""></b-img>
                </div>
              </div>
            </spam>
          </b-col>
          <b-col cols="2" sm="2" md="2" class="text-light mt-2">
            <b-card-text>18:00</b-card-text>
          </b-col>
          <b-col cols="5" sm="5" md="5" class="bg-light">
            <spam v-for="(team, Zindex) in posts.teams" :key="Zindex">
              <div class="d-flex" v-if="match.visitingId == team.id">
                <div class="w-25 mt-1">
                  <b-img class="shield" v-bind:src="team.shield" alt=""></b-img>
                </div>
                <div class="w-100 mt-2">
                  <p>{{team.nameTeam}}</p>
                </div>
              </div>
            </spam>
          </b-col>  
        </b-row>

        </div>
      </div>
    </b-container>

    <!-- <b-container>
      <b-row v-for="(team, index) in posts.teams" :key="index" class="card border-bottom m-2">
        <b-card class="card-header bg-dark text-light col-sm-12">
          Featured
        </b-card>
        <b-card class="card-body">
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
        </b-card>
      </b-row>
    </b-container> -->

    <!-- <b-container fluid>
      <b-card v-for="(journey, Iindex) in posts.journeys" :key="Iindex">
        <h1>{{journey.journeyId}} journey</h1>
        <b-card v-for="(match, Jindex) in journey.matchs" :key="Jindex" class="bg-success botder border-dark my-2 mx-3">
          <h4 class="bg-dark text-light" >{{match.matchId}} match</h4>
          <div class="d-flex flex-row justify-content-center bg-light text-light">
            <div v-for="(team, Zindex) in posts.teams" :key="Zindex" class="d-flex flex-row justify-content-center bg-light text-dark text-center">
              <b-card-text class="p-2" v-if="match.localId == team.id">{{team.nameTeam}}</b-card-text>
              <b-img  v-if="match.localId == team.id" v-bind:src="team.shield" alt="" class="w-25 h-50 mb-4"></b-img>
            </div>
            <div class="bg-dark text-center p-2 rounded">
              <b-card-text>18:00</b-card-text>
            </div>
            <div v-for="(team, Zindex) in posts.teams" :key="Zindex" class="d-flex flex-row justify-content-center bg-light text-dark ">
              <b-img  v-if="match.visitingId == team.id" v-bind:src="team.shield" alt="" class="w-25 h-50 mb-4"></b-img>
              <b-card-text v-if="match.visitingId == team.id" class="p-2">{{team.nameTeam}}</b-card-text>
            </div>
          </div>
        </b-card>
      </b-card>
    </b-container> -->
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
  name: 'sectionGI',
  data() {
    return {
      jornadas: []
    }
  },
  mounted() {
    this.$store.dispatch('loadPost');
  },
  computed: {
    ...mapState([
      'posts'
    ])
  },
  methods: {
    jornadasPartidos(posts){

    }
  },
}
</script>

<style scoped>

  .shield {
    height: 40px;
    width: 40px;
}
  @media (max-width: 668px) {
      .shield {
        height: 40px;
        width: 40px;
  }
}
</style>
