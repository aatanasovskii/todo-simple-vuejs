<template>
  <div id="app">
    <h1>TODO APP</h1>
    <TodoButton @add-todo="addTodo($event)" @show-list="showList" />
    <label>Search Todo: </label>
    <input id="searchTodos" v-model="searchTodos" type="search" />
    <!--    <input type="submit" value="Submit" @click.prevent="todoSearchList" />-->
    <TodoList :todos="todosFinal" />
    <button @click="showList">Show the whole list</button>
  </div>
</template>

<script>
import TodoList from "@/components/TodoList.vue";
import TodoButton from "@/components/TodoButton.vue";

export default {
  components: {
    TodoButton,
    TodoList,
  },
  data() {
    return {
      todos: [],
      searchList: false,
      searchTodos: "",
    };
  },
  methods: {
    addTodo(updatedTodo) {
      this.todos.push(updatedTodo);
    },
    showList() {
      this.searchList = false;
      this.searchTodos = "";
    },
    // todoSearchList() {
    //   this.searchList = true;
    // this.todosSearch = this.todos.filter(
    //   (todo) => todo.title === this.searchTodos
    // );
    // if (this.todosSearch.length != 0) {
    //   this.searchTodos = "";
    // }
    // },
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
