<template>
  <ul class="todo-list">
    <li v-for="todo in todoList" class="todo" :key="todo.id">
      <div class="view">
        <label>{{ todo.title }}</label>
      </div>
    </li>
  </ul>
</template>

<script>
export default {
  props: ['todoList']
}
</script>
