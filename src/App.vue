<template>
  <div id="app">
    <section class="todoapp">
      <header class="header">
        <h1>Tarefas</h1>
        <input-task></input-task>
      </header>
    </section>
  </div>
</template>

<script>
import InputTask from './components/InputTask'

export default {
  name: 'App',
  components: {
    InputTask
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
