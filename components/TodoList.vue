<template>
  <div>
    <div class="container column is-half">
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
          v-for="(todo, index) in todos"
          :key="todo"
          class="box has-background-warning has-text-black"
        >
          {{ todo }}
          <span
            @click="removeTodo(index)"
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
              v-model="todo"
              class="input is-success"
              type="text"
              placeholder="Add your list item"
            />
          </div>
        </div>
        <div class="control">
          <!-- We can declare multiple functions like this, semi-colon is the key here! -->
          <button
            @click="
              submit();
              isTodoInputModalActive = false;
            "
            class="button is-info"
          >
            Submit
          </button>
        </div>
      </div>
    </b-modal>
  </div>
</template>

<script>
export default {
  data() {
    return {
      todo: "",
      isTodoInputModalActive: false,
    };
  },

  computed: {
    todos() {
      return this.$store.state.todos.todos;
    },
  },

  methods: {
    submit() {
      this.$store.commit("todos/addTodo", this.todo);
      this.todo = "";

      this.$buefy.notification.open({
        message: "New list item added successfully!",
        type: "is-success",
        position: "is-bottom-right",
      });
    },

    removeTodo(index) {
      this.$store.commit("todos/removeTodo", index);

      this.$buefy.notification.open({
        message: "List item removed",
        type: "is-danger",
        position: "is-bottom-right",
      });
    },
  },
};
</script>

<style></style>
