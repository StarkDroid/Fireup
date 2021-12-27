<template>
  <div>
    <div class="container column is-half">
      <button
        class="button is-danger is-rounded is-pulled-right"
        @click="removeList"
      >
        ❎Clear all
      </button>
      <button
        @click="isTodoInputModalActive = true"
        class="button is-success is-rounded is-pulled-right mr-5"
      >
        ➕ Add item
      </button>
    </div>
    <div class="section">
      <div class="container column is-half">
        <div
          v-for="todo in todos"
          :key="todo.id"
          class="box has-background-warning has-text-black"
          :class="{ 'has-background-danger': todo.done }"
        >
        <input :checked="todo.done" @change="toggle(todo)" class="mr-4" type="checkbox" />
          <label :class="{ completed: todo.done }">{{ todo.text }}</label>
          <span
            @click="removeTodo(todo)"
            class="tag is-pulled-right is-clickable is-danger"
            >Delete</span
          >
        </div>
      </div>
    </div>

    <!-- Modal for List Input -->
    <b-modal v-model="isTodoInputModalActive">
      <div class="card container column is-half p-5">
        <p class="is-size-3 has-text-centered">🗒️ Fill your bucket list!</p>
        <hr class="has-background-grey-light" />
        <div class="field">
          <label class="label">Add your desired list item</label>
          <div class="control">
            <input
              @keyup.enter="submit"
              class="input is-success"
              type="text"
              placeholder="Add your list item"
            />
          </div>
        </div>
      </div>
    </b-modal>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
  data() {
    return {
      isTodoInputModalActive: false,
    };
  },

  computed: {
    todos() {
      return this.$store.state.todos.list;
    },
  },

  methods: {
    submit(event) {
      while (event.target.value !== "") {
        this.$store.commit("todos/add", event.target.value);
        event.target.value = "";

        this.$buefy.notification.open({
          message: "New list item added successfully!",
          type: "is-success",
          position: "is-bottom-right",
        });
      }
    },

    removeTodo(todo) {
      this.$store.commit("todos/remove", todo);

      this.$buefy.notification.open({
        message: "List item removed",
        type: "is-danger",
        position: "is-bottom-right",
      });
    },

    removeList() {
      this.$store.commit("todos/removeList");
    },

    ...mapMutations({
      toggle: 'todos/toggle'
    }),
  },
};
</script>

<style scoped>
.completed {
  text-decoration: line-through;
}
</style>
