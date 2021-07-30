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
      <div class="col-lg-6 d-flex justify-content-center mt-5">
        <div class="col-8">
          <img src="../assets/logotipo.jpeg" class="img-fluid logotipo sombra" />
        </div>
      </div>

      <Pesquisar />
    </div>
    <div class="row mt-5"></div>
  </div>
</template>

<script>
import Menu from "../components/Menu.vue";
import Pesquisar from "../components/Pesquisar.vue";
import SATA from "../components/SATA.vue";

export default {
  components: {
    Menu,
    Pesquisar,
    SATA,
  },
};
</script>

<style>
.margem-auto {
  margin: auto;
}

.color-primary {
  background: var(--primary-color);
}

.color-secondary {
  background: var(--secondary-color);
}

.color-light {
  color: var(--color-light);
}

.efeitoBtn:hover {
  transform: scale(1.03);
}

.logotipo {
  border-radius: 20px;
}

.alerta {
  color: red;
}

/* pagina de acesso */
.acesso {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto;
}
</style>
