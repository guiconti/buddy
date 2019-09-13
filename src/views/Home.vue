<template>
  <Banner 
    :height="650"
    image="banner.svg"
    body="Ajudando você a trabalhar com mais qualidade!"
    font-color="black"
  />
</template>

<script>
import Banner from '../components/shared/Banner';

export default {
  components: {
    Banner,
  },
};
</script>
