<template>
  <header>
    <nav class="navbar navbar-expand-lg navbar-dark degrade-color sombra">
      <div class="container p-0">
        <a class="navbar-brand d-flex align-items-center" href="#">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-briefcase"
            viewBox="0 0 16 16"
          >
            <path
              d="M6.5 1A1.5 1.5 0 0 0 5 2.5V3H1.5A1.5 1.5 0 0 0 0 4.5v8A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-8A1.5 1.5 0 0 0 14.5 3H11v-.5A1.5 1.5 0 0 0 9.5 1h-3zm0 1h3a.5.5 0 0 1 .5.5V3H6v-.5a.5.5 0 0 1 .5-.5zm1.886 6.914L15 7.151V12.5a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5V7.15l6.614 1.764a1.5 1.5 0 0 0 .772 0zM1.5 4h13a.5.5 0 0 1 .5.5v1.616L8.129 7.948a.5.5 0 0 1-.258 0L1 6.116V4.5a.5.5 0 0 1 .5-.5z"
            />
          </svg>
          <strong class="ms-2">SATA</strong>
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item">
              <a class="nav-link active" href="pages/OpcoesdeAcesso/index.html"
                >Acessar</a
              >
            </li>
            <li class="nav-item">
              <a class="nav-link active" href="#">Sobre</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: "Menu",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
h1 {
  font-weight: 900;
}

a {
  text-decoration: none;
}

a:hover {
  color: var(--color-light);
}

.grid {
  background: #ffd1c2;
  border: 2px solid #f16234;
}

.margem-auto {
  margin: auto;
}

.sombra {
  box-shadow: 0px 2px 7px 0px rgba(63, 63, 63, 0.51);
}

.degrade-color {
  background-image: linear-gradient(
    to right,
    var(--primary-color),
    var(--secondary-color)
  );
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
