<template>
  <div id="app">
    <h1>TODO APP</h1>
    <button @click="searchList = true">Search Todo</button>
    <TodoSearch
      v-if="searchList"
      v-bind:searchList="searchList"
      v-bind:todos="todos"
      @show-todo="showTodo"
    />
    <TodoButton @add-todo="addTodo($event)" @show-list="showList" />
    <TodoList v-if="!this.searchList" v-bind:todos="todos" />
  </div>
</template>

<script>
import TodoList from "@/components/TodoList.vue";
import TodoButton from "@/components/TodoButton.vue";
import TodoSearch from "@/components/TodoSearch.vue";

export default {
  components: {
    TodoSearch,
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
      console.log(updatedTodo);
      console.log(this.todos);
      this.todos.push(updatedTodo);
    },
    showTodo() {
      this.searchList = true;
    },
    showList() {
      this.searchList = false;
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
