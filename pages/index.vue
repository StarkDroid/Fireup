<template>
  <div>
    <pageHero />
    <section class="container is-primary">
      <DisplayCard :activity="event.activity" :type="event.type" />
    </section>
  </div>
</template>

<script>
import pageHero from "~/components/PageHero.vue";
import DisplayCard from '~/components/DisplayCard.vue';
import axios from "axios"
export default {
  components: { pageHero, DisplayCard },
  data() {
    return {
      event: {}
    }
  },
  async created () {
    try {
      const events = await axios.get("https://www.boredapi.com/api/activity")
      this.event = events.data
      console.log(events.data)
    } catch (error) {
      console.log(error)
    }
  }
};
</script>
