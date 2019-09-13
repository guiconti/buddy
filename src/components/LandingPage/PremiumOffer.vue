<template>
  <v-img
    tile
    :src="require('../../assets/images/' + image)"
    :height="$vuetify.breakpoint.mdAndUp ? height : 500"
  >
    <v-container>
      <v-layout
        row
        wrap
        align-center
        justify-center
        class="mt-12"
        :class="{'pl-12': $vuetify.breakpoint.mdAndUp}"
      >
        <v-flex
          md6
          xs12
          class="mt-8 text-center"
        >
          <h2
            class="headline font-weight-light"
          >
            {{ body }}
          </h2>
        </v-flex>
        <v-flex
          md12
          xs12
          class="mt-12 text-center"
        >
          <v-btn rounded x-large width="350" height="60" color="primary" class="white--text headline">
            Torne-se Premium
          </v-btn>
        </v-flex>
      </v-layout>
    </v-container>
  </v-img>
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
    body: {
      type: String,
      required: false,
      default: '',
    },
    fontColor: {
      type: String,
      required: false,
      default: 'black',
    },
  },
}
</script>
