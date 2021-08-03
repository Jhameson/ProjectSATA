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
          <label for="name" class="form-label">Nome Completo <strong class=error-color>*</strong></label>
          <input
            type="text"
            class="form-control"
            id="name"
            placeholder="Antônia Maria Souza"
            v-model="nome"
          />
        </div>
        <div class="col-md-2">
          <label for="name" class="form-label">Data de Nascimento <strong class=error-color>*</strong></label>
          <input type="date" class="form-control" id="name" v-model="data" />
        </div>
        <div class="col-md-2">
          <label for="name" class="form-label">Sexo</label>
          <select id="inputState" class="form-select">
            <option>Masculino</option>
            <option>Feminino</option>
            <option>Outros</option>
          </select>
        </div>
        <div class="col-12 infor">
          <label for="name" class="form-label">Informações para contato</label>
        </div>
        <div class="col-md-6">
          <label for="inputEmail4" class="form-label">E-mail <strong class=error-color>*</strong></label>
          <input
            type="email"
            class="form-control"
            id="inputEmail4"
            placeholder="Ex.: fulano.sata@gmail.com"
            v-model="email"
          />
        </div>

        <div class="col-3">
          <label for="inputAddress" class="form-label">Telefone para contato 01: <strong class=error-color>*</strong></label>
          <input
            type="text"
            class="form-control pl-0"
            id="inputAddress"
            placeholder="(99) 9 9999-9999"
            v-model="telefone"
          />
        </div>
        <div class="col-3">
          <label for="inputAddress" class="form-label">Telefone para contato 02:</label>
          <input
            type="text"
            class="form-control"
            id="inputAddress"
            placeholder="(99) 9 9999-9999"
          />
        </div>
        <div class="col-12 infor">
          <label for="name" class="form-label">Local de Atentimento</label>
        </div>
        <div class="col-md-6">
          <label for="inputCity" class="form-label">Cidade <strong class=error-color>*</strong></label>
          <input type="text" class="form-control" id="inputCity" v-model="cidade" placeholder="Crateús"/>
        </div>
        <div class="col-md-4">
          <label for="inputState" class="form-label">Estado <strong class=error-color>*</strong></label>
          <select id="inputState" class="form-select">
            <option>Ceará</option>
            <option>Bahia</option>
          </select>
        </div>
        <div class="col-md-2">
          <label for="inputZip" class="form-label">CEP <strong class=error-color>*</strong></label>
          <input type="text" class="form-control" id="inputZip" v-model="cep" placeholder="63700-000" />
        </div>
        <div class="col-12">
          <div class="form-check">
            <input class="form-check-input" type="checkbox" id="gridCheck" />
            <label class="form-check-label" for="gridCheck">
              Faço atendimentos em cidades vizinhas
            </label>
          </div>
        </div>
        <div class="col-12 infor">
          <label for="name" class="form-label">Informações de Serviço</label>
        </div>
        <div class="col-md-4">
          <label for="inputCity" class="form-label">Serviço 01: <strong class=error-color>*</strong></label>
          <select id="inputState" class="form-select">
            <option>algo...</option>
            <option>algo...</option>
            <option>algo...</option>
          </select>
        </div>
        <div class="col-md-4">
          <label for="inputCity" class="form-label">Serviço 02:</label>
          <select id="inputState" class="form-select">
            <option>algo...</option>
            <option>algo...</option>
            <option>algo...</option>
          </select>
        </div>
        <div class="col-md-4">
          <label for="inputCity" class="form-label">Serviço 03:</label>
          <select id="inputState" class="form-select">
            <option>algo...</option>
            <option>algo...</option>
            <option>algo...</option>
          </select>
        </div>
        <div class="col-12 mt-5">
          <div v-if="nome || data || email || telefone || cidade || cep">
            <router-link to="/">
              <button type="submit" class="btn color-secondary efeitoBtn">Cadastrar</button>
            </router-link>
          </div>
          <div v-else="nome || data || email || telefone || cidade || cep">
            <button type="button" class="btn color-secondary efeitoBtn" v-on:click="alerta= true">
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

export default {
  data() {
    return {
      alerta: false,
      nome: null,
      data: null,
      email: null,
      telefone: null,
      cidade: null,
      cep: null,
    };
  },
  methods: {
   
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
