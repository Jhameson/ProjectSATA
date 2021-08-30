<template>
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
                <router-link to="/search">
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
                  class="btn btn-primary efeitoBtn "
                  v-on:click="alerta = true"
                >
                  Buscar
                </button>
              </div>
          </div>
        </div>
      </fieldset>
    </form>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      cidade: null,
      serv: null,
      alerta: false,
      baseURI: "http://localhost:3000",
    };
  },
  methods: {
    fetchByServ() {
      axios.get(this.baseURI + "/funcionarios/" + this.cidade).then((result) => {
        console.log(result);
        // this.post = result.data;
      });
    },
  },
};
</script>

<style>
.alerta {
  color: red;
}
.error-color {
  color: red;
}
</style>
