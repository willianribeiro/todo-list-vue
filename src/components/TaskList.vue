<template>
  <ul class="todo-list">
    <li v-for="(task, index) in sortedTasks" class="todo" :key="index">
      <div class="view">
        <input type="checkbox" @click="completeTask(task)" class="toggle">
        <label :class="{'todo-completed': task.completed }">
          {{ task.title }}
        </label>
      </div>
    </li>
  </ul>
</template>

<script>
export default {
  props: ['todoList'],
  computed: {
    sortedTasks () {
      const sorted = this.todoList
        .slice()
        .sort((a, b) => {
          if (a.title < b.title) return -1
          if (a.title > b.title) return 1
          return 0
        })
      return sorted
    }
  },
  methods: {
    completeTask (task) {
      task.completed = !task.completed
    }
  }
}
</script>

<style>
  .todo-completed {
    text-decoration: line-through;
  }
</style>
