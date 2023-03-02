<template>
  <div class="button">
    <form @submit.prevent="submitForm" novalidate>
      <div>
        <label>Title: </label>
        <input type="text" id="title" v-model="todo.title" required />
        <span class="error" v-if="$v.todo.$dirty && !$v.todo.title.required">Title is required!</span>
      </div>
      <div>
        <label>Description:</label>
        <textarea id="description" v-model="todo.description" required>
        </textarea>
        <span class="error" v-if="$v.todo.$dirty && !$v.todo.description.required">Description is required!</span>
      </div>
      <div>
        <label>Category: </label>
        <select id="category" v-model="todo.category" required>
          <option value="Work">Work</option>
          <option value="Personal">Personal</option>
          <option value="Chores">Chores</option>
        </select>
        <span class="error" v-if="$v.todo.$dirty && !$v.todo.category.required">Title is required!</span>
      </div>
      <div>
        <label>Priority: </label>
        <select id="priority" v-model="todo.priority" required>
          <option value="Urgent">Urgent</option>
          <option value="Normal">Normal</option>
          <option value="Low">Low</option>
        </select>
        <span class="error" v-if="$v.todo.$dirty && !$v.todo.priority.required">Title is required!</span>
      </div>
      <button type="submit">Add Todo Item</button>
      <p class="error" v-if="submitStatus === 'ERROR'">Please fill the form correctly.</p>
    </form>
  </div>
</template>

<script>
import { required } from "vuelidate/lib/validators";
export default {
  data() {
    return {
      todo: {},
      submitStatus: null,
    };
  },
  validations: {
    todo: {
      title: {
        required,
      },
      description: {
        required,
      },
      category: {
        required,
      },
      priority: {
        required,
      },
    },
  },
  methods: {
    submitForm() {
      this.$v.$touch();
      if (this.$v.$error) {
        this.submitStatus = "ERROR";
        return false;
      }

      this.submitStatus = "PENDING";
      this.addTodo();
      this.showList();
      this.visibleForm();
    },
    addTodo() {
      this.$emit("add-todo", this.todo);
      this.todo = {};
      this.formVisible = false;
    },
    showList() {
      this.$emit("show-list");
    },
    visibleForm() {
      this.$emit("form-visible");
    },
  },
};
</script>

<style>
button {
  margin-top: 20px;
  margin-bottom: 20px;
}

.error {
  color: #e60000;
  font-size: small;
}
</style>
