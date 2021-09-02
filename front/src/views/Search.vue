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
            <label for="disabledSelect" class="form-label"
              >Informe seu UF:
            </label>
            <select
              id="disabledSelect"
              class="form-select"
              @change="getcity"
              v-model="selectedEstado"
            >
              <option
                v-for="estado in estados"
                :value="estado"
                :key="estado.id"
              >
                {{ estado.nome }}
              </option>
            </select>
          </div>
          <div class="col-8">
            <label for="disabledSelect" class="form-label"
              >Informe sua cidade</label
            >
            <select
              id="disabledSelect"
              class="form-select"
              v-model="selectedCidade"
            >
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
          <label for="disabledSelect" class="form-label"
            >Informe o Serviço</label
          >
          <select
            id="disabledSelect"
            class="form-select"
            v-model="selectedServico"
          >
            <option>Agricultor</option>
            <option>Alfaiate</option>
            <option>Artesão</option>
            <option>Babá</option>
            <option>Cabeleleiro</option>
            <option>Carpinteiro</option>
            <option>Chaveiro</option>
            <option>Confeiteira</option>
            <option>Ponsultor</option>
            <option>Cuidador de pets</option>
            <option>Diarista</option>
            <option>Doceira</option>
            <option>Eletricista</option>
            <option>Encanador</option>
            <option>Enfermeiro</option>
            <option>Leiteiro</option>
            <option>Fotógrafo</option>
            <option>Manicure</option>
            <option>Mecânico</option>
            <option>Metalúrgico</option>
            <option>Organizador de festa</option>
            <option>Pedreiro</option>
            <option>Taxista</option>
            <option>Reforço Escolar</option>
            <option>Vaqueiro</option>
          </select>
        </div>

        <div class="alerta mb-3"></div>
        <div class="mb-3 d-flex justify-content-center">
          <div v-if="selectedEstado && selectedCidade && selectedServico">
            <button
              type="submit"
              class="btn-one efeitoBtn btn-sata"
              @click="fetchByServ"
            >
              Buscar
            </button>
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
  <div
    class="
      container
      p-3
      mb-5
      mycontainer
      rounded
      sombra
      d-flex
      flex-wrap
      justify-content-evenly
    "
  >
    <!-- MINHA ÁREA -->
    <div v-for="trabalhador in trabalhadores" :key="trabalhador.id">
      <div v-if="selectedServico == trabalhador.servico">

      
      <div class="card mycards mt-3 m-5" style="width: 18rem">
        <img
          src="https://fakeimg.pl/250x250/"
          class="card-img-top rounded-circle"
          alt="..."
        />
        <div class="card-body">
          <h5 class="card-title">Nome:{{ trabalhador.nomecompleto }}</h5>
          <label v-if="trabalhador.cidade_vizinha">Atende fora: Sim</label>
          <label v-else>Atende fora: Não</label>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">
            Telefone: {{ trabalhador.telefone_um }}
          </li>
          <li class="list-group-item">Serviço: {{ trabalhador.servico }}</li>
        </ul>
        <div class="card-body text-center">
          <a
            type="button"
            class="btn btn-success"
            href="https://api.whatsapp.com/send?phone=88994473398">WhatsApp</a>
        </div>
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
      /* variaveis auxiliares */
      cidade: "",
      servico: "",
      alerta: false,
      estados: [],
      municipios: [],
      trabalhadores: [],
      baseURI: "http://localhost:3000/trabalhadores",

      /* renderizadas na pagina */
      nome: null,
      telefone1: null,
      atendeFora: null,
      serv: null,

      /* Variaveis que serão usadas para fazer a pesquisa no banco */
      selectedServico: null,
      selectedEstado: null,
      selectedCidade: null,
    };
  },
  methods: {
    fetchByServ() {
      axios
        .get(
          this.baseURI +
            "/" +
            "?cidade=" +
            this.selectedCidade.nome +
            "&estado=" +
            this.selectedEstado.nome +
            "&servico=" +
            this.selectedServico
        )
        .then((result) => {
          this.trabalhadores = [...result.data];
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
