<template>
  <Menu />

  <!-- MINHA ÁREA -->
  <!-- <RefazerPesquisa /> -->
  <div class="container mb-5">
    <!-- <Pesquisar /> -->
    <div class="col-lg-12">
      <h2 class="text-center mb-5 mt-5">Pesquisar Serviço</h2>
      <form>
        <fieldset>
          <div class="row">
            <div class="col-12" v-if="alerta">
              <p class="error-color">* Preencha todos os campos obrigatorios</p>
            </div>
            <div class="col-6">
              <div class="mb-4">
                <label for="disabledTextInput" class="form-label"
                  >Infome sua Cidade
                  <strong v-if="!cidade" class="error-color">*</strong></label
                >
                <input
                  type="text"
                  id="disabledTextInput"
                  class="form-control"
                  placeholder="Ex.: Crateús/CE"
                  v-model="cidade"
                />
              </div>
            </div>
            <div class="col-6">
              <div class="mb-2">
                <label for="disabledSelect" class="form-label">Informe o Serviço</label>
                <select id="disabledSelect" class="form-select" v-model="serv">
                  <option>Faxineira</option>
                  <option>Encanador</option>
                  <option>Pintor</option>
                  <option>Eletricista</option>
                  <option>Servente</option>
                  <option>Mecânico</option>
                  <option>Babá</option>
                </select>
              </div>
            </div>
            <div class="col-12 d-flex justify-content-center mb-2">
              <div v-if="cidade">
                <router-link to="/filterlist">
                  <button
                    type="submit"
                    class="btn btn-primary efeitoBtn"
                    @click="fetchByServ"
                  >
                    Buscar
                  </button>
                </router-link>
              </div>
              <div v-else="cidade">
                <button
                  type="button"
                  class="btn btn-primary efeitoBtn"
                  v-on:click="alerta = true"
                >
                  Buscar Autônomos
                </button>
              </div>
            </div>
          </div>
        </fieldset>
      </form>
    </div>
  </div>
  <div class="container sombra p-3 mb-5 bg-body rounded">
    <h3 v-if="buscar">{{}} de {{}}</h3>
    <div class="row d-flex justify-content-evenly">
      <div v-for="card in cards" :key="card.cidade">
        <div
          v-if="
            cidade == card.cidade &&
            (serv1 == card.serv1 || serv2 == card.serv2 || serv3 == card.serv3)
          "
        >
          <Card :nome="card.nome" :contato="card.telefone1" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Menu from "../components/Menu.vue";
import Pesquisar from "../components/Pesquisar.vue";
import Card from "../components/Card.vue";
import RefazerPesquisa from "../components/RefazerPesquisa.vue";
export default {
  name: "FilterList",
  data() {
    return {
      buscar: false,
      cidade: null,
      serv: null,
      alerta: false,
      cards: [],
      baseURI: "http://localhost:3000",
    };
  },
  methods: {
    fetchByServ() {
      buscar = true;
      axios.get(this.baseURI + "/funcionarios/" + this.cidade).then((result) => {
        console.log(result);
        // this.post = result.data;
      });
    },
  },
  // mounted() {
  //   axios.get(this.baseURI + "/" + this.id).then((result) => {
  //     console.log(result);
  //     this.cards = result.data;
  //   });
  // },
  components: {
    Menu,
    Card,
    RefazerPesquisa,
    Pesquisar,
  },
};
</script>

<style>
* {
  font-family: "Roboto", sans-serif;
  box-sizing: border-box;
}
body {
  background: var(--background-color);
  color: var(--color-darker);
}
</style>
