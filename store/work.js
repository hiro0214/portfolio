export const state = {
  workLoad: false,
  work: [],
  works: [
    { title: 'ポートフォリオ', about: '自分自身のポートフォリオサイトです。', text: '自身のポートフォリオサイトとして当サイトを作成しました。', back: '自分自身のスキルや制作物をまとめるために作成しました。', img: require('~/assets/portfolio-img.png'), tech: 'Nuxt.js', responsive: '◯', day: '6日', ingenuity: ['SPAでサイトを作成したこと', 'コンポーネントの切り替えや様々なアニメーションを実装できたこと'], url: '', git: 'https://github.com/hiro0214/portfolio' },
    { title: 'ECサイト', about: 'カート機能をつけたECサイトです。', text: 'Nuxt.jsとFirebaseを使って、ECサイトをSPAで作成しました。', back: 'Nuxt.jsを学んだ後に練習としてオリジナルアプリを作りたいと思ったため作成しました。', img: require('~/assets/shop-img.png'), tech: 'Nuxt.js / Firebase', responsive: '◯', day: '6日', ingenuity: ['NuxtとFirebaseを連携させデータの登録を行い、そのデータを閲覧出来るようにしたこと'], url: 'https://shop-6bd36.firebaseapp.com', git: 'https://github.com/hiro0214/shop' },
    { title: '料理レシピサイト', about: 'ユーザーがレシピを投稿出来るサイトを作成しました。', text: 'ユーザーが料理のレシピを投稿、検索することが出来るサイトを作成しました。', back: '普段から料理をする時に、色々なレシピを見つけやすいサイトがあれば良いと思い作成しました。', img: require('~/assets/recipe-img.png'), tech: 'Ruby on Rails / jQuery', responsive: '◯', day: '7日', ingenuity: ['レシピをランダムで表示させ色々なレシピを見つけられるようにしたこと'], url: '', git: 'https://github.com/hiro0214/bon-repas' },
    { title: '某フリマアプリサイト', about: 'スクールの最終課題で作成したクローンサイトです。', text: '本物のサイトと同じようにクローンサイトを作成しました。', back: 'スクールの最終課題であったため作成しました。', img: require('~/assets/mercari-img.png'), tech: 'Ruby on Rails / jQuery / AWS', responsive: '×', day: '4人チームで1ヶ月', ingenuity: ['DB設計や各機能の実装など、自分で考えて実装出来たこと', 'チームとしてメンバーと足並みを揃えながらサイトを作成したこと'], url: 'http://13.115.148.93/', git: 'https://github.com/hiro0214/freemarket_sample_60c' },
    { title: 'タイピングゲーム', about: 'エンジニアがよく使う言葉のタイピングゲームを作りました。', text: 'エンジニアが使う用語やコマンドをタイピングゲームにして作成しました。スコア機能やランキング機能も実装しました。', back: 'エンジニアにとってタイピング速度は大事なもので、それを鍛えることが出来るゲームがあれば良いと思い作成しました。', img: require('~/assets/typing-img.png'), tech: 'Nuxt.js / Firebase', responsive: '×', day: '5日', ingenuity: ['タイピングの判定や画面の表示などが思うように実装出来たこと'], url: '', git: 'https://github.com/hiro0214/typing' }
    // { title: 'ドラクエ風アプリ', about: 'ターミナル上で動くドラクエを作りました。', text: 'Rubyのオブジェクト指向でコマンドだけのドラクエを作成しました。', back: '', img: require('~/assets/dq-img.png'), tech: 'Ruby', responsive: '', day: '1日半', ingenuity: ['', '', ''], url: '', git: '' }
  ]
}
// ドラクエのgit, タイピングのurl

export const mutations = {
  workInit(state) {
    state.workLoad = true
  },
  workOut(state) {
    state.workLoad = false
  },
  workShow(state, payload) {
    state.work = state.works[payload]
  }
}

export const actions = {
  workInit({ commit }) {
    commit('workInit')
  },
  workOut({ commit }) {
    commit('workOut')
  },
  workShow({ commit }, payload) {
    commit('workShow', payload)
  }
}