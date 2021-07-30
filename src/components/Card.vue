<template>
  <div class="col-md-3 m-2">
    <div class="card" style="width: 18rem">
      <img
        class="imagemT img-fluid rounded-circle"
        src="../assets/img/homemBranco.jpg"
        alt="Imagem de capa do card"
      />
      <div class="card-body">
        <h5 class="card-title">João Lucas</h5>
        <h6 class="card-text">Horarios Disponiveis:</h6>
        <p>Seg a Seg- Tempo Integral</p>
        <p>R$ 25,00/hr</p>
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

<script></script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
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
