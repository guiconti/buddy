<template>
  <div>
    <v-app-bar color="#C4C4C4" app fixed clipped-left>
      <v-toolbar-title @click="$router.push({ path: '/' })">
        <v-img
          :src="require('../../assets/images/logo.svg')"
          :class="{'ml-12': $vuetify.breakpoint.mdAndUp}"
        />
      </v-toolbar-title>
      <v-spacer />
      <v-btn
        v-if="$vuetify.breakpoint.mdAndUp && this.$route.path !== '/login' && !isLogged"
        text
        class="title black--text"
        @click="$router.push({ path: '/login' })"
      >
        Login
      </v-btn>
      <v-btn v-if="$vuetify.breakpoint.mdAndUp && isLogged" text class="title">
        Chat
      </v-btn>
      <v-btn v-if="$vuetify.breakpoint.mdAndUp && isLogged" text class="title">
        To Do List
      </v-btn>
      <v-btn
        v-if="$vuetify.breakpoint.mdAndUp && isLogged" 
        text
        class="title"
        @click="$router.push({ path: '/timer' })"
      >
        Timer
      </v-btn>
      <v-btn v-if="$vuetify.breakpoint.mdAndUp && isLogged" text class="title">
        Meus Sentimentos
      </v-btn>
      <v-btn v-if="$vuetify.breakpoint.mdAndUp && isLogged" text class="title">
        Meus Cursos
      </v-btn>
    </v-app-bar>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'Navmenu',
  computed: {
    ...mapState('auth', {
      isLogged: state => state.isLogged,
    }),
  },
};
</script>

<style lang="stylus">
#boilerplate {
  .v-navigation-drawer__border {
    display: none;
  }
}
</style>
