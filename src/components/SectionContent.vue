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
export default {
  components: {
    SectionIndividual,
  },
  data() {
    return {
      content: [],
    };
  },
  created() {
    this.content = [
      {
        id: 1,
        img: "outs.jpg",
        title: "OutSourcing",
        post: `"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus earum
        rerum quidem nihil accusantium sint odio sit iusto temporibus ipsam. Ea
        molestiae reprehenderit animi officia atque reiciendis ullam excepturi
        totam!kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk
        kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk
        kkkkkkkkkkkkkkkkkkkkkk"`,
        date: "2020-07-01",
      },
      {
        id: 2,
        img: "sicredi.jpg",
        title: "Sicredi abre vagas",
        post: `"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus earum
        rerum quidem nihil accusantium sint odio sit iusto temporibus ipsam. Ea
        molestiae reprehenderit animi officia atque reiciendis ullam excepturi
        totam!kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk
        kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk
        kkkkkkkkkkkkkkkkkkkkkk"`,
        date: "2020-08-04",
      },
      {
        id: 3,
        img: "saq.jpg",
        title:
          "Saque & Pague projeta mercado de T.I em alta no segundo semestre",
        post: `"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus earum
        rerum quidem nihil accusantium sint odio sit iusto temporibus ipsam. Ea
        molestiae reprehenderit animi officia atque reiciendis ullam excepturi
        totam!kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk
        kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk
        kkkkkkkkkkkkkkkkkkkkkk"`,
        date: "2020-07-01",
      },
    ];
  },
};
</script>

<style scoped>
section {
  padding: 50px 0;
  margin-top: 25px;
  background-color: orangered;
}
</style>
