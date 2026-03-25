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

<style>
body {
  margin: 0;
  font-family: 'Segoe UI', sans-serif;
  background: linear-gradient(135deg, #667eea, #764ba2);
}

.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.card {
  background: white;
  padding: 2rem;
  border-radius: 16px;
  width: 400px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.2);
}

h1 {
  text-align: center;
  margin-bottom: 1rem;
}

.input-group {
  display: flex;
  gap: 10px;
  margin-bottom: 1rem;
}

input {
  flex: 1;
  padding: 10px;
  border-radius: 8px;
  border: 1px solid #ddd;
}

button {
  padding: 10px 15px;
  border: none;
  border-radius: 8px;
  background: #667eea;
  color: white;
  cursor: pointer;
  transition: 0.2s;
}

button:hover {
  background: #5a67d8;
}
</style>