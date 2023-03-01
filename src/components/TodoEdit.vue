<template>
  <div class="button">
    <h3>Edit your Todo</h3>
    <form @submit.prevent="saveEditedTodo">
      <div>
        <label>Title: </label>
        <input
          type="text"
          id="edit-title"
          v-model="editedTodo.title"
          required
        />
      </div>
      <div>
        <label>Description: </label>
        <textarea
          id="edit-description"
          v-model="editedTodo.description"
          required
        >
        </textarea>
      </div>
      <div>
        <label>Category: </label>
        <select id="edit-category" v-model="editedTodo.category" required>
          <option value="Work">Work</option>
          <option value="Personal">Personal</option>
          <option value="Chores">Chores</option>
        </select>
      </div>
      <div>
        <label>Priority: </label>
        <select id="edit-priority" v-model="editedTodo.priority" required>
          <option value="Urgent">Urgent</option>
          <option value="Normal">Normal</option>
          <option value="Low">Low</option>
        </select>
      </div>
      <router-link to="/" tag="button" @click="saveEditedTodo">
        Save
      </router-link>
      <router-link to="/" tag="button" @click="cancelEditing">
        Cancel
      </router-link>
    </form>
  </div>
</template>

<script>
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
    };
  },
  methods: {
    saveEditedTodo() {
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
