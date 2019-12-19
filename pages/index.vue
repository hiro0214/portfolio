<template>
  <div class="home">

    <div class="left-box">
      <transition name="left" appear>
        <div class="left-box-animate"></div>
      </transition>
    </div>

    <div class="right-box">
      <transition name="index-title-top" appear>
        <h1>Hiro's</h1>
      </transition>
      <transition name="index-title-bottom" appear>
        <h1>Portfolio</h1>
      </transition>
    </div>
  </div>
</template>

<style lang="scss" scoped>

.home {
  width:100vw;
  height:100vh;
}

.left-box {
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
    margin-left:1050px;
    background:#102942;
  }
}

.left-enter-active {
  transition: 2s cubic-bezier(.16,.97,.89,.96);
  transition-delay: 3s;
}

.left-enter {
  margin-left:0px;
}

.left-enter-to {
  margin-left:1050px;
}

.right-box {
  width:80vw;
  height:100vh;
  background:#102942;
  position:absolute;
  right:0;
  > h1 {
    color:#fff;
    font-size:100px;
    position:relative;
    top:40%;
    left:50%;
    z-index:50;
  }
}

.index-title-top-enter-active {
  transition: 3s;
  transition-delay: .8s;
}

.index-title-top-enter {
  opacity:0;
}

.index-title-top-enter-to {
  opacity:1;
}

.index-title-bottom-enter-active {
  transition: 3s;
  transition-delay: 1.8s;
}

.index-title-bottom-enter {
  opacity:0;
}

.index-title-bottom-enter-to {
  opacity:1;
}

</style>
