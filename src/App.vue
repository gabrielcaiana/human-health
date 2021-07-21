<template>
  <v-app :class="!token && 'app-login'">
    <template v-if="!$route.meta.public && token">
      <v-main>
        <transition name="slide" mode="out-in">
          <router-view></router-view>
        </transition>
      </v-main>
    </template>

    <template v-else>
      <v-main>
        <keep-alive>
          <transition name="slide" mode="out-in">
            <router-view :key="$route.fullpath"></router-view>
          </transition>
        </keep-alive>
      </v-main>
    </template>
  </v-app>
</template>

<script>
import { themes } from '@/mixins/theme';

export default {
  mixins: [themes],

  mounted() {
    this.theme();
  },

  computed: {
    token() {
      return this.$store.getters['authentication/getToken'];
    }
  }
};
</script>
