<template>
  <div>
    <Banner 
      :height="650"
      image="banner.svg"
      body="Ajudando você a trabalhar com mais qualidade!"
      font-color="black"
    />
    <BuddyMessage
      :height="450"
      image="landing_page_1.png"
    />
    <CallRegister />
    <SellPoints />
  </div>
</template>

<script>
import Banner from '../components/shared/Banner';
import BuddyMessage from '../components/LandingPage/BuddyMessage';
import CallRegister from '../components/LandingPage/CallRegister';
import SellPoints from '../components/LandingPage/SellPoints';

export default {
  components: {
    Banner,
    BuddyMessage,
    CallRegister,
    SellPoints,
  },
};
</script>
