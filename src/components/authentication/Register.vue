<template>
  <v-col class="register__form" xl="5" lg="5" md="5" sm="6">
    <h1 class="register__form--title">
      Preencha o formulário abaixo para criar sua conta
    </h1>
    <v-form @submit.prevent="" ref="form" lazy-validation v-model="valid">
      <v-row>
        <v-col cols="12" sm="6">
          <v-text-field
            outlined
            required
            id="nome"
            label="Nome"
            type="text"
            v-model="form.nome"
            :rules="[required]"
          >
          </v-text-field>
        </v-col>
        <v-col cols="12" sm="6">
          <v-menu
            ref="menu"
            v-model="menu"
            :close-on-content-click="false"
            :return-value.sync="form.dataNascimento"
            transition="scale-transition"
            offset-y
            min-width="auto"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-text-field
                v-model="form.dataNascimento"
                outlined
                label="Data de nascimento"
                append-icon="mdi-calendar"
                readonly
                v-bind="attrs"
                v-on="on"
              ></v-text-field>
            </template>
            <v-date-picker v-model="form.dataNascimento" no-title scrollable>
              <v-spacer></v-spacer>
              <v-btn text color="grey" @click="menu = false"> Fechar </v-btn>
              <v-btn text color="primary" @click="$refs.menu.save(form.dataNascimento)">
                OK
              </v-btn>
            </v-date-picker>
          </v-menu>
        </v-col>
        <v-col cols="12" sm="6">
          <v-text-field
            outlined
            required
            id="altura"
            label="altura"
            type="number"
            v-model="form.altura"
            :rules="[required]"
          >
          </v-text-field>
        </v-col>
        <v-col cols="12" sm="6">
          <v-select :items="items" v-model="form.genero" label="Gênero" outlined></v-select>
        </v-col>
        <v-col cols="12">
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
        </v-col>
        <v-col cols="12" sm="6">
          <v-text-field
            outlined
            required
            id="password"
            label="Senha"
            :rules="[required]"
            :append-icon="show ? `visible_off` : `visibility`"
            :type="show ? `text` : `password`"
            v-model="form.senha"
            @click:append="show = !show"
          >
          </v-text-field>
        </v-col>
               <v-col cols="12" sm="6">
          <v-text-field
            outlined
            required
            id="password"
            label="Confirmar senha"
            :rules="[required]"
            :append-icon="show ? `visible_off` : `visibility`"
            :type="show ? `text` : `password`"
            v-model="form.confiSenha"
            @click:append="show = !show"
          >
          </v-text-field>
        </v-col>

        <BaseButton
          type="submit"
          block
          color="primary"
          :disabled="!valid"
          title="Criar conta"
          @click="createAcccount"
        />
      </v-row>
      <v-row>
        <v-col cols="12" class="px-0 py-4">
          <BaseButton
            outlined
            block
            color="primary"
            @click="back"
            title="Voltar para o login"
          >
            <v-icon> mdi-cloud-upload </v-icon>
          </BaseButton>
        </v-col>
      </v-row>
    </v-form>
  </v-col>
</template>

<script>
import rulesMixin from "@/mixins/rules-mixin";
export default {
  mixins: [rulesMixin],

  components: {
    BaseButton: () => import("@/components/commons/base-button.vue"),
  },

  data: () => ({
    valid: true,
    show: false,
    dialog: false,
    menu: false,
    form: {
      nome: "",
      dataNascimento: "",
      altura: "",
      genero: "",
      email: "",
      senha: "",
      confiSenha: ""
    },
    items: ["Masculino", "Feminino", "Outros"],
  }),

  methods: {
    createAcccount() {
      if (!this.$refs.form.validate(true)) return;

      console.log(this.form);
    },

    openDialog() {
      this.dialog = !this.dialog;
    },

    closeDialog() {
      this.dialog = !this.dialog;
    },

    back() {
      this.$emit("currentComponent", "Login");
    },
  },
};
</script>

<style lang="scss" scoped>
.register {
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

    &--title {
      color: $gray--80;
      margin-bottom: 1rem;
    }
  }
}
</style>
