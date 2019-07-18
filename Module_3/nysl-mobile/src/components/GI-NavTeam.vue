<template>
  <div class="GI-NavTeam">
    <div>
      <b-nav class="text-center bg-dark border-top justify-content-center">
        <b-nav-item class="navTeam bg-dark" href="#">
          <router-link
          :to="{name: 'teams', params: {id: team.id}}"
          v-for="(team ,index) in posts.teams" :key="index">
            <b-img v-bind:src="team.shield" thumbnail rounded="circle" alt="" class="shield bg-white"></b-img>

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
  }
  .navTeam {
    width: 100%;
    height: 100%;
  }
  @media (min-width: 320px) {
  .shield {
    height: 28px;
    width: 28px;
    margin-right: 1%; 
  }

  .navTeam {
    padding-left: 0;
  }
}
 @media (min-width: 360px) {
  .shield {
    height: 35px;
    width: 35px;
    margin-right: 1%; 
  }
  .navTeam {
    padding-left: 1%;
  }
}
@media (min-width: 576px) {
  .shield {
    height: 45px;
    width: 45px;
    margin-right: 2.5%; 
  }
  .navTeam {
    padding-left: 1%;
  }
}

@media (min-width: 768px) {
  .shield {
    height: 60px;
    width: 60px;
    margin-right: 1%; 
  }
  .navTeam {
    padding-left: 0;
  }
}
@media (min-width: 992px) {
  .shield {
    height: 80px;
    width: 80px;
    margin-right: 1%; 
  }
}
@media (min-width: 1200px) {
  .shield {
    height: 80px;
    width: 80px;
    margin-right: 4%; 
  }
  .navTeam {
    padding-left: 5%;
    border:1px solid white;
  }
}
</style>
