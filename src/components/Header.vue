<template>
  <header>
    <div class="container">
      <nav class="navbar navbar-expand">
        <a href="#" class="link navbar-brand mr-auto">
          <img
            src="../assets/logo-southsystem.png"
            alt="south"
            class="img d-inline-block align-top"
            id="logo"
          />
        </a>

        <div class="links mr-2">
          <a href="#" @click.prevent="$emit('change-component', 'home')">Início</a>
          <a href="#" @click.prevent="$emit('change-component', 'vagas')">Vagas</a>
          <a href="#" @click.prevent="$emit('change-component', 'empresas')">Parceiros</a>

          <select
            name="vaga"
            id="selectVaga"
            class="form-control"
            @change="$emit('select-vaga', $event.target.value)"
          >
            <option value>Selecione uma parceira</option>
            <option value="Getnet">Getnet</option>
            <option value="Agibank">Agibank</option>
            <option value="Sicredi">Sicredi</option>
            <option value="Saque & Pague">Saque & Pague</option>
          </select>
        </div>
      </nav>
    </div>
  </header>
</template>

<script>
export default {};
</script>

<style scoped>
header {
  background-color: #eee;
}
#logo {
  width: 150px;
  height: 100%;
}
.links {
  display: inline-flex;
}
.links a {
  color: orangered;
  padding: 15px;
  border-radius: 5px;
}
.links a:focus,
.links a:hover {
  color: #eee;
  outline: 0 !important;
  text-decoration: none;
  background-color: orangered;
}

.form-control {
  margin: 7px;
}
</style>
