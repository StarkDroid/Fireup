import Vue from 'vue'
export const state = () => ({
  todos: [],
  list: []
})

export const mutations = {
  addTodo(state, todo) {
    state.todos.push(todo)
  },

  add(state, text) {
    state.list.push({
      text,
      done: false,
      id: Date.now()
    })
  },

  remove(state, todo) {
    state.list = state.list.filter(item => item.id !== todo.id)
  },

  toggle(state, todo) {
    todo.done = !todo.done
  },

  // This removes one item from the bottom of the list when triggered but not the exact item you want to remove
  // removeTodo(state, payload) {
  //   state.todos.splice(state.todos.indexOf(payload), 1)
  // }

  removeTodo(state, index) {
    Vue.delete(state.todos, index)
  },

  removeList(state) {
    state.todos = []
  }
}