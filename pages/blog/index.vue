<template>
  <div>
    <PageHero />
    <div class="container column is-half">
      <div v-for="blog of blogs" :key="blog.slug">
        <nuxt-link :to="{ name: 'blog-slug', params: { slug: blog.slug } }">
          <div class="container">
            <img :src="blog.img" />
            <h3>{{ blog.title }}</h3>
            <p>{{ blog.description }}</p>
          </div>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params, error }) {
    const blogs = await $content('blog', params.slug)
      .only(['title', 'description', 'img', 'slug'])
      .sortBy('createdAt', 'asc')
      .fetch()

      console.log(blogs)

    return { blogs }
  }
}
</script>

<style>
</style>
