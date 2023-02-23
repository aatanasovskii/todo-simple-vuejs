<template>
  <div>
    <h3 v-if="this.includeTodo">
      The item {{ searchTodos }} is in your todo list.
    </h3>
    <TodoList :todos="tempList" />
  </div>
</template>

<script>
import TodoList from "@/components/TodoList.vue";

export default {
  props: {
    todos: {
      type: Object,
      required: true,
    },
    searchTodos: String,
  },
  data() {
    return {
      tempList: {},
      includeTodo: false,
    };
  },
  components: { TodoList },
  methods: {
    filterTodos() {
      for (let i in this.todos) {
        if (i.toLowerCase().includes(this.searchTodos)) {
          this.tempList.push(i);
          this.includeTodo = true;
        }
      }
    },
  },
};
</script>
