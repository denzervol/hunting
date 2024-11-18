<template>
  <div v-if="show" class="modal-overlay">
    <div class="modal-window">
      <header class="modal-header">
        <h2>Простое окно</h2>
        <button class="close-btn" @click="close">×</button>
      </header>
      <main class="modal-body">
        <p>Добро пожаловать в админку!</p>
      </main>
      <footer class="modal-footer">
        <button class="btn" @click="close">Закрыть</button>
      </footer>
    </div>
  </div>
</template>

<script>
export default {
  name: "AdminModal",
  props: {
    show: {
      type: Boolean,
      required: true,
    },
  },
  emits: ["close"],
  methods: {
    close() {
      this.$emit("close");
    },
  },
};
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
}
.modal-window {
  background: #fff;
  border-radius: 8px;
  width: 400px;
  max-width: 90%;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  overflow: hidden;
}
.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background: #007bff;
  color: #fff;
}
.close-btn {
  background: none;
  border: none;
  color: #fff;
  font-size: 18px;
  cursor: pointer;
}
.modal-body {
  padding: 20px;
}
.modal-footer {
  padding: 10px 20px;
  text-align: right;
}
.btn {
  background: #007bff;
  color: #fff;
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
}
.btn:hover {
  background: #0056b3;
}
</style>
