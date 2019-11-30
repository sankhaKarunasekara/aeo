<template>
  <v-app>
    <v-app-bar app color="light">
      <div class="d-flex align-center">
        <v-img
          to="/"
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />
        <h2>AEO Program - Sri Lanka Customs</h2>
      </div>
      <v-spacer></v-spacer>
      <SignUp />
    </v-app-bar>

    <v-content>
      <v-layout row warp>
        <v-flex xs12 md7 pa-4>
          <News />
        </v-flex>
        <v-flex xs12 md5 pa-4>
          <LogIn />
        </v-flex>
      </v-layout>
    </v-content>
    <v-footer>
      <span class="px-4"
        >Sri Lanka Customs &copy; {{ new Date().getFullYear() }}</span
      >
    </v-footer>
  </v-app>
</template>

<script>
// import HelloWorld from "./components/HelloWorld";
import LogIn from "../components/LogIn";
import News from "../components/News";
import SignUp from "../components/SignUp";

export default {
  name: "Home",

  components: {
    News,
    LogIn,
    SignUp
  },

  data: () => ({
    //
  })
};
</script>
