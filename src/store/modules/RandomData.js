const state = () => ({
  dataRandom: {
    num50: 0,
    num20: 0,
    num10: 0,
    userNum: 0,
  },
  dataPopup: {
    isShow: false,
    value: "",
    id: "",
    text:'',
    path:''
  },
});
// getters
const getters = {
  getShowPopup: (state) => {
    return state.dataPopup;
  },
};

// actions
const actions = {};

// mutations
const mutations = {
  setRandomData(state, newDataRandom) {
    state.dataRandom = JSON.parse(JSON.stringify(newDataRandom));
  },
  setDataPopup(state, data) {
    state.dataPopup = JSON.parse(JSON.stringify(data));
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
