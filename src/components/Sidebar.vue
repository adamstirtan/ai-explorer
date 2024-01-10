<template>

  <div class="fixed top-0 bottom-0 lg:left-0 w-[300px] overflow-y-auto text-center bg-blue-600">
    
    <div class="text-gray-100 text-2xl">
        <div class="font-bold p-6 mt-1 flex items-start">
            <router-link to="/">AI Explorer</router-link>
        </div>
    </div>

    <hr class="border-blue-500" />

    <div class="p-2 m-2 flex items-center px-4 text-white rounded-md duration-300 cursor-pointer hover:bg-blue-700">
        <span class="fa fa-brain min-w-5"></span>
        <router-link to="/nn" class="ml-4">Neural Network</router-link>
    </div>

    <div class="p-2 m-2 flex items-center px-4 text-white rounded-md duration-300 cursor-pointer hover:bg-blue-700">
        <span class="fa fa-dna min-w-5"></span>
        <router-link to="/ga" class="ml-4">Genetic Algorithm</router-link>
    </div>

    <div class="p-2 m-2 flex items-center px-4 text-white rounded-md duration-300 cursor-pointer hover:bg-blue-700">
        <span class="fa fa-mosquito min-w-5"></span>
        <router-link to="/pso" class="ml-4" href="#">Particle Swarm Optimization</router-link>
    </div>

    <div class="p-2 m-2 flex items-center px-4 text-white rounded-md duration-300 cursor-pointer hover:bg-blue-700">
        <span class="fa fa-bug min-w-5"></span>
        <router-link to="/aco" class="ml-4" href="#">Ant Colony Optimization</router-link>
    </div>

    <hr class="border-blue-500" />

    <div class="p-2 m-2 flex items-center px-4 text-white rounded-md duration-300 cursor-pointer hover:bg-blue-700">
        <span class="fa-brands fa-github min-w-5"></span>
        <a class="ml-4" href="https://github.com/adamstirtan/ai-explorer" target="_blank">GitHub</a>
    </div>

  </div>

</template>