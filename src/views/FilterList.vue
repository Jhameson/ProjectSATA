<template>
  <Menu />

  <!-- MINHA ÁREA -->
  <RefazerPesquisa />
  <div class="container sombra p-3 mb-5 bg-body rounded">
    <div class="row d-flex justify-content-evenly">
      <div v-for="card in cards" :key="card.id">
        <Card :nome="card.nome" :contato="card.telefone1"/>
      </div>
    </div>
  </div>
</template>

<script>
import Menu from "../components/Menu.vue";
import Card from "../components/Card.vue";
import RefazerPesquisa from "../components/RefazerPesquisa.vue";
export default {
  name: "FilterList",
  data(){
     return{
       cards:[],
     }
  },
  //  mounted() {
  //   User.listar().then((result) => {
  //     this.posts = result.data;
  //   });
  // },
  components: {
    Menu,
    Card,
    RefazerPesquisa,
  },
};
</script>

<style>
* {
  font-family: "Roboto", sans-serif;
  box-sizing: border-box;
}
body {
  background: var(--background-color);
  color: var(--color-darker);
}
</style>
