<template>

  <v-app class="contact">

    <div class="contents-header">
      <div class="contact-title">
        <transition name="contact-title" appear>
          <h2>Contact</h2>
        </transition>
      </div>
    </div>

    <transition name="contact-contents" appear>
      <div class="contact-contents">
        <p>ご要件がある方はこちらにお願い致します。</p>

          <v-flex>
            <v-card>
              <v-card-text>
                <v-form ref="form" v-model="contactFormValidation.valid" lazy-validation>
                  <v-text-field
                    v-model="contactForm.name"
                    :rules="contactFormValidation.nameRules"
                    label="名前"
                    required
                  ></v-text-field>
                  <v-text-field
                    v-model="contactForm.email"
                    :rules="contactFormValidation.emailRules"
                    label="メールアドレス"
                    required
                  ></v-text-field>
                  <v-textarea
                    v-model="contactForm.contents"
                    :rules="contactFormValidation.contentsRules"
                    label="内容"
                    required
                  ></v-textarea>
                  <v-btn
                    :disabled="!contactFormValidation.valid"
                    @click="clickSubmit()"
                    block
                    color="info"
                    class="contact-submit"
                  >送信
                  </v-btn>
                </v-form>
              </v-card-text>

              <v-snackbar v-model="snackbar.show" :color="snackbar.color" :timeout="5000" class="font-weight-bold">
                {{ snackbar.message }}
              </v-snackbar>

              <v-dialog v-model="dialog" max-width="400">
                <v-card>
                  <v-card-title>この内容でお問い合わせをしてもよろしいですか？</v-card-title>
                  <v-card-actions :class="`d-flex justify-center`">
                    <v-btn color="error" @click="dialog = false" class="font-weight-bold">
                      キャンセル
                    </v-btn>
                    <v-btn color="success" @click="sendMail()" class="font-weight-bold">
                      送信する
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </v-dialog>

            </v-card>
          </v-flex>

      </div>
    </transition>

  </v-app>
</template>

<style lang="scss" scoped>

.contact {
  padding-top:80px;
  background:rgb(240, 240, 240);
  &-contents {
    background:rgb(200, 200, 200);
    width:60%;
    min-height:500px;
    padding:40px;
    margin:40px auto 0;
    p {
      font-size:18px;
      color:rgb(50, 50, 50);
      text-align:center;
      font-weight:600;
      margin-bottom:20px;
    }
    &-enter {
      opacity:0;
      &-to {
        opacity:1;
      }
      &-active {
        transition:1s;
        transition-delay: 1.4s;
      }
    }
  }

  .flex {
    width:80%;
    margin:0 auto;
  }

  &-submit {
    margin-top:20px;
    color:#fff;
    font-weight:600;
  }
}

</style>

<script>
import { functions } from '@/plugins/firebase'

export default {
  data: () => ({
    contactForm: {
      name: '',
      contents: '',
      email: ''
    },
    contactFormValidation: {
      valid: false,
      nameRules: [
        v => !!v || '名前は必須項目です',
        v => (v && v.length <= 20) || "20文字以内で入力してください"
      ],
      emailRules: [
        v => !!v || 'メールアドレスは必須項目です',
        v => /.+@.+/.test(v) || 'メールアドレスを正しく入力してください'
      ],
      contentsRules: [
        v => !!v || '内容は必須項目です',
        v => (v && v.length <= 2000) || "2000文字以内で入力してください"
      ]
    },
    snackbar: {
      show: false,
      color: '',
      message: ''
    },
    dialog: false
  }),
  methods: {
    clickSubmit() {
      if (this.$refs.form.validate()) {
        this.dialog = true
      }
    },
    sendMail: function () {
      const mailer = functions.httpsCallable('sendMail')
      mailer(this.contactForm)
        .then(() => {
          this.formReset()
          this.dialog = false
          this.showSnackbar('success', 'お問い合わせありがとうございます。送信完了しました')
        })
        .catch(err => {
          this.showSnackbar('error', '送信に失敗しました。')
          console.log(err)
        })
    },
    showSnackbar (color, message) {
      this.snackbar.show = true
      this.snackbar.color = color
      this.snackbar.message = message
    },
    formReset: function () {
      this.$refs.form.reset()
    }
  }
}

</script>