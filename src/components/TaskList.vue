<script setup>
import TaskItem from './TaskItem.vue'

defineProps({
  tasks: Array
})

const emit = defineEmits(['toggle', 'delete'])
</script>

<template>
  <ul class="list">
    <TaskItem
      v-for="task in tasks"
      :key="task.id"
      :task="task"
      @toggle="emit('toggle', $event)"
      @delete="emit('delete', $event)"
    />
  </ul>
</template>

<style scoped>
.list {
  list-style: none;
  padding: 0;
  margin: 0;
}
</style>