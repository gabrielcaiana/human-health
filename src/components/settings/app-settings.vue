<template>
  <v-list-item ripple id="changeTheme">
    <v-icon color="primary" :size="22" class="mr-2">mdi-palette</v-icon>
    <v-list-item-content>
      <v-list-item-title>Tema escuro</v-list-item-title>
    </v-list-item-content>
    <v-list-item-action>
      <v-switch @click="toggleTheme" v-model="switch_theme" color="primary" hide-details />
    </v-list-item-action>
  </v-list-item>
</template>

<script>
import { themes } from '@/mixins/theme';

export default {
  mixins: [themes],

  data: () => ({
    switch_theme: false
  }),

  created() {
    this.switch_theme = this.theme();
  },

  methods: {
    toggleTheme() {
      const theme = (this.$vuetify.theme.dark = !this.$vuetify.theme.dark);
      localStorage.setItem('dark_theme-portal', theme);
    }
  }
};
</script>
