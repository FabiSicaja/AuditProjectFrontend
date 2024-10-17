<template>
    <div>
        <h2>Consulta de Saldo</h2>
        <form @submit.prevent="consultarSaldo">
            <input type="text" v-model="DPI" placeholder="DPI">
            <input type="text" v-model="tokenAutorizacion" placeholder="Token de Autorización">
            <button type="submit">Consultar</button>
        </form>
        <p v-if="saldo !== null">Saldo Disponible: {{ saldo }}</p>
        <p v-if="error">{{ error }}</p>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            DPI: '',
            tokenAutorizacion: '',
            saldo: null,
            error: ''
        };
    },
    methods: {
        async consultarSaldo() {
            try {
                const response = await axios.post('http://localhost:3000/consultar-saldo', {
                    DPI: this.DPI,
                    tokenAutorizacion: this.tokenAutorizacion
                });
                this.saldo = response.data.saldo_disponible;
            } catch (err) {
                this.error = 'Error al consultar saldo';
            }
        }
    }
};
</script>
