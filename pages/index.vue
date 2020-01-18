<template>
  <div class="home">

    <div class="left-box">
      <transition name="left">
        <div v-if="load" class="left-box-animate"></div>
      </transition>
    </div>

    <div class="right-box">

      <div class="right-box-text">
        <transition name="title-top">
          <div v-if="load" class="right-box-top">
            <transition-group name="textTop" @appear="appearTop">
              <span v-for="(text, index) in textTop" :key="text" :data-index="index">{{ text }}</span>
            </transition-group>
          </div>
        </transition>

        <transition name="title-bottom">
          <div v-if="load" class="right-box-bottom">
            <transition-group name="textBottom" @appear="appearBottom">
              <span v-for="(text, index) in textBottom" :key="text + index" :data-index="index">{{ text }}</span>
            </transition-group>
          </div>
        </transition>
      </div>

    </div>
  </div>
</template>

<style lang="scss" scoped>

.home {
  width:100vw;
  height:100vh;
}

.left {
  &-box {
    background-image: url("~assets/portfolio-img1.jpg");
    background-size:100% 100%;
    width:70%;
    height:80%;
    position:absolute;
    overflow:hidden;
    bottom:0;
    z-index:30;
    &-animate {
      width:100%;
      height:100%;
      position:absolute;
      left:100%;
      background:#102942;
    }
  }
  &-enter {
    left:0;
    &-to {
      left:100%;
    }
    &-active {
      transition: 2s cubic-bezier(.16,.97,.89,.96);
      transition-delay: 3s;
    }
  }
}

.right-box {
  width:80vw;
  height:100vh;
  background:#102942;
  position:absolute;
  right:0;
  &-text {
    position:absolute;
    z-index:30;
    top:40%;
    left:50%;
  }
  span {
    display:inline-block;
    color:#fff;
    font-size:100px;
    font-weight:600;
  }
}

.title {
  &-top-enter {
    opacity:0;
    &-to {
      opacity:1;
    }
    &-active {
      transition: 3s;
      transition-delay: .8s;
    }
  }
  &-bottom-enter {
    opacity:0;
    &-to {
      opacity:1;
    }
    &-active {
      transition: 3s;
      transition-delay: 1.8s;
    }
  }
}

.textTop {
  &-enter {
    transform: rotateY(0deg);
    &-to {
      transform: rotateY(360deg);
    }
    &-active {
      transition:1s;
    }
  }
}

.textBottom {
  &-enter {
    transform: rotateY(0deg);
    &-to {
      transform: rotateY(360deg);
    }
    &-active {
      transition:1s;
    }
  }
}

</style>

<script>
export default {
  mounted () {
    this.load = true
  },
  data () {
    return {
      load: false,
      textTop: ['H', 'i', 'r', 'o', "'", 's'],
      textBottom: ['P', 'o', 'r', 't', 'f', 'o', 'l', 'i', 'o']
    }
  },
  methods: {
    appearTop (el) {
      el.style.transitionDelay = 5000 + 200 * parseInt(el.dataset.index) + 'ms'
    },
    appearBottom (el) {
      el.style.transitionDelay = 6200 + 200 * parseInt(el.dataset.index) + 'ms'
    }
  }
}

</script>