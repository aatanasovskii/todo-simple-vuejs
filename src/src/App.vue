<template>
  <div id="app">
    <h1>TODO APP</h1>
    <button @click="showForm">Add New Todo Item</button>
    <TodoButton
      v-if="formVisible"
      @add-todo="addTodo($event)"
      @show-list="showList"
      @form-visible="visibleForm"
    />
    <label>Search Todo: </label>
    <input id="searchTodos" v-model="searchTodos" type="search" />
    <TodoList @edit-todo="editTodo" :todos="todosFinal" />
    <TodoEdit
      v-if="editTodoClicked"
      :todo="editTodos"
      @save-todo="saveEditedTodo($event)"
      @cancel="cancelEditing"
    />
    <button @click="showList">Show the whole list</button>
  </div>
</template>

<script>
import TodoList from "@/components/TodoList.vue";
import TodoButton from "@/components/TodoButton.vue";
import TodoEdit from "@/components/TodoEdit.vue";

export default {
  components: {
    TodoEdit,
    TodoButton,
    TodoList,
  },
  data() {
    return {
      todos: [],
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
      this.todos.push(updatedTodo);
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
    },
    editTodo(indexTodo) {
      this.editIndex = indexTodo;
      this.editTodoClicked = true;
      this.editTodos = this.todos[indexTodo];
      console.log(this.editTodos);
    },
    saveEditedTodo(editedTodo) {
      console.log(editedTodo);
      this.todos[this.editIndex] = editedTodo;
      console.log(this.todos);
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
    todosFinal() {
      return this.searchTodos.length === 0
        ? this.todos
        : this.todos.filter((todo) => todo.title === this.searchTodos);
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
