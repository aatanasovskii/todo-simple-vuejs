<template>
  <div>
    <label>Search Todo: </label>
    <input id="searchTodos" v-model="searchTodos" type="search" />
    <input
      type="submit"
      value="Submit"
      @click="
        todoSearchList();
        showTodo();
      "
    />
    <h3 v-if="includeTodo">The item {{ searchTodos }} is in your todo list.</h3>
    <TodoList :todos="tempList" />
  </div>
</template>

<script>
import TodoList from "@/components/TodoList.vue";

export default {
  components: { TodoList },
  props: {
    todos: Array,
  },
  data() {
    return {
      tempList: [],
      includeTodo: false,
      searchTodos: "",
    };
  },
  methods: {
    todoSearchList() {
      this.todos.forEach((todo) => {
        if (todo.title === this.searchTodos) {
          console.log(todo);
          this.tempList.push(todo);
          this.includeTodo = true;
        }
      });
    },
    showTodo() {
      this.$emit("show-todo");
    },
  },
};
</script>
