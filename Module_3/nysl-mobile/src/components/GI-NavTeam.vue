<template>
  <div class="GI-NavTeam">
    <div>
      <b-nav class="bg-white border-top p-2 justify-content-center">
        <b-nav-item class="bg-dark border-bottom border-dark" href="#">
          <router-link
          :to="{name: 'teams', params: {id: team.id}}"
          v-for="(team ,index) in posts.teams" :key="index" class="m-1">
            <b-img v-bind:src="team.shield" style="max-width: 80px; max-height: 45px;" alt="" class="p-1 mt-1 border border-dark bg-white"></b-img>
          </router-link>

        </b-nav-item>
      </b-nav>
    </div>
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
  name: 'GI-NavTeam',
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