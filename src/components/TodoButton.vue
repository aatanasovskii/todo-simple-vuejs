<template>
  <div class="button">
    <button @click="showForm">Add New Todo Item</button>
    <form v-if="formVisible">
      <div>
        <label>Title: </label>
        <input type="text" id="title" v-model="todo.title" required />
      </div>
      <div>
        <label>Description:</label>
        <textarea
            id="description"
            v-model="todo.description"
            required>
        </textarea>
      </div>
      <div>
        <label>Category: </label>
        <select id="category" v-model="todo.category" required>
          <option value="Work">Work</option>
          <option value="Personal">Personal</option>
          <option value="Chores">Chores</option>
        </select>
      </div>
      <div>
        <label>Priority: </label>
        <select id="priority" v-model="todo.priority" required>
          <option value="Urgent">Urgent</option>
          <option value="Normal">Normal</option>
          <option value="Low">Low</option>
        </select>
      </div>
      <button
        type="submit"
        @click="
          addTodo();
          showList();
        "
      >
        Add Todo Item
      </button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      todo: {},
      formVisible: false,
    };
  },
  methods: {
    showForm() {
      this.formVisible = true;
    },
    addTodo() {
      this.$emit("add-todo", this.todo);
      this.todo ={};
      this.formVisible = false;
    },
    showList() {
      this.$emit("show-list");
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
