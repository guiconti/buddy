<template>
  <v-app id="buddy">
    <div v-if="loading" class="loading">
      Loading...
    </div>
    <div v-if="error" class="error">
      {{ error }}
    </div>
    <div v-if="post">
      <Navmenu />
      <Content />
      <Footer />
    </div>
  </v-app>
</template>

<script>
import Navmenu from './components/shared/Navmenu';
import Content from './components/shared/Content';
import Footer from './components/shared/Footer';

export default {
  name: 'App',
  components: {
    Content,
    Footer,
    Navmenu,
  },
  data: () => ({
    loading: false,
    error: false,
    post: true,
  }),
};
</script>
