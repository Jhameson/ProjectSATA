<template>
  <Menu />

  <!-- MINHA ÁREA -->
  <RefazerPesquisa />
  <div class="container sombra p-3 mb-5 bg-body rounded">
    <div class="row d-flex justify-content-evenly">
      <div v-for="card in cards" :key="card.cidade">
        <div v-if="cidade == card.cidade && (serv1 == card.serv1 || serv2 == card.serv2 || serv3 == card.serv3)">
          <Card :nome="card.nome" :contato="card.telefone1" />
        </div>
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
  data() {
    return {
      cards: [],
      baseURI: "http://localhost:3000",
    };
  },
  mounted() {
    axios.get(this.baseURI + "/" + this.id).then((result) => {
      console.log(result);
      this.cards = result.data;
    });
  },
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
