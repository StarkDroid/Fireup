<template>
  <div>
    <section class="hero is-small has-text-centered custom-bg">
      <div class="hero-head">
        <nav class="navbar">
          <div class="container is-mobile">
            <div class="navbar-end">
              <button @click="isAboutModalActive=true" class="button is-success is-rounded ml-2 mt-2 navbar-item">
                ❔About
              </button>
            </div>
          </div>
        </nav>
      </div>
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
            <li><nuxt-link class="has-text-black" to="/">Activities</nuxt-link></li>
            <li><nuxt-link class="has-text-black" to="bucket-list">Bucket List</nuxt-link></li>
            <li><nuxt-link class="has-text-black" to="blog">Blog</nuxt-link></li>
            </ul>
          </div>
        </nav>
      </div>
    </section>

    <!-- About Modal -->
    <b-modal v-model="isAboutModalActive">
      <div class="box">
        <article class="media">
          <div class="media-left">
            <figure class="image is-64x64">
              <img src="@/static/avatar.png" alt="avatar">
            </figure>
          </div>
          <div class="media-content">
            <div class="content">
              <p><strong>😄 Trishiraj</strong> <small>Git@StarkDroid</small><br>
              Hey guys! If by any chance you stumbled upon here and are wondering what purpose does this serve.
              Then to put it simply, This will be a <strong>progressive implementation</strong> of anything and everything that <strong>NuxtJS</strong>
              has to offer. To keep it simple, Everything is <strong>categorised</strong> by <strong>tabs</strong><br>
              <br>
              This is just in hopes of getting beginners who want to or are starting with NuxtJS a little help in quickly grasp the basic to intermediate concepts of NuxtJS by setting up <strong>live example</strong>. Technically this is my first time and this is how I am learning this. With that being said, Anyone is very welcome to
              <strong>contribute</strong> in this repository with their own piece of code that may be an added bonus for this project.
              <br><br>
              Thanks!
              </p>
            </div>
          </div>
        </article>
      </div>
    </b-modal>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isAboutModalActive: false
    }
  }
};
</script>

<style scoped>
.custom-bg {
  background-color: #3d5afe;
}

a.nuxt-link-exact-active {
  font-weight: bold;
  color: white;
  background-color: #00c58e;
}
</style>
