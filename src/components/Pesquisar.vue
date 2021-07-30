<template>
  <div class="col-lg-6">
    <h2 class="text-center mb-5 mt-5">Pesquisar Serviço</h2>
    <form>
      <fieldset>
        <div class="mb-4">
          <label for="disabledTextInput" class="form-label">Infome sua Cidade</label>
          <input
            type="text"
            id="disabledTextInput"
            class="form-control"
            placeholder="Ex.: Crateús/CE"
          />
        </div>
        <div class="mb-2">
          <label for="disabledSelect" class="form-label">Informe o Serviço</label>
          <select id="disabledSelect" class="form-select">
            <option selected>Selecionar serviço</option>
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
          <router-link to="/filterlist">
            <button
              type="button"
              class="btn color-secondary efeitoBtn"
              onclick="pesquisar()"
            >
              Buscar
            </button>
          </router-link>
        </div>
      </fieldset>
    </form>
  </div>
</template>

<script>
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>


.teste a {
  text-decoration: none;
}

a:hover {
  color: var(--color-light);
}

.color-secondary {
  background: var(--secondary-color);
}

.color-light {
  color: var(--color-light);
}

.efeitoBtn:hover {
  transform: scale(1.03);
}

.alerta {
  color: red;
}

</style>
