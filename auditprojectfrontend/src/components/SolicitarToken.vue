<template>
    <div>
        <h2>Solicitar Token</h2>
        <form @submit.prevent="solicitarToken">
            <select v-model="metodo">
                <option value="email">Correo</option>
                <option value="sms">SMS</option>
            </select>
            <input type="text" v-model="DPI" placeholder="DPI">
            <button type="submit">Solicitar Token</button>
        </form>
        <p v-if="mensaje">{{ mensaje }}</p>
        <p v-if="error">{{ error }}</p>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            metodo: 'email',
            DPI: '',
            mensaje: '',
            error: ''
        };
    },
    methods: {
        async solicitarToken() {
            try {
                const token = localStorage.getItem('token');
                const response = await axios.post('http://localhost:3000/solicitar-token', {
                    metodo: this.metodo,
                    DPI: this.DPI
                }, {
                    headers: { Authorization: token }
                });
                this.mensaje = response.data;
            } catch (err) {
                this.error = 'Error al solicitar token';
            }
        }
    }
};
</script>
