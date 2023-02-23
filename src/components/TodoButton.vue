<template>
  <div class="button">
    <button @click="showForm">Add New Todo Item</button>
    <form v-if="formVisible" @submit.prevent="addTodo">
      <div>
        <label>Title: </label>
        <input type="text" id="title" v-model="this.todos.title" required />
      </div>
      <div>
        <label>Description:</label>
        <textarea id="description" v-model="this.todos.description" required>
        </textarea>
      </div>
      <div>
        <label>Category:</label>
        <select id="category" v-model="this.todos.category" required>
          <option value="Work">Work</option>
          <option value="Personal">Personal</option>
          <option value="Chores">Chores</option>
        </select>
      </div>
      <div>
        <label>Priority:</label>
        <select id="priority" v-model="this.todos.priority" required>
          <option value="Urgent">Urgent</option>
          <option value="Normal">Normal</option>
          <option value="Low">Low</option>
        </select>
      </div>
      <button type="submit" @click="addTodoItem">Add Todo Item</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      todos: {},
      formVisible: false,
    };
  },
  methods: {
    showForm() {
      this.formVisible = true;
    },
    addTodo() {
      const newTodo = {
        title: this.todos.title,
        description: this.todos.description,
        category: this.todos.category,
        priority: this.todos.priority,
      };
      this.todos.push(newTodo);
    },
    addTodoItem() {
      this.$emit("add-todo-item", this.todos);
    },
  },
};
</script>

<style>
button {
  margin-top: 20px;
  margin-bottom: 20px;
}
</style>
