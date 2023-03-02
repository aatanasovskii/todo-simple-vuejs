<template>
  <div>
    <h1>TODO APP</h1>
    <button @click="showForm">Add New Todo Item</button>
    <TodoButton
      v-if="formVisible"
      @add-todo="addTodo($event)"
      @show-list="showList"
      @form-visible="visibleForm"
    />
    <br />
    <label>Search Todo: </label>
    <input id="searchTodos" v-model="searchTodos" type="search" />
    <TodoList @edit-todo="editTodo" :todos="todosFinal" />
    <button @click="showList">Show the whole list</button>
  </div>
</template>

<script>
import TodoList from "./TodoList.vue";
import TodoButton from "./TodoButton.vue";
export default {
  components: {
    TodoButton,
    TodoList,
  },
  data() {
    return {
      searchList: false,
      searchTodos: "",
      formVisible: false,
      editTodoClicked: false,
      editIndex: 0,
      editTodos: {},
    };
  },
  methods: {
    addTodo(updatedTodo) {
      this.$store.commit("ADD_TODO", updatedTodo);
    },
    showForm() {
      this.formVisible = true;
    },
    visibleForm() {
      this.formVisible = false;
    },
    showList() {
      this.searchList = false;
      this.searchTodos = "";
      this.formVisible = false;
    },
    editTodo(indexTodo) {
      this.editIndex = indexTodo;
      this.editTodoClicked = true;
      this.editTodos = this.todos[indexTodo];
      console.log(this.editTodos);
    },
    saveEditedTodo(editedTodo) {
      let save_todo = { todo: editedTodo, index: this.editIndex };
      this.$store.commit("SAVE_TODO", save_todo);
      // this.$store.state.todos = this.$store.state.todos.map((todo, index) =>
      //   index === this.editIndex ? editedTodo : todo
      // );
      // console.log(this.$store.state.todos);
      this.editIndex = 0;
      this.editTodos = [];
      this.editTodoClicked = false;
    },
    cancelEditing() {
      this.editIndex = 0;
      this.editTodos = [];
      this.editTodoClicked = false;
    },
  },
  computed: {
    todos() {
      return this.$store.getters.todos;
    },
    todosFinal() {
      return this.searchTodos.length === 0
        ? this.$store.state.todos
        : this.$store.state.todos.filter(
            (todo) => todo.title === this.searchTodos
          );
    },
  },
};
</script>

<style></style>
