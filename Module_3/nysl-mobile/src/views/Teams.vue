<template>
  <div>
    <GINavTeam/>
    <!-- {{$route.params.id}} -->
    <div v-for="(team, Iindex) in posts.teams" :key="Iindex">
      <div v-if="$route.params.id === team.id" class="border border-dark">
        <div class="border border-dark">
          <h1>{{team.nameTeam}}</h1>
        </div>
        <div class="border border-dark">
          <img v-bind:src="team.shield" alt="" class="border border-dark img-fluid">
        </div>
        <div>
          <img cols v-bind:src="team.stadio" alt="" class="border border-dark img-fluid">
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