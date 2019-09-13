<template>
  <div>
    <Banner 
      :height="650"
      image="banner.svg"
      body="Ajudando você a trabalhar com mais qualidade!"
      font-color="black"
    />
    <CallRegister />
  </div>
</template>

<script>
import Banner from '../components/shared/Banner';
import CallRegister from '../components/LandingPage/CallRegister';

export default {
  components: {
    Banner,
    CallRegister,
  },
};
</script>
