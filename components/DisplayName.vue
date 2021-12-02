<template>
  <div class="p-2 level">
    <div @click="isUserNameModalActive = true" class="level-item is-clickable">
      <figure class="image is-64x64">
        <img class="is-rounded" src="@/static/avatar.png" />
        <!-- We are using the v-show directive to show this element only if there's no name input entered.
        The property is passed through the modal->saved in data()->Checked using v-show -->
        <small v-show="!username" class="has-text-white">👆Click me</small>
      </figure>
      <div class="level-item">
        <p class="ml-2 has-text-white is-size-5">{{ username }}</p>
      </div>
    </div>

    <!-- Input Username Modal -->
    <b-modal v-model="isUserNameModalActive">
      <div class="card container column is-half is-mobile p-5">
        <p class="has-text-black">Set your Username🖋️</p>
        <p>
          <small
            >Close the modal to apply changes, The entered text will disappear
            when switching to a different tab as we are not using state
            management yet</small
          >
        </p>
        <input
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
      isUserNameModalActive: false,
    };
  },
};
</script>

<style></style>
