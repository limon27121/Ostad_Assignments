<script setup>
import { work } from '../data/data';
import { ref } from 'vue';

const TaskName = ref("");
const TaskTime = ref("");
const editIndex = ref(null);
const open=ref(false)

function openModal(index) {
  editIndex.value = index;
  TaskName.value =  work[index].name;
  TaskTime.value =  work[index].time;
}



function submitTask() {
  if (editIndex.value !== null) {
    // Editing an existing task
    work[editIndex.value].name = TaskName.value;
    work[editIndex.value].time = TaskTime.value;
  } else {
    // Adding a new task
    // work.push({ name: TaskName.value, time: TaskTime.value });
  }

  editIndex.value = null;
  TaskName.value = "";
  TaskTime.value = "";
}
</script>

<template>
  <div class="task-manager">
    <h1>Task Manager</h1>

    <div v-for="(task, index) in work" :key="index" class="task-item">
      <p>Task name: {{ task.name }}</p>
      <p>Time: {{ task.time }} minutes</p>
      <button @click="openModal(index)" class="remove-btn">Edit Task</button>
    </div>


    <div v-if="editIndex !== null" class="modal">
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
  </div>
</template>

<style scoped>
task-manager {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
 background-color: #4caf50;
}

.task-item {
  background-color: #f0f0f0;
  border: 1px solid #ddd;
  padding: 10px;
  margin: 10px 0;
  border-radius: 5px;
  color: blue;
}

.remove-btn {
  background-color: #ff5757;
  color: #fff;
  border: none;
  padding: 5px 10px;
  cursor: pointer;
}

.add-task-container {
  margin-top: 20px;
}

.add-task-btn {
  background-color: blueviolet;
  color: #fff;
  border: none;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
}

.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
}

.task-form {
    background-color: Tomato;
    padding: 20px;
    border-radius: 20px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    height: auto; /* Set height to auto to adjust based on content */
}
.task-form label {
    padding-left: 10px;
}


.submit-btn {
  background-color: #3498db;
  color: #fff;
  border: none;
 
  font-size: 16px;
  cursor: pointer;
  align-self: flex-end; /* Align button to the end of the form */
  margin-top: 10px;
}
</style>
