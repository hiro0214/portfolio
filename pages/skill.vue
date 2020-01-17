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

    <transition name="skill-bottom" appear>
      <div class="skill-bottom">
        <div class="skill-bottom-center">
          <p>スキルセット</p>
          <ul>
            <li v-for="content in contents" :key="content">
              <img :src="content.icon">
              <b>{{ content.title }}</b>
              <ul>
                <li v-for="text in content.text" :key="text">{{ text }}</li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </transition>

  </div>
</template>

<script>
export default {
  data () {
    return {
      contents: [
        { title: 'HTML/CSS', icon: require('~/assets/web.png'), text: ["Sassを用いてのcss設計", "レスポンシブ対応", ""]},
        { title: 'JavaScript', icon: require('~/assets/js.png'), text: ["jQueryを用いてシンプルなアクションからAjax通信など", "Vue.js(Nuxt.js)を用いてSPAの開発", ""]},
        { title: 'バックエンド', icon: require('~/assets/db.png'), text: ["Ruby on Railsを用いたCRUD機能", "バリデーションや単体テストの実装", ""]},
        { title: 'ツール', icon: require('~/assets/tool.png'), text: ["SSH、Nginx、Unicornを利用したAWSの経験", "Firebaseによるデータの管理", "githubを用いてのチーム開発経験"]}
      ]
    }
  }
}
</script>

<style lang="scss" scoped>

.skill {
  padding-top:80px;
  text-align:center;
  &-header {
    background:#102942;
    color:rgb(233, 233, 233);
    height:150px;
    line-height:150px;
  }
  > h3 {
    margin: 40px 0 30px;
    display:inline-block;
    border-bottom:solid 1px;
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
        border:solid 1px rgb(180, 180, 180);
        position:relative;
        bottom:10px;
      }
      &:before {
        content:"";
        display:inline-block;
        width:120px;
        border:solid 1px rgb(180, 180, 180);
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
      border-right:solid 4px rgb(180, 180, 180);
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
          border:solid 1px rgb(180, 180, 180);
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
    width:85%;
    margin:0 auto 40px;
    background:rgb(255, 94, 45);
    padding:60px;
    &-center {
      margin:0 auto;
      background:rgb(245, 245, 245);
      > p {
        width:75%;
        font-size:20px;
        padding:20px 0 10px;
        margin:0 auto;
        text-align:center;
        border-bottom:solid 1px;
        font-weight:600;
      }
      > ul {
        display:flex;
        flex-wrap:wrap;
        list-style:none;
        justify-content: center;
        > li {
          width:35%;
          margin:30px 20px;
          text-align:center;
          > b {
            font-size:17px;
            display:block;
            margin:10px 0 5px;
          }
          > ul {
            width:70%;
            margin:0 auto;
            text-align:left;
            word-break:break-all;
            > li {
              color:rgb(50,50,50);
              font-size:15px;
            }
          }
        }
      }
    }
    &-enter {
      opacity:0;
      &-to {
        opacity:1;
      }
      &-active {
        transition:1s;
        transition-delay:3.6s;
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