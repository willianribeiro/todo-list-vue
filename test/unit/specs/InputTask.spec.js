import Vue from 'vue'
import InputTask from '@/components/InputTask'

describe('InputTask.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(InputTask)
    const vm = new Constructor().$mount()
    const input = vm.$el.querySelectorAll('.new-todo')
    expect(input.length).to.equal(1)
  })
})
