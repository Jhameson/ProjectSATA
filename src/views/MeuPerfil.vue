<template>
  <Menu />
  <div class="container p-3 mb-5 mt-5 bg-body rounded sombra">
    <!-- MINHA ÁREA -->
    <div class="row">
      <div class="rol-12">
        <h4>Serviço: {{ servico }}</h4>
        <span>{{ nome }}</span>
      </div>
    </div>
    <div class="row mt-5">
      <div class="col-md-3 d-flex">
        <img src="https://fakeimg.pl/200/" class="img-fluid rounded-circle margem-auto" />
      </div>
      <div class="col-8 ms-5">
        <label class="col-md-12 col-form-label"><strong>Nome:</strong> {{ nome }}</label>
        <label class="col-md-4 col-form-label"
          ><strong>Serviço:</strong> {{ servicoUm }}</label
        >
        <label class="col-md-4 col-form-label"
          ><strong>Serviço:</strong> {{ servicoDois }}</label
        >
        <label class="col-md-4 col-form-label"
          ><strong>Serviço:</strong> {{ servicoTres }}</label
        >
        <label class="col-md-6 col-form-label"
          ><strong>Telefone:</strong> {{ telefone }}</label
        >
      </div>
    </div>
    <div class="row d-flex justify-content-center mt-5">
      <div class="col-2 d-flex justify-content-center">
        <button type="submit" class="color-secondary btn-sata efeitoBtn" v-on:click="inserirUser">
          Editar
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import Menu from "../components/Menu.vue";

export default {
  data() {
    return {
      servicoUm: "",
      servicoDois: "",
      nome: "",
      telefone: "",
    };
  },
  components: {
    Menu,
  },
};
</script>

<style scoped>
body {
  background: #dfeef6;
  color: var(--color-darker);
}
* {
  font-family: "Roboto", sans-serif;
  box-sizing: border-box;
}
.color-secondary {
  color: #fff;
  background: var(--secondary-color);
}

.efeitoBtn:hover {
  transform: scale(1.03);
}
.infor {
  font-weight: bold;
  padding-top: 30px;
  border-bottom: 1px solid #d4d4d4;
}
</style>
