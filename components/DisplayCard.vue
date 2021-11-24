<template>
  <div class="container column is-half mt-6">
    <div class="card has-background-primary-light">
      <header class="card-header">
        <p class="card-header-title">
          <b>Find Something to do</b>
        </p>
      </header>
      <div class="content pt-4 pb-4">
        <p>{{ activity }}</p>
        <strong class="mt-2">Type:</strong> {{ type }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
props: ["activity", "type"]
}
</script>

<style>

</style>