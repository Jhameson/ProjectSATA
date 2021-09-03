<template>
  <Menu />
  <div class="container m-auto sombra p-4 mycontainer rounded mt-5">
    <div class="row">
      <div class="col-12 text-center">
        <h2>Utilize suas credenciais</h2>
      </div>
      <form class="col-6 m-auto">
        <div class="mb-4">
          <div v-if="alerte">
            <label for="user" class="form-label error-color"
              >Usuario ou senha inválidos</label
            >
          </div>
          <div class="col-sm-12 m-auto">
            <div class="input-group mt-5 col-sm-12">
              <span class="input-group-text" id="basic-addon1"
                ><img src="../assets/person-circle.svg"
              /></span>
              <input
                type="text"
                class="form-control"
                placeholder="Usuário"
                v-model="usuario"
              />
            </div>
            <div class="input-group mt-4 col-sm-12">
              <span class="input-group-text" id="basic-addon1"
                ><img src="../assets/key-fill.svg"
              /></span>
              <input
                type="password"
                class="form-control"
                placeholder="Senha"
                v-model="senha"
              />
           </div>
          </div>
        </div>
        <div class="text-center">
          <div v-if="usuario && senha">
            <button type="submit" class="btn-sata efeitoBtn btn-three" @click="logar">
              ENTRAR
            </button>
          </div>
          <div v-else>
            <button class="btn-sata efeitoBtn btn-three" @click="alerte = true">
              Ver dados
            </button>
          </div>
        </div>
      </form>
    </div>
  </div>
  <div class="container p-3 mb-5 mt-5 bg-body rounded sombra" v-if="statusLogin">
    <!-- MINHA ÁREA -->
    <div class="col-12 text-center mt-3">
      <h2>Edite seus dados</h2>
    </div>
    <form class="row g-3 mt-3">
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
          v-model="nomecompleto"
        />
      </div>
      <div class="col-md-2">
        <label for="name" class="form-label"
          >Data de Nascimento: <strong class="error-color">*</strong></label
        >
        <input type="date" class="form-control" id="name" v-model="data_nascimento" />
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
          v-model="telefone_um"
        />
      </div>
      <div class="col-3">
        <label for="inputAddress" class="form-label">Telefone para contato 02:</label>
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
          <option v-for="municipio in municipios" :value="municipio" :key="municipio.id">
            {{ municipio.nome }}
          </option>
        </select>
      </div>

      <div class="col-md-3">
        <label for="inputState" class="form-label"
          >Atendimento em cidades vizinhas? <strong class="error-color">*</strong></label
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
      <div class="col-12 mt-5">
        <div v-if="nome || data || email || telefone || cidade || cep">
          <!-- <router-link to="/"> -->
          <button
            type="submit"
            class="btn-color-one color-secondary efeitoBtn"
            v-on:click="atualizarTrabalhador"
          >
            Salvar Alterações
          </button>
          <!-- </router-link> -->
        </div>
        <div v-else>
          <button
            type="button"
            class="color-secondary btn-sata efeitoBtn"
            v-on:click="alerta = true">
            Salvar Alterações
          </button>
        </div>
      </div>
    </form>
    <div class="row mt-5"></div>
  </div>
</template>

<script>
import Menu from "../components/Menu.vue";
import axios from "axios";

export default {
  data() {
    return {
      statusLogin: "",
      usuario: "",
      senha: "",
      baseLogin: "http://localhost:3000/usuarios/login",

      alerta: false,
       
      nomecompleto: "",
      data_nascimento: "",
      sexo: "",
      email: "",
      telefone_um: "",
      telefone_dois: "",
      cidade_vizinha: "",
      servico: "",
      cidade: "",
      estado: "",
      estados: [],
      municipios: [],
      baseURI: "http://localhost:3000/trabalhadores",
    };
  },
  methods: {
    //Métodos relacionados ao login - Início
    logar: function () { 
      axios
        .post(
          this.baseLogin,
          {
            usuario: this.usuario,
            senha: this.senha,
          },
          { withCredentials: true }
        )
        .then((result) => {
          let userId = this.getCookie("userId");

          if (userId) {
            localStorage.setItem("user", JSON.stringify(result.data));
          }
          this.statusLogin = userId;
          
          console.log(userId);
          console.log(result.data);
        });
    },
    getCookie(name) {
      let match = document.cookie.match(new RegExp(name + "=([^;]+)"));
      if (match) return match[1];
      return;
    },
    //Métodos relacionados ao login - Fim

    pegarTrabalhadores(){
      axios.get(this.baseURI, {
        
      }).then((result) => {
        console.log("Dados okay!");
      });
    },


    atualizarTrabalhador() {
      axios
        .put(this.baseURI, {
          nomecompleto: this.nome,
          data: this.data,
          email: this.email,
          telefone1: this.telefone1,
          telefone2: this.telefone2,
          selectedCidade: this.selectedCidade.nome,
          selectedEstado: this.selectedEstado.nome,
          atendeFora: this.atendeFora,
          servico: this.servico,
          senha: this.senha,
        })
        .then((result) => {
          console.log(result.data);
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

<style>
body {
  background: var(--background-color);
  color: var(--color-darker);
}
a {
  text-decoration: none;
}

a:hover {
  color: var(--color-light);
}

.margem-auto {
  margin: auto;
}
.color-light {
  color: var(--color-light);
}

.efeitoBtn:hover {
  transform: scale(1.03);
}
</style>
