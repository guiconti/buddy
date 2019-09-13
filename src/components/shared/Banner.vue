<template>
  <v-card
    tile
    :class="{'default-elevation': $vuetify.breakpoint.mdAndUp}"
    :img="require('../../assets/images/logo.svg')"
    :height="$vuetify.breakpoint.mdAndUp ? height : 500"
  >
    <v-container v-if="header !== ''" class="pl-12">
      <v-layout
        row
        wrap
        align-center
        justify-center
        class="mt-12"
        :class="{'pl-12': $vuetify.breakpoint.mdAndUp}"
      >
        <v-flex
          xs12
          class="display-2 font-weight-bold"
          style="font-family: 'Montserrat' !important;"
          :class="fontColor + '--text'"
        >
          <v-icon v-if="icon" size="100" :color="fontColor">
            {{ icon }}
          </v-icon>
          {{ header }}
        </v-flex>
        <v-flex
          xs12
          class="mt-8"  
        >
          <h3
            class="headline font-weight-light"
            :class="fontColor + '--text'"
            :style="{'letter-spacing': $vuetify.breakpoint.mdAndUp ? '3px !important' : ''}"
          >
            {{ body }}
          </h3>
        </v-flex>
      </v-layout>
    </v-container>
  </v-card>
</template>

<script>
export default {
  props: {
    image: {
      type: String,
      required: false,
      default: '',
    },
    height: {
      type: Number,
      required: false,
      default: 320,
    },
    icon: {
      type: String,
      required: false,
      default: '',
    },
    header: {
      type: String,
      required: false,
      default: '',
    },
    body: {
      type: String,
      required: false,
      default: '',
    },
    fontColor: {
      type: String,
      required: false,
      default: 'white',
    },
  },
}
</script>

<style scoped>
  .default-elevation {
    -webkit-box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12) !important;
    box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12) !important;
  }
</style>