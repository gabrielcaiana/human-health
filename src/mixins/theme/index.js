export const themes = {
  methods: {
    theme() {
      const theme = localStorage.getItem('dark_theme-human-health');

      if (theme) {
        if (theme == 'true') {
          return (this.$vuetify.theme.dark = true);
        } else {
          return (this.$vuetify.theme.dark = false);
        }
      }
    }
  }
};
