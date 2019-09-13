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
    <PremiumOffer
      :height="400"
      image="landing_page_2.png"
      body="Conheça nosso plano BUDDY PREMIUM, onde você terá acesso a cursos na plataforma parceira Alura e poderá criar grupos com toda a sua equipe."
    />
  </div>
</template>

<script>
import Banner from '../components/shared/Banner';
import BuddyMessage from '../components/LandingPage/BuddyMessage';
import CallRegister from '../components/LandingPage/CallRegister';
import SellPoints from '../components/LandingPage/SellPoints';
import PremiumOffer from '../components/LandingPage/PremiumOffer';

export default {
  components: {
    Banner,
    BuddyMessage,
    CallRegister,
    SellPoints,
    PremiumOffer,
  },
};
</script>
