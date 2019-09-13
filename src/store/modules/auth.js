const state = {
  isLogged: false,
};

const getters = {};

const actions = {
  signIn({ commit }, payload) {
    return commit('setLogin', true);
  },
};

const mutations = {
  setLogin(_state, isLogged) {
    _state.isLogged = isLogged;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
