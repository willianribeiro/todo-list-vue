import Vue from 'vue'
import InputTask from '@/components/InputTask'

describe('InputTask.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(InputTask)
    const vm = new Constructor().$mount()
    console.log(vm.$el)
    expect(vm.$el.querySelectorAll('.new-todo').length)
      .to.equal(1)
  })
})
