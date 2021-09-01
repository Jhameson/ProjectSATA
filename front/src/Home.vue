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
  --primary-color: #5b3158;
  --primary-color-darker: #431340;

  --secondary-color: #181935;
  --secondary-color-darker: #0f1027;

  --btn-one: #f9f871;
  --btn-two: #FDB35D;
  --btn-three: #A34C66;
  --btn-four: #40B0AF;
 /*CORES PARA FONTES*/
  --font-light: #f9f6fd;
  /*COR DA MAIN*/
  --font-dark: #080817;
}
.btn-sata {
  border: none;
  padding: 9px;
  border-radius: 5px;
  font-weight: bold;
}

.btn-one{
  background: var(--btn-one);
}
.btn-two{
   background: var(--btn-two);
}
.btn-three{
   background: var(--btn-three);
}
.btn-four{
   background: var(--btn-four);
}

.mycontainer {
  background: #212122;
  color: #fff;
 
  
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
  box-shadow: 0px 3px 7px 0px #1b1b1d;
}
.efeitoBtn:hover {
  transform: scale(1.03);
  filter: brightness(85%);
}

.grid {
  background: #ffd1c2;
  border: 2px solid #f16234;
}
</style>
