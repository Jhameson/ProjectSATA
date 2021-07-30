<template>
  <Menu />
  <RefazerPesquisa/>
  <div class="container shadow-sm p-3 mb-5 bg-body rounded">
        <!-- MINHA ÁREA -->
        <div class="row">
            <div class="rol-12">
                <h4>Serviço: Faxineira</h4>
                <span>Antonia Fulana de Tal</span>
            </div>
        </div>
        <div class="row mt-5 ">
            <div class="col-md-3  d-flex">
                <img src="https://fakeimg.pl/200/" class="img-fluid rounded-circle margem-auto">
            </div>
            <div class="col-8 ms-5">
                <label class="col-md-6 col-form-label"><strong>Nome:</strong> Antonia Fulana de Tal</label>
                <label class="col-md-4 col-form-label"><strong>Serviço:</strong> Alguma Coisa</label>
                <label class="col-md-6 col-form-label"> <strong>Disponibilidade</strong> </label>
                <label class="col-md-6 col-form-label"><strong>Dias:</strong> SEG / TER / QUA / QUIN / DOM</label>
                <label class="col-md-4 col-form-label"><strong>Horário:</strong> 8:00hrs as 20:00hrs</label>
                <label class="col-md-6 col-form-label"><strong>Descrição:</strong></label>
                <label class="col-md-8 col-form-label">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Impedit minima aliquid exercitationem atque architecto neque accusamus ducimus natus sed
                    accusantium iure totam fugit, sint, ipsa provident omnis aliquam aspernatur assumenda!</label>
            </div>
        </div>
        <div class="row d-flex justify-content-center mt-5">
           
            <div class="col-2  d-flex justify-content-center">
                <a type="button" class="btn btn-success" href="https://api.whatsapp.com/send?phone=55123456789">WhatsApp</a>
            </div>
        </div>

    </div>
</template>

<script>
import Menu from "../components/Menu.vue";
import RefazerPesquisa from "../components/RefazerPesquisa.vue";

export default {
  components: {
    Menu,
    RefazerPesquisa,
  },
};
</script>

<style scoped>
body {
    background: #dfeef6;
    color: var(--color-darker);
}
* {
    font-family: "Roboto", sans-serif;
    box-sizing: border-box;
  }
.color-secondary {
    color: #fff;
  background: var(--secondary-color);
}


.efeitoBtn:hover {
  transform: scale(1.03);
}
 .infor{
     font-weight: bold;
     padding-top: 30px;
     border-bottom: 1px  solid #d4d4d4;
}
</style>
