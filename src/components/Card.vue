<template>
  <div class="col-md-3 m-2">
    <div class="card" style="width: 18rem">
      <img
        class="imagemT img-fluid rounded-circle"
        src="../assets/img/homemBranco.jpg"
        alt="Imagem de capa do card"
      />
      <div class="card-body">
        <h5 class="card-title">Autônomo: {{ nome }}</h5>
        <h6 class="card-text">Contato: {{ telefone1 }}</h6>
        <div class="d-flex justify-content-center">
          <router-link to="/perfil">
            <a href="../Perfil/index.html" class="btn color-secondary efeitoBtn"
              >Exibir Perfil</a
            >
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default{
  data(){
  },
  props: {
    nome: String,
    email: String,
  },
}
</script>
<style >
.imagemT {
  width: 40%;
  margin: auto;
}
.fontSize {
  font-size: 20;
}
.color-secondary {
  background: var(--secondary-color);
}
</style>
