<template>
    <Header
        title="Particle Swarm Optimization"
        description="A computational optimization technique inspired by the social behavior of birds and fish, where a population of potential solutions (particles) iteratively adjusts their positions in search of the optimal solution to a given problem."
    />
    <canvas id="demo-canvas" width="500" height="500"></canvas>
    <div class="controls">
        <label for="inertia">Inertia:</label>
        <input type="range" id="inertia" min="0" max="1" step="0.01" value="0.5">
        <label for="c1">Cognitive:</label>
        <input type="range" id="c1" min="0" max="2" step="0.01" value="1.6">
        <label for="c2">Social:</label>
        <input type="range" id="c2" min="0" max="2" step="0.01" value="1.6">
    </div>
</template>

<script setup>
    import Header from '../components/Header.vue'
</script>