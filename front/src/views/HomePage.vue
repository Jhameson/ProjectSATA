<template>
  <Menu />
  <div class="container p-3 mb-5 rounded mt-5 sombra mycontainer">
    <div class="row">
      <div class="col-12 texto-sata">
        <SATA />
        <!-- <div class="col-lg-12 d-flex justify-content-center mt-5 ">
          <Logo/>
      </div> -->
        <h3 class="text-center mt-5">
          Olá! Bem vindo(a) ao Sistema de Apoio a Trabalhadores Autônomos!
        </h3>
      </div>

      <div class="col-lg-12 d-flex justify-content-center mt-5">
        <router-link to="/search">
          <button type="button" class="btn-four btn-sata efeitoBtn" v-on:click="alerta = true">
            Encontrar Autônomos
          </button>
        </router-link>
      </div>
    </div>
    <div class="row mt-5"></div>
  </div>
</template>

<script>
import Menu from "../components/Menu.vue";
import Logo from "../components/Logo.vue";
import SATA from "../components/SATA.vue";

export default {
  components: {
    Menu,
    SATA,
    Logo,
  },
};
</script>

<style>

* {
  font-family: "Roboto", sans-serif;
  box-sizing: border-box;
}
.texto-sata {
  color: #fff;
}


.logotipo {
  border-radius: 20px;
}
</style>
