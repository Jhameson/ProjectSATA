<template>
  <Menu />
  <SATA/>
  <div class="col-4 m-auto sombra p-4 bg-body rounded mt-5">
    <div class="row flex-column">
      <div class="text-center">
        <h2>Opções de acesso</h2>
      </div>
      <div class="mt-3 acesso">
        <span>Já possui uma conta?</span>
        <a class="btn color-secondary efeitoBtn">
          <router-link to="/login">Fazer Login</router-link>
        </a>
      </div>
      <div class="mt-3 acesso">
        <span>Ainda não possui cadastro?</span>
        <a class="btn color-secondary efeitoBtn">
          <router-link to="/cadastro">Cadastrar-se</router-link>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import Menu from "../components/Menu.vue";
import SATA from "../components/SATA.vue";

export default {
  components: {
    Menu,
    SATA,
  },
};
</script>

<style>
h1 {
  font-weight: 900;
}



.efeitoBtn:hover {
  transform: scale(1.03);
}

.logotipo {
  border-radius: 20px;
}

.alerta {
  color: red;
}

/* pagina de acesso */
.acesso {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto;
}
</style>
