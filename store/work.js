export const state = {
  workLoad: false,
  work: [],
  works: [
    { title: 'ポートフォリオ', about: '自分自身のポートフォリオサイトです。',text: '自身のポートフォリオサイトとして当サイトを作成しました。', img: require('~/assets/portfolio-img.png'), tech: 'Nuxt.js', day: '5日', url: '', git: 'https://github.com/hiro0214/portfolio' },
    { title: 'Amazon風ECサイト', about: 'カート機能をつけたECサイトです。',text: 'Nuxt.jsとFirebaseを使って、ECサイトをSPAで作成しました。', img: require('~/assets/shop-img.png'), tech: 'Nuxt.js / Firebase', day: '6日', url: 'https://shop-6bd36.firebaseapp.com', git: 'https://github.com/hiro0214/shop' },
    { title: '料理レシピサイト', about: 'ユーザーがレシピを投稿出来るサイトを作成しました。',text: 'ユーザーが料理のレシピを投稿、検索することが出来るサイトを作成しました。', img: require('~/assets/recipe-img.png'), tech: 'Ruby on Rails / jQuery', day: '7日', url: '', git: 'https://github.com/hiro0214/bon-repas' },
    { title: '某フリマアプリサイト', about: 'スクールの最終課題で作成したクローンサイトです。',text: '本物のサイトと同じように出品機能や購入機能を実装しました。', img: require('~/assets/mercari-img.png'), tech: 'Ruby on Rails / jQuery / AWS', day: '4人チームで1ヶ月', url: 'http://13.115.148.93/', git: 'https://github.com/hiro0214/freemarket_sample_60c' },
    { title: 'タイピングゲーム', about: 'エンジニアがよく使う言葉のタイピングゲームを作りました。',text: 'エンジニアが使う用語やコマンドをタイピングゲームにして作成しました。スコア機能やランキング機能も実装しました。', img: require('~/assets/typing-img.png'), tech: 'Nuxt.js / Firebase', day: '5日', url: '', git: 'https://github.com/hiro0214/typing' },
    { title: 'ドラクエ風アプリ', about: 'ターミナル上で動くドラクエを作りました。',text: 'Rubyのオブジェクト指向でコマンドだけのドラクエを作成しました。', img: require('~/assets/dq-img.png'), tech: 'Ruby', day: '1日半', url: '', git: '' }
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