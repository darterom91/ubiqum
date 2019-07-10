<template>
  <div class="matchTable">
    <div v-for="(journey, Iindex) in posts.journeys" :key="Iindex" class="m-2">
      {{journey.journeyId}} || journey
      <div v-for="(match, Jindex) in journey.matchs" :key="Jindex" class="border border-dark  d-flex 
      w-50 justify-content-center">
        <div v-for="(team, Zindex) in posts.teams" :key="Zindex" class="my-2 ml-2">
          <div v-if="team.id === match.localId || team.id === match.visitingId">
            {{team.nameTeam}}
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