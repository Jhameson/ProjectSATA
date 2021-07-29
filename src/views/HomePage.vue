<template>
 <Menu/>
  <div class="container sombra p-3 mb-5 bg-body rounded mt-5">
    <div class="row">
      <div class="col-12">
        <h1 class="text-center">SATA</h1>
        <p>Olá! Bem vindo(a) ao Sistema de Apoio a Trabalhadores Autônomos - SATA!</p>

        <p>
          Falta apenas um passo para você entrar no mundo SATA. Vamos lá! Digite a sua
          localização e o tipo de serviço que você está precisando e veja suas
          preocupações indo embora!
        </p>
      </div>
      <div class="col-lg-6 d-flex justify-content-center mt-5">
        <div class="col-8">
          <img src="../assets/logotipo.jpeg" class="img-fluid logotipo sombra" />
        </div>
      </div>
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
              <button
                type="button"
                class="btn color-secondary efeitoBtn"
                onclick="pesquisar()"
              >
                Buscar
              </button>
              <router-link to="/filterlist">AAA</router-link>
            </div>
          </fieldset>
        </form>
      </div>
    </div>
    <div class="row mt-5"></div>
  </div>
</template>

<script>
import Menu from '../components/Menu.vue'

export default {
    components:{
        Menu,
    }
}
</script>

<style>
h1 {
    font-weight: 900;
}

a {
    text-decoration: none;
}

a:hover {
    color: var(--color-light);
}

.grid {
    background: #ffd1c2;
    border: 2px solid #f16234;
}

.margem-auto {
    margin: auto;
}

.sombra {
    box-shadow: 0px 2px 7px 0px rgba(63,63,63,0.51);
}

.degrade-color {
    background-image: linear-gradient(to right, var(--primary-color), var(--secondary-color));
}
.color-primary{
    background: var(--primary-color);
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

.logotipo {
    border-radius: 20px;
}

.alerta{
    color: red;
}

/* pagina de acesso */
.acesso{
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: auto;
}
</style>

