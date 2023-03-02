<template>
  <div class="button">
    <h3>Edit your Todo</h3>
    <form @submit.prevent="saveEditedTodo" novalidate>
      <div>
        <label>Title: </label>
        <input
          type="text"
          id="edit-title"
          v-model="editedTodo.title"
          required
        />
      </div>
      <span class="error" v-if="$v.editedTodo.$dirty && !$v.editedTodo.title.required">Title is required!</span>
      <div>
        <label>Description: </label>
        <textarea
          id="edit-description"
          v-model="editedTodo.description"
          required
        >
        </textarea>
      </div>
      <span class="error" v-if="$v.editedTodo.$dirty && !$v.editedTodo.description.required">Description is required!</span>
      <div>
        <label>Category: </label>
        <select id="edit-category" v-model="editedTodo.category" required>
          <option value="Work">Work</option>
          <option value="Personal">Personal</option>
          <option value="Chores">Chores</option>
        </select>
      </div>
      <span class="error" v-if="$v.editedTodo.$dirty && !$v.editedTodo.category.required">Category is required!</span>
      <div>
        <label>Priority: </label>
        <select id="edit-priority" v-model="editedTodo.priority" required>
          <option value="Urgent">Urgent</option>
          <option value="Normal">Normal</option>
          <option value="Low">Low</option>
        </select>
      </div>
      <span class="error" v-if="$v.editedTodo.$dirty && !$v.editedTodo.priority.required">Priority is required!</span>
      <router-link to="/" tag="button" @click="saveEditedTodo">
        Save
      </router-link>
      <router-link to="/" tag="button" @click="cancelEditing">
        Cancel
      </router-link>
      <p class="error" v-if="submitStatus === 'ERROR'">Please edit the form correctly.</p>
    </form>
  </div>
</template>

<script>
import { required } from "vuelidate/lib/validators";

export default {
  props: {
    index: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      editedTodo: this.$store.state.todos[this.index],
      submitStatus: "",
    };
  },
  validations: {
    editedTodo: {
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
    saveEditedTodo() {
      this.$v.$touch();
      if (this.$v.$error) {
        this.submitStatus = "ERROR";
        return false;
      }
      this.submitStatus = "PENDING";
      let save_todo = { todo: this.editedTodo, index: this.index };
      this.$store.commit("SAVE_TODO", save_todo);
    },
    cancelEditing() {
      this.$store.commit("CANCEL_TODO");
    },
  },
};
</script>

<style scoped></style>
