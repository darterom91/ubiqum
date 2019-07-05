<template>
  <div>
    <GINavTeam/>
    <!-- {{$route.params.id}} -->
    <div v-for="(team, Iindex) in posts.teams" :key="Iindex">
      <div v-if="$route.params.id === team.id" class="border border-dark">
        <div class="border border-dark">
          <h1>{{team.id}} | {{team.nameTeam}}</h1>
        </div>
        <div class="border border-dark">
          <b-img v-bind:src="team.shield" alt="" class="p-1 border border-dark"></b-img>
        </div>
        <div v-for="(player, Jindex) in team.players" :key="Jindex" class="border border-dark">
            <li>{{player.dorsal}} || {{player.firstName}}</li>
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