<template>
  <div class="container column is-half mt-6">
    <div class="card has-background-primary-light">
      <header class="card-header">
        <p class="card-header-title">
          <b>Find Something to do</b>
        </p>
      </header>
        <div class="mt-5" v-if="$fetchState.pending">
          <Loading />
        </div>
        <div v-else class="content pt-4 pb-4">
        <strong class="pl-4">Activity:</strong> {{ event.activity }}</p>
        <strong class="mt-2 pl-4">Type:</strong> {{ event.type }}
      </div>
      <div class="card-footer pb-3 is-justify-content-end">
        <button @click="$fetch" class="button mr-3 is-info">Get a new one</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
data() {
    return {
      event: {}
    }
},
async fetch() {
  this.event = await fetch("https://www.boredapi.com/api/activity")
  .then(res => res.json())
}
}
</script>

<style>

</style>