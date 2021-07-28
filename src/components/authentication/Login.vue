<template>
    <v-col class="login__form" xl="5" lg="5" md="5" sm="6">
      <img class="login__logo" src="@/assets/Logo.svg" alt="Human Health">
      <p>Informe seu email e senha para realizar o login</p>
      <v-form
        @submit.prevent="login"
        ref="form"
        lazy-validation
        v-model="valid"
      >
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
          <v-btn
            class="login__forgot--button pa-0"
            text
            color="primary"
            @click="openDialog"
          >
            <v-icon left color="primary">mdi-lock-outline</v-icon>
            Esqueci minha senha
          </v-btn>
        </div>
        <v-divider class="my-5"></v-divider>
        <BaseButton text block color="primary" @click="createAcccount" title="Criar uma nova conta">
          <v-icon> mdi-cloud-upload </v-icon>
        </BaseButton>
      </v-form>
      <AppDialogForgotPassword :dialog="dialog" @close="closeDialog()" />
    </v-col>
</template>

<script>
import rulesMixin from "@/mixins/rules-mixin";
export default {
  mixins: [rulesMixin],

  components: {
    BaseButton: () => import("@/components/commons/base-button.vue"),
    AppDialogForgotPassword: () =>
      import("@/components/account/app-dialog-forgot-password"),
  },

  data: () => ({
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

    createAcccount() {
      this.$emit('currentComponent', 'Register')
    }
  },
};
</script>

<style lang="scss" scoped>
.login {
  &__logo {
    max-width: 350px;
    font-size: 2.5rem;
    font-weight: bold;
    margin: 1rem 0;

    span {
      color: var(--v-primary-base);
    }
  }

  &__form {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  &__forgot {
    display: flex;
    justify-content: flex-start;
    margin-top: 1rem;

    &--button {
      font-size: 0.875rem;
    }
  }
}
</style>
