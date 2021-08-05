<template>
  <Menu />
  <div class="container sombra p-3 mb-5 bg-body rounded mt-5">
    <div class="row">
      <div class="col-12">
        <SATA />
        <p>Olá! Bem vindo(a) ao Sistema de Apoio a Trabalhadores Autônomos - SATA!</p>
        <p>
          Falta apenas um passo para você entrar no mundo SATA. Vamos lá! Digite a sua
          localização e o tipo de serviço que você está precisando e veja suas
          preocupações indo embora!
        </p>
      </div>
      <div class="col-lg-12 d-flex justify-content-center mt-5 ">
          <Logo/>
      </div>
      <div class="col-lg-12 d-flex justify-content-center mt-5 ">
        <router-link to="/filterlist">
          <button
            type="button"
            class="btn btn-primary efeitoBtn"
            v-on:click="alerta = true"
          >
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
body {
  background: #dfeef6;
  color: var(--color-darker);
}
* {
  font-family: "Roboto", sans-serif;
  box-sizing: border-box;
}

.logotipo {
  border-radius: 20px;
}
</style>
