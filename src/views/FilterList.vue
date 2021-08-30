<template>
  <Menu />

  <!-- MINHA ÁREA -->
  <!-- <RefazerPesquisa /> -->
  <div class="container mb-5 mycontainer sombra rounded">
    <!-- <Pesquisar /> -->
    <h2
      class="text-center mb-5 mt-5"
      style="font-family: /'Orbitron'/, sans-serif; padding-top: 30px"
    >
      Pesquisar Serviço
    </h2>
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
              <button type="submit" class="btn-color-one efeitoBtn">Buscar</button>
            </router-link>
          </div>
          <div v-else>
            <button
              type="button"
              class="btn-one efeitoBtn btn-sata"
              v-on:click="alerta = true"
            >
              Buscar
            </button>
          </div>
        </div>
      </fieldset>
    </form>
  </div>
  <div class="container p-3 mb-5 mycontainer rounded sombra">
    <!-- MINHA ÁREA -->
    <div class="bg-body rounded p-2 mycards">
      <div class="row">
        <div class="rol-12">
          <h4>Serviço: {{ servico }}</h4>
          <span>Nome: {{ nome }}</span>
        </div>
      </div>
      <div class="row mt-5">
        <div class="col-md-3 d-flex">
          <img
            src="https://fakeimg.pl/200/"
            class="img-fluid rounded-circle margem-auto"
          />
        </div>
        <div class="col-8 ms-5">
          <label class="col-md-12 col-form-label"
            ><strong>Nome:</strong> {{ nome }}</label
          >
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
          <a
            type="button"
            class="btn btn-success"
            href="https://api.whatsapp.com/send?phone=55123456789"
            >WhatsApp</a
          >
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
.mycards {
  color: var(--font-dark);
}
</style>
