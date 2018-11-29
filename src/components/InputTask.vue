<template>
  <div>
    <input
      @keyup.enter="addTask"
      type="text"
      class="new-todo"
      placeholder="O que precisa ser feito?"
    >
  </div>
</template>

<script>
import { Task } from '../models/Task'

export default {
  data () {
    return {
    }
  },
  methods: {
    addTask ($event) {
      const value = $event.target.value
      const task = new Task()
      task.completed = false
      task.title = value
      this.$emit('newTask', task)
      $event.target.value = ''
    }
  }
}
</script>
