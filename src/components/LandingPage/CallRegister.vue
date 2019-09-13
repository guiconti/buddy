<template>
  <v-container>
    <v-layout row wrap class="text-center" align-center justify-center>
      <v-flex xs12 class="mb-6 mt-12">
        Faça seu cadastro e inicie o acesso grátis!
      </v-flex>
      <v-flex xs12 class="mb-6">
        <v-btn rounded x-large width="300" color="primary" class="white--text">
          Cadastre-se
        </v-btn>
      </v-flex>
      <v-flex xs12 class="mb-12 body-2">
        Já é cadastrado?
        <v-btn
          :ripple="false"
          text
          x-small
          height="16"
          color="primary"
          class="pa-0 text-center body-2"
          @click="$router.push({ path: '/login' })"
        >
          Fazer o login
        </v-btn>
      </v-flex>
    </v-layout>
  </v-container>
</template>