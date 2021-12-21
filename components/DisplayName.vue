<template>
  <div class="p-2 level">
    <div @click="isUserNameModalActive = true" class="level-item is-clickable">
      <figure class="image is-64x64">
        <img class="is-rounded" src="https://avatars.dicebear.com/api/bottts/${user}.svg" />
        <!-- We are using the v-show directive to show this element only if there's no name input entered.
        The property is passed through the modal->saved in data()->Checked using v-show -->
        <small v-show="!user" class="has-text-white">👆Click me</small>
      </figure>
      <div class="level-item">
        <p class="ml-2 has-text-white is-size-5">{{ user }}</p>
      </div>
    </div>

    <!-- Input Username Modal -->
    <b-modal v-model="isUserNameModalActive">
      <div class="card container column is-half is-mobile p-5">
        <p class="has-text-black">Set your Username🖋️</p>
        <p>
          <small
            >Close the modal to apply changes, The entered text will be saved in local storage,
            Switch tabs to see the changes!</small
          >
        </p>
        <input
          @keydown.enter="saveUsername(); isUserNameModalActive = false"
          v-model="username"
          class="input is-success"
          type="text"
          placeholder="StarkDroid"
        />
      </div>
    </b-modal>
  </div>
</template>
<script>
export default {
  data() {
    return {
      username: "",
      user: "",
      isUserNameModalActive: false,
    };
  },

  mounted() {
    this.user = localStorage.getItem('name')
  },

  methods: {
    saveUsername() {
      localStorage.setItem('name', this.username)
    }
  },
};
</script>

<style></style>
