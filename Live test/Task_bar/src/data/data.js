import { reactive} from 'vue'
const work = reactive([
  {
    name: 'Task 1',
    time: 60
  },
  {
      name: 'Task 2',
      time: 50
  },
  {
      name: 'Task 3',
      time: 40
  }
]);

export{work}