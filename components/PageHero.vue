<template>
  <div>
    <section class="hero is-small has-text-centered custom-bg">
      <div class="hero-body">
        <p class="title has-text-white is-size-1">Oh Hello there 👋</p>
        <p class="subtitle container has-text-white mt-6">
          Guess you're just too bored!<br />
          Well...welcome aboard! 😃
        </p>
      </div>
      <div class="hero-foot">
        <nav class="tabs is-boxed is-fullwidth">
          <div class="container">
            <ul>
            <li class="is-active"><nuxt-link to="/">Activities</nuxt-link></li>
            <li><nuxt-link to="bucket-list">Bucket List</nuxt-link></li>
            <li><nuxt-link to="blog">Blog</nuxt-link></li>
            </ul>
          </div>
        </nav>
      </div>
    </section>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.custom-bg {
  background-color: #3d5afe;
}
</style>
