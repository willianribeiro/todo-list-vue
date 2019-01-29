import Vue from 'vue'
import TaskList from '@/components/TaskList'
import { Task } from '../../../src/models/Task'

function getMountedComponent (Component, propsData) {
  const Constructor = Vue.extend(Component)
  const vm = new Constructor({propsData}).$mount()
  return vm
}

describe('TaskList.vue', () => {
  let vm = {}

  beforeEach(() => {
    const task1 = new Task()
    task1.id = 1
    task1.title = 'task1'

    const task2 = new Task()
    task2.id = 2
    task2.title = 'task2'

    const task3 = new Task()
    task3.id = 3
    task3.title = 'task3'

    const tasks = []
    tasks.push(task1)
    tasks.push(task2)
    tasks.push(task3)

    vm = getMountedComponent(TaskList, { todoList: tasks })
  })

  it('should render correct contents', () => {
    expect(vm.todoList.length).to.equal(3)
  })
})
