<template>
  <v-img
    tile
    contain
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
          xs12
          class="text-center"
        >
          <Logo :size="400"/>
        </v-flex>
        <v-flex
          md6
          xs12
          class="mt-8 text-center"
        >
          <h2
            class="display-2 font-weight-light"
          >
            {{ body }}
          </h2>
        </v-flex>
      </v-layout>
    </v-container>
  </v-img>
</template>

<script>
import Logo from '../Icons/Logo';

export default {
  components: {
    Logo,
  },
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
