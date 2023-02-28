<template>
  <div class="button">
    <form @submit.prevent="saveTodo">
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
        <label>Description:</label>
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
      <button type="submit" @click="saveTodo">Save</button>
      <button type="button" @click="$emit('cancel')">Cancel</button>
    </form>
  </div>
</template>

<script>
export default {
  props: {
    todo: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      editedTodo: this.todo,
    };
  },
  methods: {
    saveTodo() {
      console.log(this.editedTodo);
      this.$emit("save-todo", this.editedTodo);
    },
  },
};
</script>
