<template>
  <div class="button">
    <button @click="showForm">Add New Todo Item</button>
  </div>
</template>

<script>
export default {
  methods: {
    showForm() {
      this.$emit("show-form");
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
