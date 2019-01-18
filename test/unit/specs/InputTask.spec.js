import Vue from 'vue'
import InputTask from '@/components/InputTask'

describe('InputTask.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(InputTask)
    const vm = new Constructor().$mount()
    const input = vm.$el.querySelectorAll('.new-todo')
    expect(input.length).to.equal(1)
  })

  it('should create task correctly', () => {
    const Constructor = Vue.extend(InputTask)
    const vm = new Constructor().$mount()
    const task = vm.createTask('Estudar 25min')
    expect(task.title).to.equal('Estudar 25min')
  })

  it('should create task not completed', () => {
    const Constructor = Vue.extend(InputTask)
    const vm = new Constructor().$mount()
    const task = vm.createTask('Estudar 25min')
    expect(task.completed).to.equal(false)
  })

  it('should clean the input', () => {
    const Constructor = Vue.extend(InputTask)
    const vm = new Constructor().$mount()
    vm.$el.querySelector('.new-todo').value = 'Estudar 25min'
    vm.clearField()
    expect(vm.$el.querySelector('.new-todo').value).to.equal('')
  })
})
