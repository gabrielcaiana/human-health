<template>
  <div class="text-center">
    <v-dialog :value="dialog" width="500" @input="close">
      <v-card>
        <v-card-title class="text-h5 primary white--text">
          Privacy Policy
        </v-card-title>

        <v-container>
          <h3 class="grey--text mb-2">
            Informe seu email para recuperar a senha
          </h3>
          <v-form
            @submit.prevent="send"
            ref="form"
            lazy-validation
            v-model="valid"
          >
            <v-text-field
              outlined
              required
              id="email"
              label="Email"
              type="text"
              v-model="form.email"
              :rules="[required, email]"
            ></v-text-field>
            <v-divider></v-divider>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="gray" text @click="close">Fechar</v-btn>
              <v-btn :disabled="!valid" color="primary" text type="submit"
                >Enviar</v-btn
              >
            </v-card-actions>
          </v-form>
        </v-container>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import rulesMixin from "@/mixins/rules-mixin";
export default {
  mixins: [rulesMixin],

  props: {
    dialog: {
      type: Boolean,
      required: true,
    },
  },

  data: () => ({
    form: {
      email: '',
    },
    valid: true,
  }),

  methods: {
    send() {
      if (!this.$refs.form.validate(true)) return;
      console.log(this.form.email);
    },
    close() {
      this.$refs.form.reset()
      return this.$emit(`close`);
    },
  },
};
</script>
