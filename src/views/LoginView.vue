<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const username = ref('')
const password = ref('')
const error = ref('')

const login = () => {
  error.value = ''

  if (username.value === 'admin' && password.value === '1234') {
    localStorage.setItem('auth', 'true')
    router.push('/dashboard')
  } else {
    error.value = 'Credenciales incorrectas'
  }
}
</script>

<template>
  <div class="container">
    <div class="card">
      <h1>🔐 Bienvenido</h1>
      <p class="subtitle">Inicia sesión para continuar</p>

      <div class="input-group">
        <input 
          v-model="username" 
          placeholder="Usuario"
        />
      </div>

      <div class="input-group">
        <input 
          v-model="password" 
          type="password" 
          placeholder="Contraseña"
        />
      </div>

      <p v-if="error" class="error">{{ error }}</p>

      <button @click="login">Ingresar</button>
    </div>
  </div>
</template>

<style scoped>
/* Fondo general */
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(135deg, #667eea, #764ba2);
  font-family: 'Segoe UI', sans-serif;
}

/* Card */
.card {
  background: white;
  padding: 2.5rem;
  border-radius: 18px;
  width: 350px;
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.2);
  text-align: center;
  animation: fadeIn 0.6s ease;
}

/* Título */
h1 {
  margin-bottom: 0.3rem;
}

/* Subtítulo */
.subtitle {
  color: #777;
  font-size: 0.9rem;
  margin-bottom: 1.5rem;
}

/* Inputs */
.input-group {
  margin-bottom: 1rem;
}

input {
  width: 100%;
  padding: 12px;
  border-radius: 10px;
  border: 1px solid #ddd;
  outline: none;
  transition: 0.2s;
  font-size: 14px;
}

input:focus {
  border-color: #667eea;
  box-shadow: 0 0 5px rgba(102, 126, 234, 0.5);
}

/* Botón */
button {
  width: 100%;
  padding: 12px;
  border: none;
  border-radius: 10px;
  background: #667eea;
  color: white;
  font-size: 15px;
  cursor: pointer;
  transition: 0.3s;
}

button:hover {
  background: #5a67d8;
  transform: translateY(-2px);
}

/* Error */
.error {
  color: #ff4d4d;
  font-size: 0.85rem;
  margin-bottom: 1rem;
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