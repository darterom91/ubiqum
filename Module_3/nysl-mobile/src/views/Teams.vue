<template>
  <div>
    <GINavTeam/>
    <!-- {{$route.params.id}} -->
    <div v-for="(team, Iindex) in posts.teams" :key="Iindex">
      <div v-if="id == team.id">
        <div class="text-center border-success p-3" style="border-top: 10px solid; border-bottom: 10px solid;">
          <h1 class="m-auto">{{team.nameTeam}}</h1>
        </div>
        <div class="bg-dark text-center p-2">
          <img v-bind:src="team.shield" alt="" class=" border-light rounded" style="border: 2px solid">
        </div>
        <div class="">
          <div v-for="(player, Jindex) in team.players" :key="Jindex" class="border border-dark">
            <div v-if="player.dorsal % 2 !=0 " class="text-left d-flex bg-light p-2">
              <div class="col-1">{{player.dorsal}}</div>
              <div class="col-1">{{player.firstName}}</div>
            </div>
            <div v-else class="text-left d-flex bg-secondary text-light p-2">
              <div class="col-1">{{player.dorsal}}</div>
              <div class="col-1">{{player.firstName}}</div>
            </div>
          </div>
        </div>
        <div class="bg-white  text-center">
          <img cols v-bind:src="team.stadio" alt="" class="img-fluid w-75">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapState} from 'vuex'
import GINavTeam from '@/components/GI-NavTeam.vue'
export default {
  props:["id"],
  components: {
    GINavTeam
  },
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