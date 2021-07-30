<template>
  <Menu />
    <div class="col-4 m-auto sombra p-4  bg-body rounded mt-5">
        <div class="row  flex-column">
            <div class="col-12 text-center">
                <h2>Utilize suas credenciais</h2>
            </div>
            <form action="">
                <div class="row mb-4 ">
                    <label for="user" class="form-label">Usuário:</label>
                    <div class="col-sm-12">
                        <input type="text" required id="userName" placeholder="Seu usuário" class="form-control">
                    </div>
                    <label for="password" class="form-label mt-3">Senha:</label>
                    <div class="col-sm-12">
                        <input type="password" required id="userPassword" placeholder="Sua senha" class="form-control">
                    </div>
                </div>
                <a type="submit" class="btn btn-primary " onClick="login(event)" href="">ENTRAR</a>
            </form>
        </div>

    </div>
    
</template>

<script>
import Menu from "../components/Menu.vue";

export default {
  components: {
    Menu,
  },
};
</script>

<style>

body {
    background: var(--background-color);
    color: var(--color-darker);
}
a {
  text-decoration: none;
}

a:hover {
  color: var(--color-light);
}


.margem-auto {
  margin: auto;
}
.color-light {
  color: var(--color-light);
}

.efeitoBtn:hover {
  transform: scale(1.03);
}

</style>
