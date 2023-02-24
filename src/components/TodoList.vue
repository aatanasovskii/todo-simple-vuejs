<template>
  <div class="list">
    <ol type="1">
      <li v-for="(todo, index) in todos" :key="index">
        {{ todo.title }} - {{ todo.category }},
        {{ todo.priority }}
      </li>
    </ol>
  </div>
</template>

<script>
export default {
  props: {
    todos: Array,
  },
};
</script>

<style></style>
