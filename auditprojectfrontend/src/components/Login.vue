<template>
    <div>
        <h2>Inicio de Sesión</h2>
        <form @submit.prevent="login">
            <input type="text" v-model="DPI" placeholder="DPI">
            <input type="password" v-model="password" placeholder="Contraseña">
            <button type="submit">Iniciar Sesión</button>
        </form>
        <p v-if="error">{{ error }}</p>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            DPI: '',
            contraseña: '',
            error: ''
        };
    },
    methods: {
        async login() {
            try {
                const response = await axios.post('http://localhost:3000/login', {
                    DPI: this.DPI,
                    contraseña: this.password
                });
                localStorage.setItem('token', response.data.token);
                this.$router.push('/solicitar-token');
            } catch (err) {
                this.error = 'Error de inicio de sesión';
            }
        }
    }
};
</script>
