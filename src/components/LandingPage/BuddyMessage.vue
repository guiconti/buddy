<template>
  <v-img
    tile
    :src="require('../../assets/images/' + image)"
    :height="$vuetify.breakpoint.mdAndUp ? height : 500"
  />
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
