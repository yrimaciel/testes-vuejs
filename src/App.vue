<template>
  <div id="app">
    <Header @select-vaga="changeVaga" @change-component="changeComponent" />
    <Section v-bind:current-component="currentSectionComponent" />
    <Footer />
  </div>
</template>

<script>
import Header from "./components/Header";
import Footer from "./components/Footer";
import Section from "./components/Section";
import { mapActions } from 'vuex'
export default {
  name: "App",
  components: {
    Header,
    Section,
    Footer,
  },
  data() {
    return {
      currentSectionComponent: "",
    };
  },
  methods: {
    ...mapActions([
      'changeVaga'
    ]),
    // ...mapMutations({
    //   changeVaga: 'setVaga'
    // }),
    // changeVaga(value) {
    //   // this.$store.commit('setVaga', value);
    //   this.$store.dispatch('changeVaga', value);
    //   // this.vaga = value;
    // },
    changeComponent(value) {
      let component;

      switch (value) {
        case "home":
          component = "SectionBanner";
          break;
        case "vagas":
          component = "SectionContent";
          break;
        case "empresas":
          component = "SectionIndividualContent";
          break;
        default:
          console.error("blabla");
      }

      this.currentSectionComponent = component;
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
