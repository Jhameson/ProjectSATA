<template>
  <div class="col-lg-6">
    <h2 class="text-center mb-5 mt-5">Pesquisar Serviço</h2>
    <form>
      <fieldset>
        <div class="col-12" v-if="alerta">
          <p class="error-color">* Preencha todos os campos obrigatorios</p>
        </div>
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
        <div class="mb-2">
          <label for="disabledSelect" class="form-label">Informe o Serviço</label>
          <select id="disabledSelect" class="form-select">
            <option>Faxineira</option>
            <option>Encanador</option>
            <option>Pintor</option>
            <option>Eletricista</option>
            <option>Servente</option>
            <option>Mecânico</option>
            <option>Babá</option>
          </select>
        </div>
        <div class="alerta mb-3"></div>
        <div class="mb-3 d-flex justify-content-center">
          <div v-if="cidade">
            <router-link to="/filterlist">
              <button type="submit" class="btn btn-primary efeitoBtn">Buscar</button>
            </router-link>
          </div>
          <div v-else="cidade">
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
</template>

<script>
export default {
  data() {
    return {
      cidade: null,
      alerta: false,
    };
  },
  methods: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.alerta {
  color: red;
}
.error-color {
  color: red;
}
</style>
