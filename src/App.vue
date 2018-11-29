<template>
  <div id="app">
    <section class="todoapp">
      <header class="header">
        <h1>Tarefas</h1>
        <input-task @newTask="addTask"></input-task>
        <task-list :todo-list="tasks"></task-list>
      </header>
    </section>
  </div>
</template>

<script>
import InputTask from './components/InputTask'
import TaskList from './components/TaskList'

export default {
  name: 'App',
  components: {
    InputTask,
    TaskList
  },
  data () {
    return {
      tasks: []
    }
  },
  methods: {
    addTask (task) {
      this.tasks.push(task)
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
