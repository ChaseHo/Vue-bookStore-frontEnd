<template>
  <div class="home-container">
    <home-banner></home-banner>
    <part-topic
      v-for="topic of topics"
      :key="topic.name"
      :topic="topic">
    </part-topic>
  </div>
</template>

<script>
  import HomeBanner from '@/components/HomeBanner'
  import PartTopic from '@/components/PartTopic'

  export default {
    name: 'Home',

    components: {
      HomeBanner,
      PartTopic
    },
    
    computed: {
      topics() {
        return this.$store.getters.topics;
      }
    }
  }
</script>

