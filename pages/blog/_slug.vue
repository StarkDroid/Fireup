<template>
<div class="hero background is-fullheight">
  <div>
  <article class="container card p-5 mt-6 has-background-info-light">
    <nuxt-content :document="blog" />
    <nuxt-link class="is-pulled-right" to="/blog">🔙 back to blogs </nuxt-link>
  </article>
  </div>
</div>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const blog = await $content('blog', params.slug).fetch()

    return { blog }
  }
}
</script>

<style>
.nuxt-content h1 {
  color: #3D2C8D;
  font-size: 24px;
  font-weight: 700;
}

.background {
  background-color: #1C0C5B;
}
</style>