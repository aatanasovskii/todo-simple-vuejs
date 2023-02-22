<template>
  <div class="list">
    <ol type="1">
      <li v-for="todo in todos" :key="todo.title">
        {{ todo.title }} - {{ todo.category }}, {{ todo.priority }}
      </li>
    </ol>
  </div>
</template>

<script>
export default {
  props: {
    todos: Array,
    default: () => [],
  },
};
</script>

<style></style>
