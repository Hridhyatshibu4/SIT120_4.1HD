<template>
  <div class="todo-list">
    <div class="header">
      <h2>Goals and Achievements</h2>
    </div>

    <div class="task-list">
      <h3>To Do</h3>
      <ul>
        <li v-for="(task, index) in filteredTasks('To Do')" :key="index">
          <span class="task-text">{{ task.text }}</span>
          <button @click="deleteTask(index)">Delete</button>
        </li>
      </ul>
      <input v-model="newTask.text" @keyup.enter="addTask('To Do')" placeholder="Add a new task">
      <button @click="addTask('To Do')">Add Task</button>
      <div class="task-label">To Do</div>
    </div>

    <div class="task-list">
      <h3>In Progress</h3>
      <ul>
        <li v-for="(task, index) in filteredTasks('In Progress')" :key="index">
          <span class="task-text">{{ task.text }}</span>
          <button @click="deleteTask(index)">Delete</button>
        </li>
      </ul>
      <input v-model="newTask.text" @keyup.enter="addTask('In Progress')" placeholder="Add a new task">
      <button @click="addTask('In Progress')">Add Task</button>
      <div class="task-label">In Progress</div>
    </div>

    <div class="task-list">
      <h3>Completed</h3>
      <ul>
        <li v-for="(task, index) in filteredTasks('Completed')" :key="index">
          <span class="task-text">{{ task.text }}</span>
          <button @click="deleteTask(index)">Delete</button>
        </li>
      </ul>
      <input v-model="newTask.text" @keyup.enter="addTask('Completed')" placeholder="Add a new task">
      <button @click="addTask('Completed')">Add Task</button>
      <div class="task-label">Completed</div>
    </div>

    <!-- Giphy Animation -->
    <div class="giphy-animation">
      <div style="width:40%;height:0;padding-bottom:56%;position:relative;">
        <iframe src="https://giphy.com/embed/UGHnRhYqCxmfrLvsdR" width="200%" height="200%" style="position:absolute" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
      </div>
      <p><a href="https://giphy.com/gifs/dino-steggy-this-is-UGHnRhYqCxmfrLvsdR">via GIPHY</a></p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GoalsAchievements',
  data() {
    return {
      newTask: {
        text: '',
        status: 'To Do'
      },
      tasks: []
    };
  },
  methods: {
    addTask(taskStatus) {
      if (this.newTask.text.trim() !== '') {
        this.tasks.push({ text: this.newTask.text, status: taskStatus, completed: false });
        this.newTask.text = '';
      }
    },
    deleteTask(index) {
      this.tasks.splice(index, 1);
    },
    filteredTasks(status) {
      return this.tasks.filter(task => task.status === status);
    }
  }
};
</script>

<style scoped>
/* Add your CSS styles for goals and achievements here */

.todo-list {
  background-color: #f2f2f2; /* Greyish-white background color */
  padding: 20px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.header {
  background-color: #42b983; /* Green background color */
  color: #fff; /* White text color */
  padding: 10px 20px;
  border-radius: 10px;
  margin-bottom: 20px;
}

.task-list {
  background-color: #fff; /* White background color */
  width: 300px;
  margin: 0 20px;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 5px;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
  position: relative;
  margin-bottom: 20px;
}

.task-list h3 {
  font-size: 18px;
  margin-bottom: 10px;
}

.task-list ul {
  list-style: none;
  padding: 0;
}

.task-list li {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;
  border-bottom: 1px solid #ddd;
}

.task-list input[type="text"] {
  width: 70%;
  padding: 5px;
  border: 1px solid #ddd;
  border-radius: 5px;
}

.task-list button {
  background-color: #42b983; /* Green background color */
  color: #fff; /* White text color */
  padding: 5px 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.task-list button:hover {
  background-color: #3a8c64; /* Darker green on hover */
}

.task-label {
  position: absolute;
  top: 5px;
  left: 10px;
  background-color: #000; /* Black background color */
  color: #fff; /* White text color */
  padding: 3px 6px;
  border-radius: 3px;
  font-weight: bold;
  z-index: 1;
}

.giphy-animation {
  position: fixed; /* Fixed position to prevent scrolling */
  bottom: 10px;
  right: 10px;
  width: 150px;
  height: 150px;
  background-color: #fff; /* White background color */
  border: 1px solid #ddd;
  border-radius: 5px;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
  overflow: hidden;
}
.task-text {
  color: #000; /* Black text color */
}
</style>
