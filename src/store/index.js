// store

import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tasks: [],
  },
  getters: {
  },
  mutations: {
    addTask(state, { description, dueDate }) {
      state.tasks.push({
        description: description,
        dueDate: dueDate,
        completed: false
      });
    },
    CLEAR_TASKS(state) {
      state.tasks = []; // Reset state:tasks to initial render state
    },
    EDIT_TASK(state, { index, task }) {
      state.tasks[index] = task;
    },
    UPDATE_TASK(state, { index, task }) {
      state.tasks[index] = task;
    },
    UPDATE_TASK_COMPLETED(state, { index, completed }) {
      state.tasks[index].completed = completed;
    },
    DELETE_TASK(state, { index, task }) {
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
    startEditing({ commit }) {
      commit("EDIT_TASK");
    },
    updateTask({ commit }) {
      commit("UPDATE_TASK");
    },
    deleteTask({ commit }, task) {
      commit("DELETE_TASK"), task;
    },
  },
  modules: {
  }
})