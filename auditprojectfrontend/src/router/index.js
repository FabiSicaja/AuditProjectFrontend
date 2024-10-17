import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Login from '../components/Login.vue';
import SolicitarToken from '../components/SolicitarToken.vue';
import ConsultaSaldo from '../components/ConsultaSaldo.vue';
import Registro from '../components/Registro.vue';

const routes = [
  { path: '/', component: Login },
  { path: '/solicitar-token', component: SolicitarToken },
  { path: '/consulta-saldo', component: ConsultaSaldo },
  { path: '/registro', name: 'Registro',component: Registro}
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;