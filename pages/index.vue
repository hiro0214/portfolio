<template>
  <div class="home">

    <div class="left-box">
      <transition name="left" appear>
        <div class="left-box-animate"></div>
      </transition>
    </div>

    <div class="right-box">

      <div class="right-box-text">
        <transition name="title-top" appear>
          <div class="right-box-top">
            <transition name="top-h" appear>
              <span>H</span>
            </transition>
            <transition name="top-i" appear>
              <span>i</span>
            </transition>
            <transition name="top-r" appear>
              <span>r</span>
            </transition>
            <transition name="top-o" appear>
              <span>o</span>
            </transition>
            <transition name="top-1" appear>
              <span>'</span>
            </transition>
            <transition name="top-s" appear>
              <span>s</span>
            </transition>
          </div>
        </transition>

        <transition name="title-bottom" appear>
          <div class="right-box-bottom">
            <transition name="bottom-p" appear>
              <span>P</span>
            </transition>
            <transition name="bottom-o1" appear>
              <span>o</span>
            </transition>
            <transition name="bottom-r" appear>
              <span>r</span>
            </transition>
            <transition name="bottom-t" appear>
              <span>t</span>
            </transition>
            <transition name="bottom-f" appear>
              <span>f</span>
            </transition>
            <transition name="bottom-o2" appear>
              <span>o</span>
            </transition>
            <transition name="bottom-l" appear>
              <span>l</span>
            </transition>
            <transition name="bottom-i" appear>
              <span>i</span>
            </transition>
            <transition name="bottom-o3" appear>
              <span>o</span>
            </transition>
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
    background-size:70vw 80vh;
    width:70vw;
    height:80vh;
    position:absolute;
    bottom:0;
    z-index:30;
    &-animate {
      width:100%;
      height:100%;
      transform: translate3d(1050px, 0, 0);
      background:#102942;
    }
  }
  &-enter {
    transform: translate3d(0, 0, 0);
    &-to {
      transform: translate3d(1050px, 0, 0);
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

.top {
  &-h-enter {
    transform: rotateY(0deg);
    &-to {
      transform: rotateY(360deg);
    }
    &-active {
      transition:1s;
      transition-delay:5s;
    }
  }
  &-i-enter {
    transform: rotateY(0deg);
    &-to {
      transform: rotateY(360deg);
    }
    &-active {
      transition:1s;
      transition-delay:5.2s;
    }
  }
  &-r-enter {
    transform: rotateY(0deg);
    &-to {
      transform: rotateY(360deg);
    }
    &-active {
      transition:1s;
      transition-delay:5.4s;
    }
  }
  &-o-enter {
    transform: rotateY(0deg);
    &-to {
      transform: rotateY(360deg);
    }
    &-active {
      transition:1s;
      transition-delay:5.6s;
    }
  }
  &-1-enter {
    transform: rotateY(0deg);
    &-to {
      transform: rotateY(360deg);
    }
    &-active {
      transition:1s;
      transition-delay:5.8s;
    }
  }
  &-s-enter {
    transform: rotateY(0deg);
    &-to {
      transform: rotateY(360deg);
    }
    &-active {
      transition:1s;
      transition-delay:6s;
    }
  }
}

.bottom {
  &-p-enter {
    transform: rotateY(0deg);
    &-to {
      transform: rotateY(360deg);
    }
    &-active {
      transition:1s;
      transition-delay:6.2s;
    }
  }
  &-o1-enter {
    transform: rotateY(0deg);
    &-to {
      transform: rotateY(360deg);
    }
    &-active {
      transition:1s;
      transition-delay:6.4s;
    }
  }
  &-r-enter {
    transform: rotateY(0deg);
    &-to {
      transform: rotateY(360deg);
    }
    &-active {
      transition:1s;
      transition-delay:6.6s;
    }
  }
  &-t-enter {
    transform: rotateY(0deg);
    &-to {
      transform: rotateY(360deg);
    }
    &-active {
      transition:1s;
      transition-delay:6.8s;
    }
  }
  &-f-enter {
    transform: rotateY(0deg);
    &-to {
      transform: rotateY(360deg);
    }
    &-active {
      transition:1s;
      transition-delay:7.0s;
    }
  }
  &-o2-enter {
    transform: rotateY(0deg);
    &-to {
      transform: rotateY(360deg);
    }
    &-active {
      transition:1s;
      transition-delay:7.2s;
    }
  }
  &-l-enter {
    transform: rotateY(0deg);
    &-to {
      transform: rotateY(360deg);
    }
    &-active {
      transition:1s;
      transition-delay:7.4s;
    }
  }
  &-i-enter {
    transform: rotateY(0deg);
    &-to {
      transform: rotateY(360deg);
    }
    &-active {
      transition:1s;
      transition-delay:7.6s;
    }
  }
  &-o3-enter {
    transform: rotateY(0deg);
    &-to {
      transform: rotateY(360deg);
    }
    &-active {
      transition:1s;
      transition-delay:7.8s;
    }
  }
}

</style>
