import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '../views/HomeView.vue'
import NeuralNetworkView from '../views/NeuralNetworkView.vue'
import GeneticAlgorithmView from '../views/GeneticAlgorithmView.vue'
import ParticleSwarmOptimizationView from '../views/ParticleSwarmOptimizationView.vue'
import AntColonyOptimizationView from '../views/AntColonyOptimizationView.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView
        },
        {
            path: '/nn',
            name: 'neural-network',
            component: NeuralNetworkView
        },
        {
            path: '/ga',
            name: 'genetic-algorithm',
            component: GeneticAlgorithmView
        },
        {
            path: '/pso',
            name: 'particle-swarm-optimization',
            component: ParticleSwarmOptimizationView
        },
        {
            path: '/aco',
            name: 'ant-colony-optimization',
            component: AntColonyOptimizationView
        }
    ]
})

export default router;