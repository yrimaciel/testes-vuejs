export default {
  state: {
    vaga: 'Getnet',
  },
  getters: {
    getVaga(state) {
      return state.vaga;
    }
  },
  mutations: {
    setVaga(state, newVaga) {
      state.vaga = newVaga;
    }
  },
  actions: {
    changeVaga(context, value) {
      context.commit('setVaga', value);
    }
  }
}