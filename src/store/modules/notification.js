// store/modules/notification.js

const state = {
    showNotification: false,
};

const mutations = {
    SET_NOTIFICATION(state, value) {
        state.showNotification = value;
    },
};

const actions = {
    setNotification({ commit }, value) {
        commit('SET_NOTIFICATION', value);
    },
};

export default {
    state,
    mutations,
    actions,
};
