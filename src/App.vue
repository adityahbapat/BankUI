<template>
  <v-app class="grey lighten-4">
    <Navbar />
    <div class="ma-4">
      <router-view></router-view>
    </div>

  </v-app>
</template>

<script>

import Navbar from './components/Navbar.vue'

export default {
  name: 'App',
  components: {
    Navbar
  },
  data: () => ({
    //
  }),
};
</script>
