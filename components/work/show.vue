<template>
  <div class="work-show">
    <div class="work-show-main">
      <div class="detail">
        <img :src="$store.state.work.work.img">
        <table>
          <tr>
            <th>アプリ名</th>
            <td>{{ workShow.title }}</td>
          </tr>
          <tr>
            <th>概要</th>
            <td>{{ workShow.text }}</td>
          </tr>
          <tr v-if="$store.state.work.work.title === '某フリマアプリサイト'">
            <th>ログイン方法</th>
            <td>サイトにはBasic認証がかかっています。<br>ID: mercari<br>Pass: 1031<br><br><b>テストユーザーアカウント</b><br>メールアドレス: 222@mercari.com<br>パスワード: 12345678</td>
          </tr>
          <tr>
            <th>使用した言語</th>
            <td>{{ workShow.tech }}</td>
          </tr>
          <tr>
            <th>制作期間</th>
            <td>{{ workShow.day }}</td>
          </tr>
          <tr v-if="$store.state.work.work.url !== ''">
            <th>URL</th>
            <td><a :href="$store.state.work.work.url" target="_blank">サイトに飛ぶ</a><span>(別タブが開きます)</span></td>
          </tr>
          <tr>
            <th>github</th>
            <td><a :href="$store.state.work.work.git" target="_blank">githubに飛ぶ</a><span>(別タブが開きます)</span></td>
          </tr>
        </table>
        <v-btn @click="workIndex">一覧に戻る</v-btn>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    workShow () {
      return this.$store.state.work.work
    }
  },
  methods: {
    workIndex () {
      this.$parent.currentView = "Home"
    }
  }
}
</script>

<style scoped lang="scss">

.work-show {
  padding:40px;
  background:rgb(240, 240, 240);
  &-main {
    width:75%;
    margin:0 auto;
    padding:20px 0;
    background:#fff;
    .detail {
      width:60%;
      margin:0 auto;
      > img {
        width:80%;
        height:300px;
        border:solid 1px rgb(230, 230, 230);
        display:block;
        margin:0 auto 30px;
      }
      table {
        width:100%;
        margin-bottom:20px;
        border-collapse: collapse;
        th, td {
          height:80px;
          border:solid 1px;
          padding:10px 20px;
        }
        th {
          text-align:left;
          width:40%;
          font-weight: 400;
          background: rgb(248, 248, 248);
        }
        td {
          width:60%;
          > a {
            color:#0099e8;
            text-decoration:none;
            &:hover {
              border-bottom:solid 1px #0099e8;
            }
          }
          > span {
            margin-left:10px;
            font-size:13px;
          }
        }
      }
    }
  }
}
</style>