<template>
  <div id="app">
    <Header @select-vaga="changeVaga" />
    <Section v-bind:vaga="vaga" />
    <Footer />
  </div>
</template>

<script>
import Header from "./components/Header";
import Footer from "./components/Footer";
import Section from "./components/Section";
export default {
  name: "App",
  components: {
    Header,
    Section,
    Footer,
  },
  data() {
    return {
      vaga: "",
    };
  },
  methods: {
    changeVaga(value) {
      this.vaga = value;
    },
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Rajdhani&display=swap");

* {
  font-family: "Rajdhan", sans-serif;
}
</style>
