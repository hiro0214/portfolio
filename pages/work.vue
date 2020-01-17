<template>
  <div class="work">

    <div class="contents-header">
      <div class="title">
        <transition name="title" appear>
          <h2>Work</h2>
        </transition>
      </div>
    </div>

    <component :is="currentView" />

  </div>
</template>

<script>
import Home from '~/components/work/index.vue'
import Show from '~/components/work/show.vue'

export default {
  components: {
    Home,
    Show
  },
  mounted () {
    this.$store.dispatch('work/workInit')
  },
  destroyed () {
    this.$store.dispatch('work/workOut')
  },
  data () {
    return {
      currentView: 'Home'
    }
  }
}

</script>

<style lang="scss" scoped>

.work {
  padding-top:80px;
}
</style>