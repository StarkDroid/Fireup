<template>
  <div>
    <div class="container column is-half">
      <button
        @click="isListInputModalActive = true"
        class="button is-info is-pulled-right mr-5"
      >
        ➕ Add item
      </button>
    </div>
    <div class="section">
      <div class="container column is-half">
        <div
          v-for="(list, index) in lists"
          :key="list"
          class="box has-background-success has-text-black"
        >
          {{ list }}
          <span
            @click="removeItem(index)"
            class="tag is-pulled-right is-clickable is-danger"
            >Delete</span
          >
        </div>
      </div>
    </div>

    <!-- Modal for List Input -->
    <b-modal v-model="isListInputModalActive">
      <div class="card container column is-half p-5">
        <p class="is-size-3 has-text-centered">🗒️ Fill your bucket list!</p>
        <hr class="has-background-grey-light" />
        <div class="field">
          <label class="label">Add your desired list item</label>
          <div class="control">
            <input
              v-model="listitem"
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
              isListInputModalActive = false;
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
      listitem: "",
      lists: [
        "I am currently learning Nuxt",
        "This sets an example for list items",
        "Until here, its just static strings looped using v-for",
      ],
      isListInputModalActive: false,
    };
  },
  methods: {
    submit() {
      if (this.listitem) {
        this.lists.push(this.listitem);
        this.listitem = "";
      }
      this.$buefy.notification.open({
        message: "New list item added successfully!",
        type: "is-success",
        position: "is-bottom-right",
      });
    },

    removeItem(index) {
      this.$delete(this.lists, index);

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
