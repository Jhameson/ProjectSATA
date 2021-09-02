<template>
  <Menu />
  <div class="container bg-body sombra p-5 mt-5 mb-5 rounded">
    <div class="col-12 text-center">
      <h2>Cadastro trabalhadores(as) autônomos(as)</h2>
    </div>
    <div class="col-12">
      <form class="row g-3 mt-5">
        <div class="col-12" v-if="alerta">
          <strong class="error-color"
            >* Preencha todos os campos obrigatorios</strong
          >
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
            v-model="nomecompleto"
          />
        </div>
        <div class="col-md-2">
          <label for="name" class="form-label"
            >Data de Nascimento: <strong class="error-color">*</strong></label
          >
          <input
            type="date"
            class="form-control"
            id="name"
            v-model="data_nascimento"
          />
        </div>
        <div class="col-md-2">
          <label for="name" class="form-label"
            >Sexo:<strong class="error-color">*</strong></label
          >
          <select id="inputState" class="form-select" v-model="sexo">
            <option>Masculino</option>
            <option>Feminino</option>
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
            >Telefone para contato 01:
            <strong class="error-color">*</strong></label
          >
          <input
            type="text"
            class="form-control pl-0"
            id="inputAddress"
            placeholder="(99) 9 9999-9999"
            v-model="telefone_um"
          />
        </div>
        <div class="col-3">
          <label for="inputAddress" class="form-label"
            >Telefone para contato 02:</label
          >
          <input
            type="text"
            class="form-control"
            id="inputAddress"
            placeholder="(99) 9 9999-9999"
            v-model="telefone_dois"
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
            v-model="estado"
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
          <select id="disabledSelect" class="form-select" v-model="cidade">
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
          <select id="inputState" class="form-select" v-model="cidade_vizinha">
            <option>Sim</option>
            <option>Não</option>
          </select>
        </div>
        <div class="col-12 infor">
          <label for="name" class="form-label">Informações de Serviço</label>
        </div>
        <div class="col-md-4">
          <label for="inputCity" class="form-label"
            >Serviço: <strong class="error-color">*</strong></label
          >
          <select id="inputState" class="form-select" v-model="servico">
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
            <option>Leiteiro</option>
            <option>Encanador</option>
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
        <div class="col-12 infor">
          <label for="name" class="form-label">Credenciais</label>
        </div>
        <div class="col-md-4">
          <label for="inputState" class="form-label"
            >Digite um nome de usuário:
            <strong class="error-color">*</strong></label
          >
          <input type="text" class="form-control" v-model="usuario" />
        </div>
        <div class="col-md-4">
          <label for="inputState" class="form-label"
            >Digite uma senha: <strong class="error-color">*</strong></label
          >
          <input type="password" class="form-control" v-model="senha" />
        </div>
        <div class="col-12 mt-5">
          <div v-if="nome || data || email || telefone || cidade || cep">
            <!-- <router-link to="/"> -->
            <button
              type="submit"
              class="btn-color-one color-secondary efeitoBtn"
              v-on:click="inserirUser"
            >
              Cadastrar
            </button>
            <!-- </router-link> -->
          </div>
          <div v-else>
            <button
              type="button"
              class="color-secondary btn-sata efeitoBtn"
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

export default {
  data() {
    return {
      alerta: false,

      //cadastrar esses
      nomecompleto: "",
      data_nascimento: "",
      sexo: "",
      email: "",
      telefone_um: "",
      telefone_dois: "",
      cidade_vizinha: "",
      usuario: "",
      senha: "",
      servico: "",
      cidade: "",
      estado: "",
      estados: [],
      municipios: [],
      baseURI: "http://localhost:3000/trabalhadores",
    };
  },
  methods: {
    inserirUser() {
      axios
        .post(this.baseURI, {
          nomecompleto: this.nomecompleto,
          data_nascimento: this.data_nascimento,
          sexo: this.sexo == 'Feminino'?'F':'M',
          email: this.email,
          telefone_um: this.telefone_um,
          telefone_dois: this.telefone_dois,
          cidade_vizinha: this.cidade_vizinha == 'sim'?true:false,
          usuario: this.usuario,
          senha: this.senha,
          servico: this.servico,
          cidade: this.cidade.nome,
          estado: this.estado.nome,
        })
        .then((result) => {
          this.handleFileUpload(result.data.id);
        });
    },
    getcity() {
      axios
        .get(
          "https://servicodados.ibge.gov.br/api/v1/localidades/estados/" +
            this.estado.sigla +
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

<style>
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
