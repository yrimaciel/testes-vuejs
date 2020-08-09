<template>
  <div>
    <div class="container">
      <div class="row mt-5" v-show="vaga.length > 0">
        <h3>Você está vendo as vagas de: {{ vaga }}</h3>
      </div>
    </div>

    <component v-bind:is="currentComponent"></component>

    <div class="container div row contact mt-5">
      <div class="col-6" v-show="name.length > 0">
        <h2>Nome: {{ name }}</h2>
      </div>
      <div class="col-6">
        <Input />
      </div>
    </div>
  </div>
</template>

<script>
import SectionBanner from "./SectionBanner";
import Input from "./Input";
import { mapGetters } from 'vuex'


export default {
  components: {
    SectionBanner,
    SectionContent: () => import("./SectionContent"),
    SectionIndividualContent: () => import("./SectionIndividualContent"),
    Input,
  },
  props: {
    currentComponent: String,
  },
  computed: {
    ...mapGetters({
      vaga: 'getVaga',
      name: 'getClientName'
    })
    // ...mapState(['vaga']),
    // ...mapState({
    //   name: 'clientName'
    // })
  }
};
</script>

<style scoped></style>
