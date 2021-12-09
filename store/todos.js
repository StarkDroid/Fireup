import Vue from 'vue'
export const state = () => ({
  todos: []
})

export const mutations = {
  addTodo(state, todo) {
    state.todos.push(todo)
  },

  // This removes one item from the bottom of the list when triggered but not the exact item you want to remove
  // removeTodo(state, payload) {
  //   state.todos.splice(state.todos.indexOf(payload), 1)
  // }

  removeTodo(state, index) {
    Vue.delete(state.todos, index)
  }
}