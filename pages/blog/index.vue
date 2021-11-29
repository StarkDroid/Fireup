<template>
  <div>
    <PageHero />
    <div class="container column is-half">
      <div v-for="blog of blogs" :key="blog.slug">
        <nuxt-link :to="{ name: 'blog-slug', params: { slug: blog.slug } }">
          <div class="container">
            <div class="box has-background-info-light">
              <div class="media">
                <div class="media is-left">
                    <img class="image is-128x128" :src="blog.img" />
                </div>
                <div class="media-content column is-vcentered">
                  <div class="content ml-5">
                    <h3>{{ blog.title }}</h3>
                    <p>{{ blog.description }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params, error }) {
    const blogs = await $content("blog", params.slug)
      .only(["title", "description", "img", "slug"])
      .sortBy("createdAt", "asc")
      .fetch();

    console.log(blogs);

    return { blogs };
  },
};
</script>

<style></style>
