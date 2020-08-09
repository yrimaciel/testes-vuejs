<template>
  <section>
    <div class="container">
      <SectionIndividual
        v-for="c in content"
        :key="c.id"
        :img="c.img"
        :title="c.title"
        :post="c.post"
      />
    </div>
  </section>
</template>

<script>
import SectionIndividual from "./SectionIndividualContent";
import { mapGetters } from 'vuex'
export default {
  components: {
    SectionIndividual,
  },
  computed: {
    ...mapGetters({
        content: 'getContent'
    })
  }
};
</script>

<style scoped>
section {
  padding: 50px 0;
  margin-top: 25px;
  background-color: orangered;
}
</style>
