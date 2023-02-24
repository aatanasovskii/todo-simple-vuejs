<template>
  <div class="button">
    <button @click="showForm">Add New Todo Item</button>
    <form v-if="formVisible">
      <div>
        <label>Title: </label>
        <input type="text" id="title" v-model="title" required />
      </div>
      <div>
        <label>Description:</label>
        <textarea id="description" v-model="description" required></textarea>
      </div>
      <div>
        <label>Category: </label>
        <select id="category" v-model="category" required>
          <option value="Work">Work</option>
          <option value="Personal">Personal</option>
          <option value="Chores">Chores</option>
        </select>
      </div>
      <div>
        <label>Priority: </label>
        <select id="priority" v-model="priority" required>
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
      title: "",
      description: "",
      category: "",
      priority: "",
      formVisible: false,
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
      this.$emit("add-todo", newTodo);
      this.title = "";
      this.description = "";
      this.category = "";
      this.priority = "";
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
