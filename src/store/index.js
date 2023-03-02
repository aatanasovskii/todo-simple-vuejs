import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    todos: [],
    numberTodos: 0,
    editTodoClicked: false,
    indexEdit: 0,
    doneTodos: [],
    numberDoneTodos: 0,
  },
  getters: {},
  mutations: {
    ADD_TODO(state, updatedTodo) {
      state.todos.push(updatedTodo);
      state.numberTodos++;
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
    DONE_TODO(state, indexDone) {
      state.numberDoneTodos++;
      state.numberTodos--;
      state.doneTodos.push(
        state.todos.find((todo, index) => index === indexDone)
      );
      state.todos.splice(indexDone, 1);
    },
  },
  actions: {},
  modules: {},
});
