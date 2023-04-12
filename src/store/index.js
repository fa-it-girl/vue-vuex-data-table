import { createStore } from 'vuex'

export default createStore({
  getters: {
    getUserData: state => {
      return state.data
    },
    getExtendedData: state => {
      return state.itemDetails
    },
  },
  mutations: {
    SET_DATA(state, data) {
      state.data = data;
      state.dataError = null;
    },

    SET_DATA_ERROR(state, error) {
      state.data = null;
      state.dataError = error;
    },

    SET_ITEM_DETAIL(state, itemDetails) {
      state.itemDetails = itemDetails;
      state.itemDetailsError = null;
    },
    SET_ITEM_DETAIL_ERROR(state, error) {
      state.itemDetails = null;
      state.itemDetailsError = error;
    },
  },
  actions: {
    async getData({ commit }) {
      try {
        const response = await fetch(
          "https://tx4jcz8vkh.eu-west-1.awsapprunner.com/api/data"
        );
        const data = await response.json();
        if (!response || response.status !== 200) {
          throw new Error();
        }

        commit("SET_DATA", data);
      } catch (error) {
        commit(
          "SET_DATA_ERROR",
          "Could not get data from server."
        );
      }
    },
    async getDetail({ commit }, id) {
      try {
        const response = await fetch(`https://tx4jcz8vkh.eu-west-1.awsapprunner.com/api/data/${id}`);
        if (!response || response.status !== 200) {
          throw new Error();
        }
        const data = await response.json();
        commit("SET_ITEM_DETAIL", data);
      } catch (error) {
        console.error(error);
        commit(
          "SET_ITEM_DETAIL_ERROR",
          "Get item detail failed."
        );
      }
    },
  },
})
