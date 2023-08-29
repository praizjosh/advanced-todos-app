// store/index.js

import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tasks: [],
  },
  mutations: {
    addTask(state, { description, dueDate }) {
      state.tasks.push({
        description: description,
        dueDate: dueDate,
        completed: false,
      });
    },
    CLEAR_TASKS(state) {
      state.tasks = []; // Reset state:tasks to initial render state
    },
    EDIT_TASK(state, { index, task }) {
      state.tasks[index] = task;
    },
    UPDATE_TASK(state, { index, task }) {
      Vue.set(state.tasks, index, task);
    },
    DELETE_TASK(state, index) {
      state.tasks.splice(index, 1);
    },
  },
  actions: {
    addTask({ commit }, { description, dueDate }) {
      commit('addTask', { description, dueDate });
    },
    clearTasks({ commit }) {
      commit("CLEAR_TASKS");
    },
    startEditing({ commit }, { index, task }) {
      commit("EDIT_TASK", { index, task });
    },
    updateTask({ commit }, { index, task }) {
      commit("UPDATE_TASK", { index, task });
    },
    deleteTask({ commit }, index) {
      commit("DELETE_TASK", index);
    },

  },
  modules: {
  }
})
