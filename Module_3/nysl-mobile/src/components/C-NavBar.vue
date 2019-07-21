<template>
  <div class="C-NavBar bg-success">
    <b-container>
    <b-navbar toggleable="md" type="dark" variant="success" >
      <b-navbar-brand href="#">NYSL</b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <b-nav-item to="/" exact>Home</b-nav-item>
            <b-nav-item to="/about">About</b-nav-item>
            <b-nav-item to="/gameInformation">Game Information</b-nav-item>
            <b-nav-item to="/News">News</b-nav-item>
            <b-nav-item to="/contact">Contact</b-nav-item>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </b-container>
  </div>
</template>

<script>
import firebase from 'firebase'
export default {
  name: 'C-NavBar',
  data() {
    return {
      user: ''
    }
  },
  computed: {
    mostrar(){
      if(firebase.auth().currentUser != null){
        console.log('if mostrar');
        
        this.users = firebase.auth().currentUser.email;
        return true;
      }else{
        console.log('else mostrar');
        this.users = null;
        return false;
      }
    }
  },
}
</script>