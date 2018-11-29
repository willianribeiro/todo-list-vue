<template>
  <ul class="todo-list">
    <li v-for="(todo, index) in sortedTasks" class="todo" :key="index">
      <div class="view">
        <input type="checkbox" @click="completeTask(todo)" class="toggle">
        <label v-bind:class="{'todo-completed': todo.completed }">
          {{ todo.title }}
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
  }
}
</script>
