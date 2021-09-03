<template>
  <Menu />
  <div class="container p-3 mb-5 rounded mt-5 sombra mycontainer">
    <h2>Sobre</h2>
    O SATA permitirá que os trabalhadores autônomos e os clientes se comuniquem,
    os clientes irão acessar a página web e os serviços estarão disponíveis por
    tópicos/seções e irão solicitar o serviço escolhido e serão redirecionados
    para um chat com o trabalhador disponível daquela área. A escolha dos
    profissionais será feita pelo cliente, após escolher o tipo de serviço será
    redirecionado para um local onde estarão todos os profissionais disponíveis,
    assim como seus dados e avaliações. Originalmente o sistema cadastrará
    apenas os trabalhadores autônomos, enquanto os clientes não precisam de
    cadastro. Após escolher o profissional que desejar o cliente será
    redirecionado a um chat de aplicativo externo ao SATA, que será ele o
    Whatsapp onde o cliente e o trabalhador autônomo tratarão de todos os
    assuntos referente a solicitação de serviços (pagamento, agendamento e
    cancelamento).
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
</style>
