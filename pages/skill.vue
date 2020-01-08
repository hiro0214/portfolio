<template>
  <div class="skill">

    <div class="skill-header">
      <div class="title">
        <transition name="title" appear>
          <h2>SKILL</h2>
        </transition>
      </div>
    </div>

    <transition name="skill-main" appear>
      <h3>プログラミングの学習履歴</h3>
    </transition>
    <div class="skill-main">
      <div class="skill-main-left">

        <transition name="skill-main-left-first" appear>
          <div>
            <p>2019年 4月~ : HTML/CSS/JavaScript</p>
            <span>Progate、ドットインストールにて基礎を学ぶ</span>
          </div>
        </transition>

        <transition name="skill-main-left-second" appear>
          <div>
            <p class="second">2019年 8月~ : Ruby on Rails/jQuery</p>
            <span>スクールに入り、Webアプリを作成する</span>
          </div>
        </transition>

        <transition name="skill-main-left-third" appear>
          <div>
            <p class="third">2019年 9月~ : AWS/Python</p>
            <span>スクールにてAWSを学びデプロイを行う<br>pythonの参考書を2冊購入し学ぶ</span><br>
          </div>
        </transition>

        <transition name="skill-main-left-fourth" appear>
          <div>
            <p class="fourth">2019年 10月~ : スクールの最終課題</p>
            <span>某フリマサイトのクローンサイトを作成する</span>
          </div>
        </transition>
      </div>

      <transition name="skill-main-center" appear>
        <div class="skill-main-center"></div>
      </transition>

      <div class="skill-main-right">
        <transition name="skill-main-right-first" appear>
          <div>
            <p class="first right-border">2019年 6月~ : PHP</p>
            <span>PHPの参考書を3冊購入し学ぶ</span>
          </div>
        </transition>

        <transition name="skill-main-right-second" appear>
          <div>
            <p class="fifth right-border">2019年 11月~ : 個人アプリの作成/Vue.js</p>
            <span>Railsを用いてオリジナルのアプリを作成<br>Vue.jsの参考書を購入し学ぶ<br>Nuxt.jsを勉強しアプリの作成を行う</span>
          </div>
        </transition>
      </div>
    </div>

    <div class="skill-bottom">
      <div class="skill-bottom-center">
        <div v-for="content in contents" :key="content">
          <img :src="content.icon">
          <br>
          <span>{{ content.title }}</span>
          <p>・{{ content.text1 }}</p>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  data () {
    return {
      contents: [
        { title: 'HTML/CSS', icon: require('~/assets/html-css.png'), text1: 'レスポンシブ対応可能'},
        { title: 'JavaScript', icon: require('~/assets/js.png'), text1: 'jQuery➡︎Ajax可'},
        { title: 'Ruby', icon: require('~/assets/ruby.jpeg'), text1: 'ddd'},
        { title: 'PHP', icon: require('~/assets/php.png'), text1: 'eee'},
        { title: 'AWS', icon: require('~/assets/aws.jpg'), text1: 'fff'},
        { title: 'SQL', icon: require('~/assets/sql.png'), text1: 'ggg'}
      ]
    }
  }
}
</script>

<style lang="scss" scoped>

.skill {
  padding-top:80px;
  &-header {
    background:#102942;
    color:rgb(233, 233, 233);
    height:150px;
    line-height:150px;
  }
  > h3 {
    margin: 40px 0 30px;
    text-align:center;
  }
  &-main {
    display:flex;
    justify-content: center;
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
    p {
      font-size:18px;
      font-weight:600;
      position:relative;
      &:after {
        content:"";
        display:inline-block;
        width:100%;
        border:solid 1px rgb(199, 199, 199);
        position:relative;
        bottom:10px;
      }
      &:before {
        content:"";
        display:inline-block;
        width:120px;
        border:solid 1px rgb(179, 179, 179);
        transform: rotate(40deg);
        position:absolute;
        top:70px;
        right:-106px;
      }
    }
    span {
      font-size:15px;
      position:relative;
      bottom:10px;
    }
    &-center {
      height:750px;
      border-right:solid 4px rgb(179, 179, 179);
      margin:0 90px;
      &-enter {
        height:0px;
        &-to {
          height:750px;
        }
        &-active {
          transition:1.2s;
          transition-delay: 1.8s;
        }
      }
    }
    &-left {
      width:350px;
      height:750px;
      &-first-enter {
        opacity:0;
        &-to {
          opacity:1;
        }
        &-active {
          transition:1s;
          transition-delay:2.2s;
        }
      }
      &-second-enter {
        opacity:0;
        &-to {
          opacity:1;
        }
        &-active {
          transition:1s;
          transition-delay:2.6s;
        }
      }
      &-third-enter {
        opacity:0;
        &-to {
          opacity:1;
        }
        &-active {
          transition:1s;
          transition-delay:2.8s;
        }
      }
      &-fourth-enter {
        opacity:0;
        &-to {
          opacity:1;
        }
        &-active {
          transition:1s;
          transition-delay:3.0s;
        }
      }
    }
    &-right {
      width:350px;
      height:750px;
      .right-border {
        &:before {
          content:"";
          display:inline-block;
          width:120px;
          border:solid 1px rgb(179, 179, 179);
          transform: rotate(-40deg);
          position:absolute;
          top:70px;
          left:-105px;
        }
      }
      &-first-enter {
        opacity:0;
        &-to {
          opacity:1;
        }
        &-active {
          transition:1s;
          transition-delay:2.4s;
        }
      }
      &-second-enter {
        opacity:0;
        &-to {
          opacity:1;
        }
        &-active {
          transition:1s;
          transition-delay:3.2s;
        }
      }
    }
  }

  &-bottom {
    background:rgb(24, 116, 62);
    padding:60px 0;
    &-center {
      width:85%;
      padding: 30px 0;
      margin:0 auto;
      background:rgb(238, 238, 238);
      display:flex;
      flex-wrap: wrap;
      justify-content: center;
      div {
        width:23%;
        height:300px;
        background:#fff;
        margin:30px 20px;
        padding:20px;
        border:solid 1px;
        text-align:center;
        img {
          width:85%;
          height:150px;
        }
        span {
          font-weight:600;
        }
        p {
          width:100%;
          text-align:left;
          word-break:break-all;
        }
      }
    }
  }
}


.first {
  margin-top:100px;
}

.second {
  margin-top:130px;
}

.third {
  margin-top:30px;
}

.fourth {
  margin-top:30px;
}

.fifth {
  margin-top:380px;
}
</style>