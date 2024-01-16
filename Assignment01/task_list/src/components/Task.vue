<script setup>
import { work } from '../data/data';
import { reactive, ref } from 'vue';
const TaskName=ref("")
const TaskTime=ref()
const open=ref(false)

function open_modal(){
  open.value=!open.value;
}

  function remove(index){
    work.splice(index,1)
  }
  
  function Submit(){
    // work.push({
    //   name:TaskName.value,
    //   time:TaskTime.value
    // })
   
    
    const newTask = {
    name: TaskName.value,
    time: TaskTime.value
  };


  // Push the new task to the work array
  work.push(newTask);
    open.value=false
    TaskName.value=''
    TaskTime.value=''
  
   

  }


     
</script>

<template>
 <h1>Task Manager</h1>
  <div class="task-manager">
    <div v-for="(task, index) in work" :key="index" class="task-item">
      <p>Task name: {{ task.name }}</p>
      <p>Time: {{ task.time }} minutes</p>
      <button @click="remove(index)" class="remove-btn">Remove Task</button>
    </div>

    <div class="add-task-container">
      <button @click="open_modal" class="add-task-btn">Add Task</button>
    </div>

    <div v-if="open" class="modal">
    <form @submit.prevent="Submit" class="task-form">
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
.task-manager {
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