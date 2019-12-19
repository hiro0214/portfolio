<template>
  <div class="default">
    <header>
      <ul>
        <li v-for="tab in tabs" :key="tab.title">
          <nuxt-link :to="tab.link">
            {{ tab.title }}
          </nuxt-link>
        </li>
      </ul>
    </header>

    <nuxt />

  </div>
</template>

<script>
export default {
  data () {
    return {
      tabs: [
        {title: 'HOME', link: {name: 'index'}},
        {title: 'ABOUT', link: {name: 'about'}},
        {title: 'SKILL', link: {name: 'skill'}},
        {title: 'WORK', link: {name: 'work'}},
        {title: 'CONTACT', link: {name: 'contact'}}
      ]
    }
  }
}
</script>

<style scoped lang="scss">

header {
  position:fixed;
  right:0;
  z-index:100;
  ul {
    background:#fff;
    height:60px;
    padding-top:20px;
    list-style-type: none;
    display:flex;
    justify-content:flex-end;
    li {
      margin:0 20px;
      a {
        color:black;
        text-decoration: none;
      }
    }
  }
}

.nuxt-link-exact-active {
  color:#1e50a2;
  padding-bottom:5px;
  border-bottom:solid 1px;
}

</style>