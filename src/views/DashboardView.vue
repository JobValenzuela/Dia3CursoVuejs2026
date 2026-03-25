<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

const goTasks = () => {
  router.push('/tasks')
}

const logout = () => {
  localStorage.removeItem('auth')
  router.push('/login')
}
</script>

<template>
  <div class="container">
    <div class="card">
      <h1>🏠 Dashboard</h1>
      <p class="subtitle">Bienvenido de nuevo 👋</p>

      <div class="actions">
        <div class="action-card" @click="goTasks">
          <span class="icon">📝</span>
          <h3>Tareas</h3>
          <p>Administra tus pendientes</p>
        </div>

        <div class="action-card logout" @click="logout">
          <span class="icon">🚪</span>
          <h3>Cerrar sesión</h3>
          <p>Salir de la aplicación</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Fondo */
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(135deg, #667eea, #764ba2);
  font-family: 'Segoe UI', sans-serif;
}

/* Card principal */
.card {
  background: white;
  padding: 2.5rem;
  border-radius: 18px;
  width: 420px;
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.2);
  text-align: center;
  animation: fadeIn 0.6s ease;
}

h1 {
  margin-bottom: 0.3rem;
}

.subtitle {
  color: #777;
  font-size: 0.9rem;
  margin-bottom: 2rem;
}

/* Contenedor de acciones */
.actions {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

/* Tarjetas */
.action-card {
  background: #f7f7f7;
  padding: 1.2rem;
  border-radius: 14px;
  cursor: pointer;
  transition: 0.3s;
  text-align: left;
}

.action-card:hover {
  transform: translateY(-4px);
  background: #eef1ff;
  box-shadow: 0 10px 20px rgba(0,0,0,0.1);
}

/* Logout diferente */
.logout {
  background: #fff0f0;
}

.logout:hover {
  background: #ffe5e5;
}

/* Icono */
.icon {
  font-size: 1.5rem;
}

h3 {
  margin: 0.5rem 0 0.2rem;
}

p {
  margin: 0;
  font-size: 0.85rem;
  color: #666;
}

/* Animación */
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>