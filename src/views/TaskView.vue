<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import TaskList from '../components/TaskList.vue'

const router = useRouter()

const tasks = ref([
  { id: 1, text: 'Aprender Vue', completed: false },
  { id: 2, text: 'Hacer tarea', completed: false }
])

const newTask = ref('')

const addTask = () => {
  if (newTask.value.trim() === '') return

  tasks.value.push({
    id: Date.now(),
    text: newTask.value,
    completed: false
  })

  newTask.value = ''
}

const toggleTask = (id) => {
  const task = tasks.value.find(t => t.id === id)
  task.completed = !task.completed
}

const deleteTask = (id) => {
  tasks.value = tasks.value.filter(t => t.id !== id)
}

const goDashboard = () => {
  router.push('/dashboard')
}
</script>

<template>
  <div class="container">
    <div class="card">
      <h1>📝 Mis Tareas</h1>

      <button @click="goDashboard">⬅ Volver</button>

      <div class="input-group">
        <input v-model="newTask" placeholder="¿Qué vas a hacer hoy?" />
        <button @click="addTask">Agregar</button>
      </div>

      <TaskList
        :tasks="tasks"
        @toggle="toggleTask"
        @delete="deleteTask"
      />
    </div>
  </div>
</template>