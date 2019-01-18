<template>
  <div>
    <input
      @keyup.enter="onAddTask"
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
    onAddTask ($event) {
      const target = $event.target
      const value = $event.target.value
      const task = this.createTask(value)
      this.broadcast(task)
      this.clearField(target)
    },
    createTask  (value) {
      const task = new Task()
      task.completed = false
      task.title = value
      return task
    },
    broadcast (task) {
      this.$emit('newTask', task)
    },
    clearField () {
      this.$el.querySelector('input').value = ''
    }
  }
}
</script>
