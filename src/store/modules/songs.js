const state = () => ({
    song:{
      url:'',
      isPlay:false,
    },
  });
  // getters
  const getters = {
    getSong: (state)=>{
      return state.song
    }
  };
  
  // actions
  const actions = {};
  
  // mutations
  const mutations = {
    setSong(state, data) {
      state.song = JSON.parse(JSON.stringify(data));
    },
  };
  
  export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations,
  };
  