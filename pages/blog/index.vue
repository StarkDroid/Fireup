<template>
  <div>
    <PageHero title="Static blog using Nuxt Content📕"
    description="Using the Nuxt Content module, We can easily create static blogs using file formats like Markdown,YML,CSV etc. In this code example you can also find Nuxt's dynamic page routing" />
    <div class="container column is-half">
      <div v-for="blog of blogs" :key="blog.slug">
        <nuxt-link :to="{ name: 'blog-slug', params: { slug: blog.slug } }">
          <div class="container p-3">
            <div class="box has-background-info-light">
              <div class="media">
                <div class="media is-left">
                    <img class="image is-128x128" :src="blog.img" />
                </div>
                <div class="media-content column">
                  <div class="content ml-5">
                    <strong>Author: </strong><span class="tag is-success">{{ blog.author }}</span>
                    <h2>{{ blog.title }}</h2>
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
      .only(["title", "description", "img", "slug", "author"])
      .sortBy("createdAt", "asc")
      .fetch();

    console.log(blogs);

    return { blogs };
  },
};
</script>

<style></style>
