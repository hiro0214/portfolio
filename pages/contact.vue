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
                @click="sendMail()"
                block
                large
                class="mt-4 font-weight-bold"
              >送信
              </v-btn>
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
      nameRules: [v => !!v || '名前は必須項目です'],
      emailRules: [v => !!v || 'メールアドレスは必須項目です'],
      contentsRules: [v => !!v || '内容は必須項目です']
    }
  }),
  methods: {
    sendMail: function () {
      if (this.$refs.form.validate()) {
        const mailer = functions.httpsCallable('sendMail')

        mailer(this.contactForm)
          .then(() => {
            this.formReset()
          })
          .catch(err => {
            console.log(err)
          })
      }
    },
    formReset: function () {
      this.$refs.form.reset()
    }
  }
}

</script>