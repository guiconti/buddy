<template>
  <v-container>
    <v-layout row wrap align-center justify-center class="mt-12">
      <v-flex xs12 class="text-center">
        <Logo :size="350" />
      </v-flex>
      <v-flex xs12>
        <h2 class="headline text-center">
          Ajudando você a trabalhar com mais qualidade!
        </h2>
      </v-flex>
      <v-flex xs4 class="mt-12">
        <v-form ref="form" class="text-center">
          <v-text-field
            v-model="email"
            outlined
            color="black"
            :rules="emailRules"
            :validate-on-blur="true"
            label="Email"
            type="email"
            required
            @keyup.enter="submit"
          />
          <v-text-field
            v-model="password"
            outlined
            color="black"
            :rules="passwordRules"
            :validate-on-blur="true"
            :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
            :type="showPassword ? 'text' : 'password'"
            label="Password"
            required
            @keyup.enter="submit"
            @click:append="showPassword = !showPassword"
          />
          <v-btn color="primary" rounded x-large width="200" class="text-center">
            PLAY
          </v-btn>
        </v-form>
      </v-flex>
      <v-flex xs12 class="mt-6 body-2 text-center">
        Esqueceu sua senha?
        <v-btn :ripple="false" text x-small height="16" color="primary" class="pa-0 body-2">
          Redefinir
        </v-btn>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import Logo from '../Icons/Logo';
export default {
  components: {
    Logo,
  },
  data() {
    return {
      valid: true,
      loading: false,
      error: false,
      showPassword: false,
      email: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+/.test(v) || 'E-mail must be valid',
      ],
      password: '',
      passwordRules: [
        v => !!v || 'Password is required',
        v => (v && v.length >= 6) || 'Password must have at least 6 characters',
      ],
    };
  }
}
</script>