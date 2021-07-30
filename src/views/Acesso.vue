<template>
  <Menu />
  <div class="col-4 m-auto sombra p-4 bg-body rounded mt-5">
  <SATA/>
    <div class="row flex-column">
      <div class="text-center">
        <h3>Opções de acesso</h3>
      </div>
      <div class="mt-3 acesso">
        <span>Já possui uma conta?</span>
        <a class="btn color-secondary efeitoBtn">
          <router-link to="/login">Fazer Login</router-link>
        </a>
      </div>
      <div class="mt-3 acesso">
        <span>Ainda não possui cadastro?</span>
        <a class="btn color-primary efeitoBtn">
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

<style scoped>

.row a{
    text-decoration: none;
    color: #fff;
}
.color-primary {
  background: var(--primary-color);
}
.color-secondary {
  background: var(--secondary-color);
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
