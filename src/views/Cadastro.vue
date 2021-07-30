<template>
  <Menu />
  <div class="container bg-body sombra p-5 mt-5 mb-5">
    <div class="col-12 text-center">
      <h2>Cadastro trabalhadores(as) autônomos(as)</h2>
    </div>
    <div class="col-12">
      <form class="row g-3 mt-5">
        <div class="col-12 infor">
          <label for="name" class="form-label ">Informações pessoais</label>
        </div>
        <div class="col-md-8">
          <label for="name" class="form-label">Nome Completo</label>
          <input type="text" class="form-control" id="name" required />
        </div>
        <div class="col-md-2">
          <label for="name" class="form-label">Data de Nascimento</label>
          <input type="date" class="form-control" id="name" required />
        </div>
        <div class="col-md-2">
          <label for="name" class="form-label">Sexo</label>
          <select id="inputState" class="form-select">
            <option selected>Selecione...</option>
            <option>Masculino</option>
            <option>Feminino</option>
            <option>Outros</option>
          </select>
        </div>
        <div class="col-12 infor">
          <label for="name" class="form-label ">Informações para contato</label>
        </div>
        <div class="col-md-6">
          <label for="inputEmail4" class="form-label">E-mail</label>
          <input type="email" class="form-control" id="inputEmail4"  placeholder="Ex.: fulano.sata@gmail.com" required />
        </div>

        <div class="col-3">
          <label for="inputAddress" class="form-label">Telefone para contato 01:</label>
          <input
            type="text"
            class="form-control pl-0"
            id="inputAddress"
            placeholder="(99) 9 9999-9999"
            required
          />
        </div>
        <div class="col-3">
          <label for="inputAddress" class="form-label">Telefone para contato 02:</label>
          <input
            type="text"
            class="form-control"
            id="inputAddress"
            placeholder="(99) 9 9999-9999"
            required
          />
        </div>
        <div class="col-12 infor">
          <label for="name" class="form-label ">Local de Atentimento</label>
        </div>
        <div class="col-md-6">
          <label for="inputCity" class="form-label">Cidade</label>
          <input type="text" class="form-control" id="inputCity" />
        </div>
        <div class="col-md-4">
          <label for="inputState" class="form-label">Estado</label>
          <select id="inputState" class="form-select">
            <option selected>Escolha...</option>
            <option>Ceará</option>
          </select>
        </div>
        <div class="col-md-2">
          <label for="inputZip" class="form-label">CEP</label>
          <input type="text" class="form-control" id="inputZip" />
        </div>
        <div class="col-12">
          <div class="form-check">
            <input class="form-check-input" type="checkbox" id="gridCheck" />
            <label class="form-check-label" for="gridCheck">
              Faço atendimentos em cidades vizinhas
            </label>
          </div>
        </div>
        <div class="col-12 infor">
          <label for="name" class="form-label ">Informações de Serviço</label>
        </div>
        <div class="col-md-4">
          <label for="inputCity" class="form-label">Serviço 01:</label>
          <select id="inputState" class="form-select">
            <option selected>Selecione...</option>
            
          </select>
        </div>
        <div class="col-md-4">
          <label for="inputCity" class="form-label">Serviço 02:</label>
          <select id="inputState" class="form-select">
            <option selected>Selecione...</option>
            
          </select>
        </div>
        <div class="col-md-4">
          <label for="inputCity" class="form-label">Serviço 03:</label>
         <select id="inputState" class="form-select">
            <option selected>Selecione...</option>
            
          </select>
        </div>
        <div class="col-12 mt-5">
          <button type="submit" class="btn btn-primary">CADASTRAR</button>
        </div>
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
.infor{
     font-weight: bold;
     padding-top: 30px;
     border-bottom: 1px  solid #d4d4d4;
}
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
