<template>
  <div class="row">
    <div class="col-3">
      <img :src="require('../assets/' + this.img)" alt="q" />
    </div>

    <div class="col-9">
      <h2>{{ title | truncate(100) }}</h2>

      <p>{{ post | truncate(200) }}</p>

      <p>{{ formatDate(date) }}</p>
    </div>
  </div>
</template>

<script>
import Utils from "../mixins/UtilsMixins";
export default {
  props: {
    img: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    post: {
      type: String,
      required: true,
    },
    date: {
      type: String,
    },
  },
  mixins: [Utils],
};
</script>

<style scoped>
.row {
  margin-bottom: 30px;
}

img {
  width: 100%;
  border-radius: 25px;
}

h2 {
  cursor: pointer;
  color: #fff;
}
</style>
