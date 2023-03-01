import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    todos: [],
    editTodoClicked: false,
    indexEdit: 0,
  },
  getters: {},
  mutations: {
    ADD_TODO(state, updatedTodo) {
      state.todos.push(updatedTodo);
    },
    SAVE_TODO(state, save_todo) {
      state.todos = state.todos.map((todo, index) =>
        index === save_todo.index ? save_todo.todo : todo
      );
      state.editTodoClicked = false;
      state.indexEdit = 0;
    },
    CANCEL_TODO(state) {
      state.editTodoClicked = false;
      state.indexEdit = 0;
    },
    EDIT_TODO_CLICKED(state, index) {
      state.editTodoClicked = true;
      state.indexEdit = index;
    },
  },
  actions: {},
  modules: {},
});
