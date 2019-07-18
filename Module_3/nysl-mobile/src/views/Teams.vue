<template>
  <div>
    <GINavTeam/>
    <!-- {{$route.params.id}} -->
    <div v-for="(team, Iindex) in posts.teams" :key="Iindex">
      <div v-if="id == team.id">
        <div class="text-center border border-dark my-2 p-2">
          <h1>{{team.nameTeam}}</h1>
        </div>
        <div class="d-flex align-items-center border border-dark">
          <div class="bg-white w-50 p-3">
            <img v-bind:src="team.shield" alt="" class="img-fluid">
          </div>
          <div class="bg-white mt-0 w-100 h-100">
            <img cols v-bind:src="team.stadio" alt="" class="img-fluid">
          </div>
        </div>
        <div v-for="(player, Jindex) in team.players" :key="Jindex" class="border border-dark">
          <div v-if="player.dorsal % 2 !=0 " class="text-left d-flex bg-light p-2">
            <div>{{player.dorsal}}</div>
            <div class="ml-1">{{player.firstName}}</div>
          </div>
          <div v-else class="text-left d-flex bg-secondary text-light p-2">
            <div>{{player.dorsal}}</div>
            <div class="ml-1">{{player.firstName}}</div>
          </div>
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