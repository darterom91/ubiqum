<template>
  <div class="GI-NavTeam">
    <div>
      <b-nav class="bg-dark border-top justify-content-center">
        <b-nav-item class="navTeam pl-1 bg-dark" href="#">
          <router-link
          :to="{name: 'teams', params: {id: team.id}}"
          v-for="(team ,index) in posts.teams" :key="index">
            <b-img v-bind:src="team.shield" alt="" class="shield bg-white"></b-img>
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

<style scoped>
/* style="max-width: 80px; max-height: 40px;"  */
  .shield {
    width: 35px;
    height: 35px;
    margin-right: 3%; 
    margin-top: 1%; 
  }
  .navTeam {
    width: 100%;
    height: 100%;
  }
  @media (min-width: 320px) {
  .shield {
    height: 30px;
    width: 30px;
    margin-right: 3%; 
    margin-top: 1%; 
  }
}
 @media (min-width: 360px) {
  .shield {
    height: 40px;
    width: 40px;
    margin-right: 3%; 
    margin-top: 1%; 
  }
}
@media (min-width: 576px) {
  .shield {
    height: 45px;
    width: 45px;
    margin-right: 4%; 
    margin-top: 1%; 
  }
}

@media (min-width: 768px) {
  .shield {
    height: 60px;
    width: 60px;
    margin-right: 4%; 
  }
}
@media (min-width: 992px) {
  .shield {
    height: 80px;
    width: 80px;
    margin-right: 2%; 
  }
}
@media (min-width: 1200px) {
  .shield {
    height: 80px;
    width: 80px;
    margin-right: 4%; 
  }
}
</style>
