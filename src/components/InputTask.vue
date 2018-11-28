<template>
  <div>
    <input
      @keyup.enter="add_task"
      v-model="message"
      type="text"
      class="new-todo"
      placeholder="O que precisa ser feito?"
    >
    <label for="">{{message}}</label>
  </div>
</template>

<script>
import { Task } from '../models/Task'

export default {
  data () {
    return {
      message: ''
    }
  },

  methods: {
    add_task ($event) {
      const value = $event.target.value
      const task = new Task()
      task.completed = false
      task.title = value
      console.log('task', task)
    }
  }
}
</script>
