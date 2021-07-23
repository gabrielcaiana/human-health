<template>
  <v-container class="login" v-resize="onResize">
    <v-row>
      <v-col xl="5" lg="5" md="5" sm="6">
        <v-form
          class="login__form"
          @submit.prevent="login"
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
              :rules="[required]"
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
      <v-col xl="7" lg="7" md="7" sm="6" v-if="innerWidth >= 600">
        <img
          class="login__ilustration"
          src="@/assets/ilustrations/login.svg"
          alt="Praticando exercicio físico"
        />
      </v-col>

      <v-col class="login__footer">
        <p>© Human Health {{ currentYear }}. Todos os direitos reservados</p>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import rulesMixin from "@/mixins/rules-mixin";
export default {
  mixins: [rulesMixin],

  components: {
    BaseButton: () => import("@/components/commons/base-button.vue"),
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
  align-items: center;

  &__form {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  &__ilustration {
    width: 80%;
    max-width: 900px;
  }
}
</style>
