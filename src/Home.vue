<template>
  <router-view/>
</template>

<script>
import Menu from "./components/Menu.vue";

export default {
  name: "App",
  components: {
    Menu,
  },
};
</script>

<style>
:root {
    --primary-color: #8b45e7;
    --primary-color-darker: #652ead;
    --secondary-color: #0b9ed8;
    --secondary-color-darker: #097ba8;
    --background-color: #dfeef6;
    /* --background-color: #201f1e; */
    /*CORES PARA FONTES*/
    --color-light: #f9f6fd;
    /*COR DA MAIN*/
    --color-darker: #0c001f;
}

* {
    font-family: 'Roboto', sans-serif;
    box-sizing: border-box;
}

body {
    background: var(--background-color);
    color: var(--color-darker);
}


</style>
