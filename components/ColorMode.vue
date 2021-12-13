<template>
  <div class="select mt-2 is-small">
    <select v-model="$colorMode.preference">
      <option value="light">Light Mode</option>
      <option value="dark">Dark Mode</option>
      <option value="purple">Dark Lavender</option>
    </select>
    <p>Quickly Switch between<br><b>Color Modes</b></p>
  </div>
</template>

<style>
.dark-mode body {
  background-color: #091a28;
  color: #ebf4f1;
}

.purple-mode body {
  background-color: #4C0070;
  color: #ebf4f1;
}
</style>
