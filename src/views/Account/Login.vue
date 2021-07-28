<template>
  <v-container class="authentication" v-resize="onResize">
    <v-row>
      <transition
        enter-active-class="animate__animated animate__fadeInUp"
        mode="out-in"
      >
        <component
          :is="currentComponent"
          @currentComponent="changeComponent($event)"
        />
      </transition>
      <transition
        enter-active-class="animate__animated animate__fadeInRight"
        mode="out-in"
      >
        <v-col
          class="authentication__ilustration"
          xl="7"
          lg="7"
          md="7"
          sm="6"
          v-if="innerWidth >= 600"
        >
          <img
            class="authentication__ilustration--img"
            src="@/assets/ilustrations/login.svg"
            alt="Praticando exercicio físico"
          />
        </v-col>
      </transition>
    </v-row>
    <p class="authentication__footer">
      © Human Health {{ currentYear }}. Todos os direitos reservados
    </p>
  </v-container>
</template>

<script>
export default {
  components: {
    Login: () => import("@/components/authentication/Login"),
    Register: () => import("@/components/authentication/Register"),
  },

  data: () => ({
    currentYear: new Date().getFullYear(),
    innerWidth: 0,
    currentComponent: "Login",
  }),

  methods: {
    onResize() {
      this.innerWidth = window.innerWidth;
    },

    changeComponent(component) {
      this.currentComponent = component;
    },
  },
};
</script>

<style lang="scss" scoped>
.authentication {
  height: 100vh;
  display: flex;
  flex-direction: column;

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

  &__footer {
    text-align: center;
  }
}
</style>
