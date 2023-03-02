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
    <TodoList :todos="todosFinal" />
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
  },
  computed: {
    todos() {
      return this.$store.state.todos;
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
