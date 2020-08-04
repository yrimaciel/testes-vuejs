<template>
  <div class="container">
    <div class="row">
      <div class="col-5 text-center vagas">
        <h2>#VEMPRASOUTH</h2>
      </div>
      <div class="col-5 offset-2 text-center vagas">
        <h2>#VEMPRASOUTH</h2>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
section {
  margin-top: 25px;
}

.container .row {
  margin-top: 45px;
  height: 300px;
}

.container .row .col-5:first-child {
  background-color: orangered;
  background-image: url("../assets/get.png");
  background-repeat: no-repeat;
  background-size: 100%;
  border-radius: 50px;
}

.container .row .col-5:nth-child(2) {
  background-image: url("../assets/agi.png");
  background-size: 100%;
  border-radius: 50px;
}

h2 {
  margin-top: 20px;
  border-radius: 25px;
  color: orangered;
  background: rgba(0, 0, 0, 0.3);
  padding: 10px;
}

.vagas {
  cursor: pointer;
}
</style>
