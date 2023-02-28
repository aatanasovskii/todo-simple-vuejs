import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    todos: [],
  },
  getters: {
    todos: (state) => {
      return state.todos;
    },
  },
  mutations: {
    ADD_TODO(state, updatedTodo) {
      state.todos.push(updatedTodo);
    },
    SAVE_EDIT_TODO(state, editedTodo, editIndex) {
      state.todos = state.todos.map((todo, index) =>
        index === editIndex ? editedTodo : todo
      );
    },
  },
  actions: {},
  modules: {},
});
