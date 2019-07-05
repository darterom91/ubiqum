<template>
  <div class="gameInformation">
    <GINavTeam/>
    <sectionGI/>
    
    <!-- <b-navbar toggleable="lg" type="dark" variant="dark">
      <b-navbar-toggle target="teams"></b-navbar-toggle>
      <b-collapse id="teams" is-nav>
        <b-navbar-nav v-for="(team ,index) in posts.teams" :key="index">
          <p class="text-white">{{index}}</p>
          <b-nav-item class="px-3" href="#"><b-img v-bind:src="team.shield" style="max-width: 80px; max-height: 80px;" alt=""></b-img></b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar> -->
    <!-- <div v-for="(team ,index) in posts.teams" :key="index">
       <img v-bind:src="team.stadio" alt=""> 
    </div> -->

    <!-- <div>
      <b-nav class="bg-dark border-top p-2 justify-content-center">
        <b-nav-item class="bg-white" href="#">
          <router-link 
          :to="{name: 'teams', params: {id: team.id}}"
          v-for="(team ,index) in posts.teams" :key="index" class="m-3">
            <img v-bind:src="team.shield" style="max-width: 80px; max-height: 40px;" alt="" class="p-1 border border-dark">
          </router-link>

        </b-nav-item>
      </b-nav>
    </div> -->

    <!-- <div>
      <sectionGI/>
      {{posts.name}}
      {{posts.version}}
    </div> -->
    <!-- <ul v-for="(team ,index) in posts.teams" :key="index">
      <h1>{{team.nameTeam}}</h1>
      <li v-for="(player ,index) in team.players" :key="index">
       {{player.dorsal}} | {{player.firstName}}
      </li>
    </ul> -->

    <!-- <b-nav v-for="(team ,index) in posts.equipos" :key="index">
      <b-nav-item v-if="index <= 1" class="w-25" >{{team.name}}</b-nav-item>
   </b-nav> -->
  </div>
</template>

<script>
import sectionGI from '@/components/sections/sectionGI.vue'
import GINavTeam from '@/components/GI-NavTeam.vue'
export default {
  name: 'gameInformation',
  components: {
    sectionGI,
    GINavTeam
  }
}
</script>

<style scoped>
  /* img {
    max-height: 100px;
  } */
</style>
