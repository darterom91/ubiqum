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
            <b-nav-item to="/registration">Registration</b-nav-item>
            <b-nav-item to="/gameInformation">Game Information</b-nav-item>
            <b-nav-item to="/rules">Rules</b-nav-item>
            <b-nav-item to="/contact">Contact</b-nav-item>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </b-container>
  </div>
</template>

<script>
export default {
  name: 'C-NavBar'
}
</script>