# 概要
- Nuxt.jsを使用して自身のポートフォリオサイトとして当サイトを作成しました。

## 工夫したところ
- アニメーションを使用して、ページの表示を動的にしたこと。
- WORKのページでリストをクリックすることで、コンポーネントを動的に切り替えたこと。
  - リストをクリックした時にv-forで展開表示しているリストのインデックス番号を取得し、対応した詳細ページのコンポーネントを表示するようにしています。
- お問い合わせフォームを作成したこと。
  - お問い合わせフォームに入力されたデータを私のメールアドレスに自動送信されるように関数を作成しました。

## 使用したライブラリ、プラグイン
- Sass
  - サイトのコーディングの際に使用しました。
- vue-mq
  - レスポンシブ対応をする時に、ブレークポイント毎の表示を変更する際に使用しました。
- Firebase
  - お問い合わせフォームを作成する際にFirebaseのFunctionsを使用しました。
- dotenv
  - Firebaseの設定を環境変数にする際に使用しました。


## その他
- 制作期間
  - 7日ほど