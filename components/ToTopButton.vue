<!-- ToTopButton.vue -->

<template>
  <teleport to="body">
    <button @click="scrollToTop" class="to-top-button">To Top</button>
  </teleport>
</template>

<script>
export default {
  methods: {
    scrollToTop() {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    },
  },
};
</script>

<style scoped>
.to-top-button {
  position: fixed;
  bottom: 20px;
  left: 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.to-top-button:hover {
  background-color: #0056b3;
}
</style>
