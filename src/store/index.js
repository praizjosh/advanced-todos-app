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
      Vue.set(state.tasks, state.tasks.length, {
        description: description,
        dueDate: dueDate,
        completed: false,
      });
    },
    CLEAR_TASKS(state) {
      state.tasks = [];
    },
    EDIT_TASK(state, { index, task }) {
      Vue.set(state.tasks, index, task);
    },
    UPDATE_TASK(state, { index, task }) {
      Vue.set(state.tasks, index, task);
    },
    TOGGLE_TASK_COMPLETION(state, index) {
      if (state.tasks[index]) {
        Vue.set(state.tasks[index], "completed", !state.tasks[index].completed);
      } else {
        console.error('Task not found at index:', index);
      }
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
    toggleTaskCompletion({ commit }, index) {
      commit('TOGGLE_TASK_COMPLETION', index);
    },
    deleteTask({ commit }, index) {
      commit("DELETE_TASK", index);
    },

  },
  modules: {
  }
})
