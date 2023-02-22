<template>
  <div id="app">
    <nav>
      <h1>TODO APP</h1>
      <label>Search Items:</label>
      <input
        id="searchTodos"
        v-model="searchTodos"
        type="search"
        v-on:keyup.enter="filterTodos"
      />
      <h4 v-if="searchList">{{ searchTodos.title }} is in your Todo List.</h4>
      <TodoButton @show-form="showForm" />
      <form v-if="formVisible" @submit.prevent="addTodo">
        <div>
          <label>Title: </label>
          <input type="text" id="title" v-model="title" required />
        </div>
        <div>
          <label>Description:</label>
          <textarea id="description" v-model="description" required></textarea>
        </div>
        <div>
          <label>Category:</label>
          <select id="category" v-model="category" required>
            <option value="Work">Work</option>
            <option value="Personal">Personal</option>
            <option value="Chores">Chores</option>
          </select>
        </div>
        <div>
          <label>Priority:</label>
          <select id="priority" v-model="priority" required>
            <option value="Urgent">Urgent</option>
            <option value="Normal">Normal</option>
            <option value="Low">Low</option>
          </select>
        </div>
        <button type="submit">Add Todo Item</button>
      </form>
      <TodoList :todos="todos" />
    </nav>
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
      formVisible: false,
      title: "",
      description: "",
      category: "",
      priority: "",
      todos: [],
      searchList: false,
      searchTodos: [],
    };
  },
  methods: {
    showForm() {
      this.formVisible = true;
    },
    addTodo() {
      const newTodo = {
        title: this.title,
        description: this.description,
        category: this.category,
        priority: this.priority,
      };
      this.todos.push(newTodo);
    },
    filterTodos() {
      let temp = "";
      for (let i = 0; i < this.todos.length; i++) {
        if (this.todos[i].title === this.searchTodos.title) {
          this.searchList = true;
          temp = this.todos[i].title;
          return temp;
        }
      }
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
