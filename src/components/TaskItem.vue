<script setup>
defineProps({
  task: Object
})

const emit = defineEmits(['toggle', 'delete'])
</script>

<template>
  <li class="task">
    <span
      class="text"
      :class="{ done: task.completed }"
      @click="emit('toggle', task.id)"
    >
      {{ task.text }}
    </span>

    <button class="delete" @click="emit('delete', task.id)">
      ✕
    </button>
  </li>
</template>

<style scoped>
.task {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #f7f7f7;
  padding: 10px;
  margin-bottom: 8px;
  border-radius: 10px;
  transition: 0.2s;
}

.task:hover {
  background: #ececec;
}

.text {
  cursor: pointer;
  transition: 0.2s;
}

.done {
  text-decoration: line-through;
  color: gray;
}

.delete {
  background: #ff5c5c;
  border: none;
  color: white;
  padding: 6px 10px;
  border-radius: 6px;
  cursor: pointer;
}

.delete:hover {
  background: #e04848;
}
</style>