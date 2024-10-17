<template>
    <div>
      <h2>Registro de Empleado</h2>
      <form @submit.prevent="registrarEmpleado">
        <div>
          <label>DPI:</label>
          <input type="text" v-model="DPI" required />
        </div>
        <div>
          <label>Nombre:</label>
          <input type="text" v-model="nombre" required />
        </div>
        <div>
          <label>Contraseña:</label>
          <input type="password" v-model="password" required />
        </div>
        <div>
          <label>Límite de Crédito:</label>
          <input type="number" v-model="limite_credito" required />
        </div>
        <div>
          <label>Saldo Disponible:</label>
          <input type="number" v-model="saldo_disponible" required />
        </div>
        <div>
          <label>Estado:</label>
          <select v-model="estado" required>
            <option value="activo">Activo</option>
            <option value="inactivo">Inactivo</option>
          </select>
        </div>
        <div>
          <label>Email:</label>
          <input type="email" v-model="email" required />
        </div>
        <div>
          <label>Número de Teléfono:</label>
          <input type="text" v-model="numero_tel" required />
        </div>
        <button type="submit">Registrar</button>
      </form>
    </div>
  </template>
  
  <script>
  import axios from 'axios'; // Asegúrate de importar axios aquí
  
  export default {
    data() {
      return {
        DPI: '',
        nombre: '',
        contraseña: '',
        limite_credito: '',
        saldo_disponible: '',
        estado: 'activo', // Valor predeterminado
        email: '',
        numero_tel: ''
      };
    },
    methods: {
      async registrarEmpleado() {
        try {
          const response = await axios.post('http://localhost:3000/registro', {
            DPI: this.DPI,
            nombre: this.nombre,
            contraseña: this.password,
            limite_credito: this.limite_credito,
            saldo_disponible: this.saldo_disponible,
            estado: this.estado,
            email: this.email,
            numero_tel: this.numero_tel
          });
          console.log(response.data);
        } catch (error) {
          console.error(error);
        }
      }
    }
  };
  </script>
  