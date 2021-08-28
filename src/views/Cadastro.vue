<template>
  <Menu />
  <div class="container bg-body sombra p-5 mt-5 mb-5">
    <div class="col-12 text-center">
      <h2>Cadastro trabalhadores(as) autônomos(as)</h2>
    </div>
    <div class="col-12">
      <form class="row g-3 mt-5">
        <div class="col-12" v-if="alerta">
          <strong class="error-color">* Preencha todos os campos obrigatorios</strong>
        </div>
        <div class="col-12 infor">
          <label for="name" class="form-label">Informações pessoais</label>
        </div>
        <div class="col-md-8">
          <label for="name" class="form-label"
            >Nome Completo:<strong class="error-color">*</strong></label
          >
          <input
            type="text"
            class="form-control"
            id="name"
            placeholder="Antônia Maria Souza"
            v-model="nome"
          />
        </div>
        <div class="col-md-2">
          <label for="name" class="form-label"
            >Data de Nascimento: <strong class="error-color">*</strong></label
          >
          <input type="date" class="form-control" id="name" v-model="data" />
        </div>
        <div class="col-md-2">
          <label for="name" class="form-label"
            >Sexo:<strong class="error-color">*</strong></label
          >
          <select id="inputState" class="form-select" v-model="sexo">
            <option>Masculino</option>
            <option>Feminino</option>
            <option>Outros</option>
          </select>
        </div>
        <div class="col-12 infor">
          <label for="name" class="form-label">Informações para contato</label>
        </div>
        <div class="col-md-6">
          <label for="inputEmail4" class="form-label"
            >E-mail: <strong class="error-color">*</strong></label
          >
          <input
            type="email"
            class="form-control"
            id="inputEmail4"
            placeholder="Ex.: fulano.sata@gmail.com"
            v-model="email"
          />
        </div>

        <div class="col-3">
          <label for="inputAddress" class="form-label"
            >Telefone para contato 01: <strong class="error-color">*</strong></label
          >
          <input
            type="text"
            class="form-control pl-0"
            id="inputAddress"
            placeholder="(99) 9 9999-9999"
            v-model="telefone01"
          />
        </div>
        <div class="col-3">
          <label for="inputAddress" class="form-label">Telefone para contato 02:</label>
          <input
            type="text"
            class="form-control"
            id="inputAddress"
            placeholder="(99) 9 9999-9999"
            v-model="telefone02"
          />
        </div>
        <div class="col-12 infor">
          <label for="name" class="form-label">Local de Atentimento</label>
        </div>
        <div class="col-md-3">
          <label for="disabledSelect" class="form-label"
            >Informe seu UF:<strong class="error-color">*</strong></label
          >
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
        <div class="col-md-6">
          <label for="disabledSelect" class="form-label"
            >Informe sua cidade:<strong class="error-color">*</strong></label
          >
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

        <div class="col-md-3">
          <label for="inputState" class="form-label"
            >Atendimento em cidades vizinhas?
            <strong class="error-color">*</strong></label
          >
          <select id="inputState" class="form-select" v-model="atendeFora">
            <option>Sim</option>
            <option>Não</option>
          </select>
        </div>
        <div class="col-12 infor">
          <label for="name" class="form-label">Informações de Serviço</label>
        </div>
        <div class="col-md-4">
          <label for="inputCity" class="form-label"
            >Serviço 01: <strong class="error-color">*</strong></label
          >
          <select id="inputState" class="form-select" v-model="serv1">
            <option>algo...</option>
            <option>algo...</option>
            <option>algo...</option>
          </select>
        </div>
        <div class="col-md-4">
          <label for="inputCity" class="form-label">Serviço 02:</label>
          <select id="inputState" class="form-select" v-model="serv2">
            <option>algo...</option>
            <option>algo...</option>
            <option>algo...</option>
          </select>
        </div>
        <div class="col-md-4">
          <label for="inputCity" class="form-label">Serviço 03:</label>
          <select id="inputState" class="form-select" v-model="serv3">
            <option>algo...</option>
            <option>algo...</option>
            <option>algo...</option>
          </select>
        </div>
        <div class="col-12 infor">
          <label for="name" class="form-label">Credenciais</label>
        </div>
        <div class="col-md-4">
          <label for="inputState" class="form-label"
            >Digite uma senha:
            <strong class="error-color">*</strong></label
          >
          <input type="text" class="form-control" v-model="senha" />
        </div>
        <div class="col-12 mt-5">
          <div v-if="nome || data || email || telefone || cidade || cep">
            <!-- <router-link to="/"> -->
            <button
              type="submit"
              class="btn color-secondary efeitoBtn"
              v-on:click="inserirUser"
            >
              Cadastrar
            </button>
            <!-- </router-link> -->
          </div>
          <div v-else>
            <button
              type="button"
              class="btn color-secondary efeitoBtn"
              v-on:click="alerta = true"
            >
              Cadastrar
            </button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import Menu from "../components/Menu.vue";
import axios from "axios";
import InputMask from "primevue/inputmask";

export default {
  data() {
    return {
      alerta: false,
      nome: null,
      data: null,
      email: null,
      telefone1: null,
      telefone2: null,
      atendeFora: null,
      serv1: null,
      serv2: null,
      serv3: null,
      senha: null,
      selectedEstado: null,
      selectedCidade: null,

      estados: [],
      municipios: [],
      baseURI: "http://localhost:3000/funcionarios",
    };
  },
  methods: {
    inserirUser() {
      axios
        .post(this.baseURI, {
          nome: this.nome,
          data: this.data,
          email: this.email,
          telefone1: this.telefone1,
          telefone2: this.telefone2,
          selectedCidade: this.selectedCidade.nome,
          selectedEstado: this.selectedEstado.nome,
          atendeFora: this.atendeFora,
          serv1: this.serv1,
          serv2: this.serv2,
          serv3: this.this3,
          senha: this.senha,
        })
        .then((result) => {
          this.handleFileUpload(result.data.id);
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
  },
};
</script>

<style scoped>
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
.error-color {
  color: red;
}
</style>
