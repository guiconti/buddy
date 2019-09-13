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
      <v-btn v-if="$vuetify.breakpoint.mdAndUp && this.$route.path !== '/login'" text class="black--text" @click="$router.push({ path: '/login' })">
        Login
      </v-btn>
    </v-app-bar>
  </div>
</template>

<script>

export default {
  name: 'Navmenu',
  data: () => ({
  }),
};
</script>

<style lang="stylus">
#boilerplate {
  .v-navigation-drawer__border {
    display: none;
  }
}
</style>
