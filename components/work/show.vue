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

          <tr>
            <th>作成に至った経緯</th>
            <td>{{ workShow.back }}</td>
          </tr>

          <tr v-if="$store.state.work.work.title === '某フリマアプリサイト'">
            <th>ログイン方法</th>
            <td>サイトにはBasic認証がかかっています。<br>ID: mercari<br>Pass: 1031<br><br><b>テストユーザーアカウント</b><br>メールアドレス: 222@mercari.com<br>パスワード: 12345678</td>
          </tr>

          <tr>
            <th>使用したスキル</th>
            <td>{{ workShow.tech }}</td>
          </tr>

          <tr v-if="$store.state.work.work.responsive !== ''">
            <th>レスポンシブ対応</th>
            <td>{{ workShow.responsive }}</td>
          </tr>

          <tr>
            <th>制作期間</th>
            <td>{{ workShow.day }}</td>
          </tr>

          <tr v-if="$store.state.work.work.title === '某フリマアプリサイト'">
            <th>担当箇所</th>
            <td>
              <b>フロントエンド</b>
              <li>会員登録、ログイン画面のマークアップ</li>
              <li>jQueryの範囲全て</li>
              <br>
              <b>バックエンド</b>
              <li>商品一覧、商品詳細ページ</li>
              <li>商品出品機能、商品購入機能</li>
              <li>カテゴリー機能、パンくず</li>
              <li>いいね機能</li>
              <br>
              <b>その他</b>
              <li>AWSを使用してデプロイ</li>
              <li>DB設計</li>
              <li>タスク管理</li>
              <li>コードレビュー</li>
            </td>
          </tr>

          <tr>
            <th>工夫したところ</th>
            <td>
              <ul>
                <li v-for="text in workShow.ingenuity" :key="text">{{ text }}</li>
              </ul>
            </td>
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
          > ul {
            padding-left:10px;
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