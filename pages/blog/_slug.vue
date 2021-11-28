<template>
  <article class="container card p-5 has-background-info-light">
    <nuxt-content :document="blog" />
  </article>
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
  color: brown;
  font-size: 24px;
  font-weight: 700;
}
</style>