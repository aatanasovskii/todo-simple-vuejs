<template>
  <div id="app">
    <nav>
      <h1>TODO APP</h1>
      <label>Search Todo: </label>
      <input id="searchTodos" v-model="searchTodos" type="search" />
      <input type="submit" value="Submit" @click="todoSearchList" />
      <TodoSearch
        v-if="this.searchList"
        v-bind:todos="todos"
        v-bind:searchTodos="this.searchTodos"
      />
      <TodoButton @add-todo-item="addTodoItem" />
      <TodoList v-if="!this.searchList" v-bind:todos="todos" />
    </nav>
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
      todos: {},
      searchList: false,
      searchTodos: "",
    };
  },
  methods: {
    todoSearchList() {
      this.searchList = true;
    },
    addTodoItem(data) {
      this.todos.push(data);
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
