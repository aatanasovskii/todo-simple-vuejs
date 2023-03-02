<template>
  <div class="list">
    <h3 class="your-list" v-if="numberTodos !== 0">Your Todo List:</h3>
    <ol type="1">
      <li v-for="(todo, index) in todos" :key="index">
        {{ todo.title }} - {{ todo.category }},
        {{ todo.priority }}
        <router-link
          :to="{ name: 'edit', params: { index: index } }"
          tag="button"
        >
          Edit
        </router-link>
        <button @click="doneTodo(index)">Mark as DONE!</button>
      </li>
    </ol>
    <div v-if="this.$store.state.numberDoneTodos !== 0">
      <h3>Completed Todos:</h3>
      <ol type="1">
        <li v-for="(todo, index) in doneTodos" :key="index">
          <s>{{ todo.title }} - {{ todo.category }}, {{ todo.priority }}</s>
        </li>
      </ol>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    todos: Array,
  },
  methods: {
    doneTodo(indexDone) {
      // let done_todo = { todo: this.editedTodo, index: index };
      this.$store.commit("DONE_TODO", indexDone);
      console.log(this.doneTodos);
    },
  },
  computed: {
    doneTodos() {
      return this.$store.state.doneTodos;
    },
    numberTodos() {
      return this.$store.state.numberTodos;
    },
  },
};
</script>

<style>
.your-list{
  margin-top: 40px;
  font-size: 25px;
  font-weight: bold;
}
</style>
