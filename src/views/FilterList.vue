<template>
  <Menu />

  <!-- MINHA ÁREA -->
  <RefazerPesquisa />
  <div class="container sombra p-3 mb-5 bg-body rounded">
    <div class="row d-flex justify-content-evenly">
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  </div>
</template>

<script>
import Menu from "../components/Menu.vue";
import Card from "../components/Card.vue";
import RefazerPesquisa from "../components/RefazerPesquisa.vue";
export default {
  name: "FilterList",
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
