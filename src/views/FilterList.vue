<template>
  <Menu />

  <!-- MINHA ÁREA -->
  <!-- <RefazerPesquisa /> -->
  <div class="container mb-5">
    <!-- <Pesquisar /> -->
    <h2 class="text-center mb-5 mt-5">Pesquisar Serviço</h2>
    <form>
      <fieldset>
        <div class="col-12" v-if="alerta">
          <p class="error-color">* Preencha todos os campos obrigatorios</p>
        </div>
        <div class="row">
          <div class="col-4">
            <label for="disabledSelect" class="form-label">Informe seu UF:</label>
            <select
              id="disabledSelect"
              class="form-select"
              @change="getcity"
              v-model="selectedEstado"
            >
              <option v-for="estado in estados" :value="estado" :key="estado.id">
                {{ estado.nome }}
              </option>
            </select>
          </div>
          <div class="col-8">
            <label for="disabledSelect" class="form-label">Informe sua cidade</label>
            <select id="disabledSelect" class="form-select" v-model="selectedCidade">
              <option
                v-for="municipio in municipios"
                :value="municipio"
                :key="municipio.id"
              >
                {{ municipio.nome }}
              </option>
            </select>
          </div>
        </div>
        <!-- {{cidade}}
        {{servico}} -->
        <div class="mt-2">
          <label for="disabledSelect" class="form-label">Informe o Serviço</label>
          <select id="disabledSelect" class="form-select" v-model="servico">
            <option>Faxineira</option>
          </select>
        </div>

        <div class="alerta mb-3"></div>
        <div class="mb-3 d-flex justify-content-center">
          <div v-if="selectedEstado && selectedCidade && servico">
            <router-link to="/filterlist">
              <button type="submit" class="btn btn-primary efeitoBtn">Buscar</button>
            </router-link>
          </div>
          <div v-else>
            <button
              type="button"
              class="btn btn-primary efeitoBtn"
              v-on:click="alerta = true"
            >
              Buscar
            </button>
          </div>
        </div>
      </fieldset>
    </form>
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
import axios from "axios";
export default {
  name: "FilterList",
  data() {
    return {
      cidade: null,
      servico: null,
      alerta: false,
      estados: [],
      municipios: [],
      selectedEstado: null,
      selectedCidade: null,
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
     getcity() {
      axios
        .get(
          "https://servicodados.ibge.gov.br/api/v1/localidades/estados/" +
            this.selectedEstado.sigla +
            "/municipios"
        )
        .then((res) => {
          console.log(res);
          this.municipios = [...res.data];
        });
    },
  },
  mounted() {
    axios
      .get("https://servicodados.ibge.gov.br/api/v1/localidades/estados")
      .then((res) => {
        console.log(res);
        this.estados = [...res.data];
      });
  },
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
