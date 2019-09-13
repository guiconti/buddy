<template>
  <v-container color="#FF4F75" fluid>
    <v-layout row wrap class="text-center" align-center justify-center>
      <v-flex xs6 class="mb-6">
        <v-layout row wrap class="mt-12" style="margin-left: 248px">
          <v-flex v-for="(item, i) in items" :key="i" xs12 class="text-left mb-10">
            <v-icon x-small color="#FF4F75" class="mr-2">
              mdi-circle
            </v-icon>
            {{ item }}
          </v-flex>
        </v-layout>
      </v-flex>
      <v-flex xs6 class="mb-6 text-center">
        <Happy :size="300" />
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import Happy from '../Icons/Happy';

export default {
  components: {
    Happy,
  },
  data: () => ({
    items: [
      'Aumente sua produtividade',
      'Cuide da sua saúde',
      'Controle e priorize seus "TO DOs"',
      'Use no escritório e também durante o home office',
      'Assistente pessoal disponível para te lembrar do que realmente importa',
    ],
  }),
}
</script>

<style scoped>
.container {
  background-color: rgb(216, 216, 216)
}
</style>