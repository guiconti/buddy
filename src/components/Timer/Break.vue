<template>
  <v-dialog v-model="open" width="500" height="600">
    <v-card>
      <v-container>
        <v-layout row wrap align-center justify-center>
          <v-flex xs12 class="display-1 text-center">
            Que tal uma pausa para um alongamento?
          </v-flex>
          <v-flex xs12 class="text-center mt-12 mb-12">
            <v-img
              height="300"
              contain
              :src="require('../../assets/images/ioga.svg')"
            />
          </v-flex>
          <v-flex xs6 class="text-center mb-6">
            <v-btn color="success" large rounded @click="yes">
              Sim
            </v-btn>
          </v-flex>
          <v-flex xs6 class="mb-6">
            <v-btn color="grey" large class="white--text" rounded @click="no">
              Daqui 5 minutos
            </v-btn>
          </v-flex>
        </v-layout>
      </v-container>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  props: {
    open: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  watch: {
    open(val) {
      if (!val) {
        this.$emit('close');
      }
    }
  },
  methods: {
    yes() {
      this.$emit('close');
      this.open = false;
    },
    no() {
      this.$emit('close');
      this.open = false;
    },
  },
}
</script>