import Vue from 'vue'
import InputTask from '@/components/InputTask'

describe('InputTask.vue', () => {
  let vm = {}

  beforeEach(() => {
    const Constructor = Vue.extend(InputTask)
    vm = new Constructor().$mount()
  })

  it('should render correct contents', () => {
    const input = vm.$el.querySelectorAll('.new-todo')
    expect(input.length).to.equal(1)
  })

  it('should create task correctly', () => {
    const task = vm.createTask('Estudar 25min')
    expect(task.title).to.equal('Estudar 25min')
  })

  it('should create task not completed', () => {
    const task = vm.createTask('Estudar 25min')
    expect(task.completed).to.equal(false)
  })

  it('should clean the input', () => {
    vm.$el.querySelector('.new-todo').value = 'Estudar 25min'
    vm.clearField()
    expect(vm.$el.querySelector('.new-todo').value).to.equal('')
  })

  // it('should call the event', () => {
  //   // Não está funcionando por algum problema na configuração do karma.
  //   const spy = sinon.spy()
  //   vm.$on('newTask', spy)
  //   vm.broadcast()
  //   expect(spy).to.have.been.called()
  // })
})
