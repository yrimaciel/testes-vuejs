<template>
  <div>
    <div class="container">
      <div class="row mt-5" v-show="vaga.length > 0">
        <h3>Você está vendo as vagas de: {{ vaga }}</h3>
      </div>
    </div>
    <SectionBanner />
    <SectionContent />

    <div class="container div row contact mt-5">
      <div class="col-6" v-show="name.length > 0">
        <h2>Nome: {{ name }}</h2>
      </div>
      <div class="col-6">
        <Input v-model="name" />
      </div>
    </div>
  </div>
</template>

<script>
import SectionBanner from "./SectionBanner";
import SectionContent from "./SectionContent";
import Input from "./Input";
export default {
  components: {
    SectionBanner,
    SectionContent,
    Input,
  },
  data() {
    return {
      name: "",
    };
  },
  props: {
    vaga: String,
  },
};
</script>

<style scoped></style>
