<template>
  <div class="GI-NavTeam">
    <div>
      <b-nav class="bg-dark border-top p-2 justify-content-center">
        <b-nav-item class="bg-white" href="#">
          <router-link
          :to="{name: 'teams', params: {id: team.id}}"
          v-for="(team ,index) in posts.teams" :key="index" class="m-3">
            <b-img v-bind:src="team.shield" style="max-width: 80px; max-height: 40px;" alt="" class="p-1 border border-dark"></b-img>
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