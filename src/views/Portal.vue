<template>
  <Menu />
  <div class="container m-auto sombra p-4 mycontainer rounded mt-5">
    <div class="row">
      <div class="col-12 text-center">
        <h2>Portal SATA</h2>
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
                placeholder="Administrator"
                v-model="login"
              />
            </div>
            <div class="input-group mt-4 col-sm-12">
              <span class="input-group-text" id="basic-addon1"
                ><img src="../assets/key-fill.svg"
              /></span>
              <input
                type="password"
                class="form-control"
                placeholder="Password"
                v-model="password"
              />
            </div>
          </div>
        </div>
        <div class="text-center">
          <div v-if="usuario && senha">
            <button type="submit" class="btn-sata efeitoBtn btn-three" @click="login">
              ENTRAR
            </button>
          </div>
          <div v-else>
            <button class="btn-sata efeitoBtn btn-three" @click="alerte = true">
              Acessar
            </button>
          </div>
        </div>
      </form>
    </div>
  </div>

  <div class="container p-3 mb-5 mt-5 bg-body rounded sombra">
    <table class="table table-dark table-hover table-striped text-center">
      <thead>
        <tr>
          <td scope="row">ID</td>
          <td colspan="2" class="">Nome</td>
          <td colspan="2" class="">Serviço primário</td>
          <td colspan="1" class="">Remover</td>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td scope="row">3</td>
          <td colspan="2" class="">Larry the Bird</td>
          <td colspan="2" class="">Larry the Bird</td>
          <td colspan="1" class="">
            <button class="btn-sata "><img src="../assets/trash.svg" /></button>
          </td>
        </tr>
        <tr>
          <td scope="row">3</td>
          <td colspan="2" class="">Larry the Bird</td>
          <td colspan="2" class="">Larry the Bird</td>
          <td colspan="1" class="">
            <button class="btn-sata "><img src="../assets/trash.svg" /></button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import Menu from "../components/Menu.vue";

export default {
  data() {
    return {
      alerte: false,
      usuario: null,
      senha: null,
    };
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
