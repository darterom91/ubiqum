<template>
  <div class="NavBar bg-success">
    <b-container>
    <b-navbar toggleable="md" type="dark" variant="success">
      <b-navbar-brand href="#">NavBar</b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <b-nav-item to="/" exact>Home</b-nav-item>
            <b-nav-item to="/about">About</b-nav-item>
            <b-nav-item to="/servicios">servicios</b-nav-item>
            <b-nav-item to="/contarFrutas">contarFrutas</b-nav-item>
            <b-nav-item to="/forms">forms</b-nav-item>
            <b-nav-item to="/columnas">columnas</b-nav-item>
            <b-nav-item to="/CRUD">CRUD</b-nav-item>
            <b-nav-item to="/Fotos/1">fotos</b-nav-item>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </b-container>
  </div>
</template>

<script>
export default {
  name: 'NavBar'
}
</script>