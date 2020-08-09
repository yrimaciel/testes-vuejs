export default {
  state: {
    clientName: 'Yuri'
  },
  getters: {
    getClientName(state) {
      return state.clientName;
    }
  },
  mutations: {
    setClientName(state, newName) {
      state.clientName = newName;
    }
  },
  actions: {
    changeClientName(context, value) {
      context.commit('setClientName', value);
    }
  }
}