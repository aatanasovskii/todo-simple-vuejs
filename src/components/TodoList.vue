<template>
  <div class="list">
    <ol type="1">
      <li v-for="(todo, index) in todos" :key="index">
        {{ todo.title }} - {{ todo.category }},
        {{ todo.priority }}
        <router-link :to="{name: 'edit', params: { index: index }}" tag="button">Edit</router-link>
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
