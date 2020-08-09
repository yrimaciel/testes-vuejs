<template>
  <input
    type="text"
    :value="clientName"
    @keyup="changeClientName($event.target.value)"
    class="form-control"
    placeholder="Digite seu nome"
  />
</template>

<script>
import { mapGetters, mapActions } from 'vuex' 
export default {
  computed: mapGetters({
    clientName: 'getClientName'
  }),
  methods: mapActions(['changeClientName'])
};
</script>

<style scoped></style>
