<script setup>
import { work } from '../data/data';
import { ref } from 'vue';

let is_open = ref(false);
let TaskName=ref("")
let TaskTime=ref()
let current_index=ref()


function edit(index) {
    is_open.value = true;
    current_index.value=index
    TaskName.value =  work[index].name;
    TaskTime.value =  work[index].time;
}

function submitTask(){
    work[current_index.value].name=TaskName.value
    work[current_index.value].time=TaskTime.value
    is_open.value=false
}

</script>

<template>
   <div v-for="(w1,index) in work" :key="index">
    <li>
        {{ w1.name }}
        <p>{{ w1.time }}</p>
    </li>
    <button @click="edit(index)">Edit me</button>
   </div>

   <div v-if="is_open">
      <form @submit.prevent="submitTask" class="task-form">
        <label for="taskName">Task Name:</label>
        <input type="text" id="taskName" v-model="TaskName" required style="height: 40px;" />
        <br>
        <label for="taskTime">Time (minutes):</label>
        <input type="number" id="taskTime" v-model="TaskTime" required style="height: 40px;" />
        <br>
        <button type="submit" class="submit-btn">Submit Task</button>
      </form>
    </div>
    <br>
</template>

<style scoped>

</style>