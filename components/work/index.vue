<template>
  <div class="work-main">
    <transition name="work-header">
      <h3 v-if="$store.state.work.workLoad">今までに作成したもの</h3>
    </transition>

    <transition name="work-main">
      <div v-if="$store.state.work.workLoad" class="work-main-list">
        <ul>
          <li v-for="(work, index) in $store.state.work.works" :key="work" :data-index="index" @click="workShow(index)">
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
    </transition>

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

.work {
  &-header {
    &-enter {
      opacity:0;
      transform: translate3d(0,-5px,0);
      &-to {
        opacity:1;
        transform: translate3d(0,0,0);
      }
      &-active {
        transition:1s;
        transition-delay:1.4s;
      }
    }
  }

  &-main {
    &-enter {
      opacity:0;
      transform: translate3d(10px,0,0);
      &-to {
        opacity:1;
        transform: translate3d(0,0,0);
      }
      &-active {
        transition:1s;
        transition-delay:1.8s;
      }
    }
  }
}

</style>