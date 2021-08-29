<template>
  <Menu />
  <div class="col-4 m-auto sombra p-4 bg-body rounded mt-5">
    <div class="row flex-column">
      <div class="col-12 text-center">
        <h2>Utilize suas credenciais</h2>
      </div>
      <form action="">
        <div class="row mb-4">
        <div v-if="alerte">
          <label for="user" class="form-label error-color">Usuario ou senha inválidos</label>
        </div >
          <label for="user" class="form-label">Usuário:</label>
          <div class="col-sm-12">
            <input
              type="text"
              id="userName"
              placeholder="Seu usuário"
              class="form-control"
              v-model="usuario"
            />
          </div>
          <label for="password" class="form-label mt-3">Senha:</label>
          <div class="col-sm-12">
            <input
              type="password"
              id="userPassword"
              placeholder="Sua senha"
              class="form-control"
              v-model="senha"
            />
          </div>
        </div>
        <div v-if="usuario && senha">
          <button type="submit" class="" @click="login">ENTRAR</button>
        </div>
        <div v-else>
          <button class="btn-sata efeitoBtn btn-three" @click="alerte= true">ENTRAR</button>
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
