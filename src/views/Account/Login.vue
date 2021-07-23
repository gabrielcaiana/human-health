<template>
  <v-container class="login" v-resize="onResize">
    <v-row>
      <v-col class="login__form" xl="5" lg="5" md="5" sm="6">
        <p class="login__logo"><span>H</span>uman<span> H</span>ealth</p>
        <p>Informe seu email e senha para realizar o login</p>
        <v-form @submit.prevent="login" ref="form" lazy-validation v-model="valid">
          <div>
            <v-text-field
              outlined
              required
              id="email"
              label="Email"
              type="text"
              v-model="form.email"
              :rules="[required, email]"
            >
            </v-text-field>
            <v-text-field
              outlined
              required
              id="password"
              label="Senha"
              :rules="[required]"
              :append-icon="show ? `visible_off` : `visibility`"
              :type="show ? `text` : `password`"
              v-model="form.password"
              @click:append="show = !show"
            >
            </v-text-field>

            <BaseButton
              type="submit"
              block
              color="primary"
              :disabled="!valid"
              title="Entrar"
            />
          </div>

          <div class="login__forgot">
            <v-btn text color="secondary" @click="openDialog">
              <v-icon left color="primary">mdi-lock-outline</v-icon>
              Esqueci minha senha
            </v-btn>
          </div>
        </v-form>
      </v-col>
      <v-col
        class="login__ilustration"
        xl="7"
        lg="7"
        md="7"
        sm="6"
        v-if="innerWidth >= 600"
      >
        <img
        class="login__ilustration--img"
          src="@/assets/ilustrations/login.svg"
          alt="Praticando exercicio físico"
        />
      </v-col>
    </v-row>
    <p class="login__footer">
      © Human Health {{ currentYear }}. Todos os direitos reservados
    </p>

    <AppDialogForgotPassword :dialog="dialog" @close="closeDialog()" />
  </v-container>
</template>

<script>
import rulesMixin from "@/mixins/rules-mixin";
export default {
  mixins: [rulesMixin],

  components: {
    BaseButton: () => import("@/components/commons/base-button.vue"),
     AppDialogForgotPassword: () => import('@/components/account/app-dialog-forgot-password'),
  },

  data: () => ({
    currentYear: new Date().getFullYear(),
    innerWidth: 0,
    valid: true,
    show: false,
    dialog: false,
    form: {
      email: "",
      password: "",
    },
  }),

  methods: {
    login() {
      if (!this.$refs.form.validate(true)) return;

      console.log(this.form);
    },

    openDialog() {
      this.dialog = !this.dialog;
    },

    closeDialog() {
      this.dialog = !this.dialog;
    },

    onResize() {
      this.innerWidth = window.innerWidth;
    },
  },
};
</script>

<style lang="scss" scoped>
.login {
  height: 100vh;
  display: flex;
  flex-direction: column;

  &__logo {
    font-size: 2.5rem;
    font-weight: bold;

    span {
      color: var(--v-primary-base);
    }
  }

  &__form {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  &__ilustration {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 80%;
    max-width: 900px;

    &--img {
      width: 80%;
    }
  }

  &__forgot {
    display: flex;
    justify-content: center;
    margin-top: 1rem;
  }

  &__footer {
    text-align: center;
  }
}
</style>
