<template>
  <div>
    <section class="hero is-medium has-text-centered is-success">
      <div class="hero-body">
        <p class="title is-size-1">Do Something Productive!</p>
        <p class="subtitle container mt-6">
          Times are hard, Especially when you're sitting at home and lazing the
          day out.<br />
          Don't feel like you're being productive? Well this portal should help
          you get yourself going with some or the other task to keep you
          busy.<br />
          There are random <strong>activities</strong> generated, So pick your
          <strong>favourite</strong> and get going!
        </p>
      </div>
    </section>
    <section>
      <nuxt />
    </section>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: "Fireup",
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: "Best place to find fun activities to do to keep yourself productive"
        }
      ]
    }
  }
};
</script>
