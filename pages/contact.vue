<template>
  <div class="contact">

    <div class="contact-header">
      <div class="title">
        <transition name="title" appear>
          <h2>Contact</h2>
        </transition>
      </div>
    </div>

    <div class="contact-contents">
      <h3>ご要件がある方はこちらにお願いいたします。</h3>
      <v-flex>
        <v-card>
          <v-card-text>
            <v-form>
              <v-text-field v-model="name" label="お名前" />
              <v-text-field v-model="email" label="メールアドレス" />
              <v-textarea label="内容" />
              <v-btn>送信</v-btn>
            </v-form>
          </v-card-text>
        </v-card>
      </v-flex>
    </div>

  </div>
</template>

<style lang="scss" scoped>

.contact {
  padding-top:80px;
  &-header {
    background:#102942;
    color:rgb(233, 233, 233);
    height:150px;
    line-height:150px;
  }
  &-contents {
    background:#6a7980;
    width:60%;
    min-height:500px;
    padding:40px;
    margin:40px auto 0;
    h3 {
      text-align:center;
      margin-bottom:20px;
      color:rgb(226, 226, 226);
    }
  }
  .flex {
    width:60%;
    margin:0 auto;
  }
}

</style>