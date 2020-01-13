<template>
  <div class="about">

    <div class="about-header">
      <div class="title">
        <transition name="title" appear>
          <h2>My Profile</h2>
        </transition>
      </div>
    </div>

    <div class="about-main">

      <transition name="about-main-left" appear>
        <div class="about-main-left">
          <div class="main-img"></div>
          <div class="left-info">
            <span>名前 : ひろ</span>
            <span>年齢 : 27歳</span>
            <span>出身 : 福岡</span>
          </div>
        </div>
      </transition>

      <transition name="about-main-right" appear>
        <div class="about-main-right">
          <h3>自己紹介</h3>
          <transition name="main-first" appear>
            <p>はじめまして、このサイトに訪問して頂いてありがとうございます。<br>
                現在、未経験からエンジニアを目指している「ひろ」と申します。
                私は大学卒業後、九州地盤のドラッグストアに5年ほど勤めました。
                役職として副店長をしており、店舗の運営、管理、教育の他に、医薬品などの接客を行なっておりました。</p>
          </transition>

          <h3>きっかけ...</h3>
          <transition name="main-second" appear>
            <p>エンジニアを目指すようになったきっかけは、何か新しい事に挑戦をしてみたいという思いからでした。
                最初にProgateを始めてみたところ、HTML/CSSを使ってHPを作る事に楽しさを覚えました。元々ものづくりが好きだったということもあり、エンジニアを目指してみたいと思いました。</p>
          </transition>

          <h3>興味があること...</h3>
          <transition name="main-third" appear>
            <p>現在興味があることは、モダンなフロントエンドの技術です。<br>
                勉強を始めた当初はサイトをリッチにすることが出来るjQueryがすごく好きでした。
                もっと色々な事が出来るようにとVue.jsの勉強を始めてみたところ、SPAのWebサイトを高速化にする技術に興味を持ち、スキルを身につけてみたいと思うようになりました。</p>
          </transition>

          <h3>将来像...</h3>
          <transition name="main-fourth" appear>
            <p>将来的にはフロント、バック、インフラの全てが出来るフルスタックエンジニアになりたいと思っています。幅広い経験やスキルによって知見が広がり、より良いものを作っていけると思うからです。</p>
          </transition>
        </div>
      </transition>

    </div>

  </div>
</template>

<style lang="scss" scoped>

.about {
  padding-top:80px;
  &-header {
    background:#102942;
    color:rgb(233, 233, 233);
    height:150px;
    line-height:150px;
  }
  &-main {
    background:rgb(240, 240, 240);
    padding: 20px 120px 50px;
    display:flex;
    &-left {
      width:300px;
      padding-top:30px;
      .main-img {
        width:250px;
        height:250px;
        background:green;
        margin:0 auto;
        border-radius:50%;
      }
      .left-info {
        margin-top:30px;
        text-align:center;
        > span {
          display:block;
          font-size:18px;
          font-weight:600;
        }
      }
      &-enter {
        opacity:0;
        &-to {
          opacity:1;
        }
        &-active {
          transition: 1s;
          transition-delay: 1.6s;
        }
      }
    }
    &-right {
      width:800px;
      margin-left:50px;
      > h3 {
        font-size:28px;
        padding:30px 0 10px;
        position: relative;
        padding-bottom: 0.5em;
        margin-bottom:5px;
        &:after {
          position: absolute;
          content: '';
          left: 0;
          bottom: 0;
          width: 100%;
          height: 7px;
          box-sizing: border-box;
          border-top: 3px solid black;
          border-bottom: 1px solid black;
        }
      }
      > p {
        font-size:18px;
        &::first-letter {
          font-size:26px;
          font-weight:600;
        }
      }
      &-enter {
        opacity:0;
        &-to {
          opacity:1;
        }
        &-active {
          transition: .8s;
          transition-delay: 2.4s;
        }
      }
    }
  }
}

.main-first-enter {
  opacity:0;
  transform: translate3d(100px, 0, 0);
  &-to {
    opacity:1;
    transform: translate3d(0,0,0);
  }
  &-active {
    transition: 1s;
    transition-delay: 2.8s;
  }
}

.main-second-enter {
  opacity:0;
  transform: translate3d(100px, 0, 0);
  &-to {
    opacity:1;
    transform: translate3d(0,0,0);
  }
  &-active {
    transition: 1s;
    transition-delay: 3s;
  }
}

.main-third-enter {
  opacity:0;
  transform: translate3d(100px, 0, 0);
  &-to {
    opacity:1;
    transform: translate3d(0,0,0);
  }
  &-active {
    transition: 1s;
    transition-delay: 3.2s;
  }
}

.main-fourth-enter {
  opacity:0;
  transform: translate3d(100px, 0, 0);
  &-to {
    opacity:1;
    transform: translate3d(0,0,0);
  }
  &-active {
    transition: 1s;
    transition-delay: 3.4s;
  }
}

</style>
