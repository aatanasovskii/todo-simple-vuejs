<template>
  <div class="list">
    <ol type="1">
      <li v-for="(todo, index) in todos" :key="index">
        {{ todo.title }} - {{ todo.category }},
        {{ todo.priority }}
        <button @click="editTodo(index)">Edit</button>
      </li>
    </ol>
  </div>
</template>

<script>
export default {
  props: {
    todos: Array,
    selectedTodo: Object,
  },
  data() {
    return {};
  },
  methods: {
    editTodo(index) {
      this.$emit("edit-todo", index);
    },
  },
};
</script>

<style></style>
