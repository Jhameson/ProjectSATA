<template>
  <router-view />
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
body {
    background: #dfeef6;
    color: var(--color-darker);
}
* {
    font-family: "Roboto", sans-serif;
    box-sizing: border-box;
  }
.color-primary {
  background: var(--primary-color);
}

.color-secondary {
  background: var(--secondary-color);
}

.color-light {
  color: var(--color-light);
}




.sombra {
  box-shadow: 0px 2px 7px 0px rgba(63, 63, 63, 0.51);
}
.efeitoBtn:hover {
  transform: scale(1.03);
}

.grid {
  background: #ffd1c2;
  border: 2px solid #f16234;
}
</style>
