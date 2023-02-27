<template>
  <div id="app">
    <h1>TODO APP</h1>
    <TodoButton @add-todo="addTodo($event)" @show-list="showList" />
    <label>Search Todo: </label>
    <input id="searchTodos" v-model="searchTodos" type="search" />
    <input type="submit" value="Submit" @click="todoSearchList" />
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
      todosSearch: [],
      searchList: false,
      searchTodos: "",
      includeTodo: false,
    };
  },
  methods: {
    addTodo(updatedTodo) {
      console.log(updatedTodo);
      console.log(this.todos);
      this.todos.push(updatedTodo);
    },
    showList() {
      this.searchList = false;
    },
    todoSearchList() {
      this.searchList = true;
      this.todosSearch = [];
      this.todos.forEach((todo) => {
        if (todo.title === this.searchTodos) {
          console.log(todo);
          this.todosSearch.push(todo);
          this.includeTodo = true;
          this.searchTodos = "";
        } else {
          this.includeTodo = false;
        }
      });
    },
  },
  computed: {
    todosFinal() {
      return this.searchList ? this.todosSearch : this.todos;
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
