<template>
  <div class="work-main">
    <h3>今までに作成したもの</h3>
    <div class="work-main-list">
      <ul>
        <li v-for="(work, index) in $store.state.work.works" :key="work.id" @click="workShow(index)">
          <div class="list-top">
            <img :src="work.img">
          </div>
          <div class="list-bottom">
            <b>{{ work.title }}</b>
            <p>{{ work.about }}</p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>

export default {
  methods: {
    workShow (index) {
      this.$parent.currentView = "Show"
      this.$store.dispatch('work/workShow', index)
    }
  }
}

</script>

<style scoped lang="scss">

.work {
  &-main {
    padding:40px;
    background:rgb(240, 240, 240);
    h3 {
      text-align:center;
      margin-bottom:30px;
    }
    &-list {
      width:75%;
      margin:0 auto;
      padding:0 20px;
      background:#fff;
      ul {
        display:flex;
        flex-wrap:wrap;
        list-style:none;
        li {
          width:26%;
          min-height:250px;
          margin:20px auto;
          cursor:pointer;
          box-shadow: #cccccc 1px 2px 3px 1px;
          outline: inset rgba(0,149,238,0) 1px;
          transition: outline .2s ease-in;
          .list-top {
            background:skyblue;
            width:100%;
            height:180px;
            border-bottom:solid 1px rgb(220, 220, 220);
            > img {
              width:100%;
              height:100%;
            }
          }
          .list-bottom {
            padding:5px 10px;
            > p {
              font-size:14px;
            }
          }
          &:hover {
            outline: inset rgb(0,149,238) 1px;
            transition: outline .2s ease-out;
          }
        }
      }
    }
  }
}

</style>