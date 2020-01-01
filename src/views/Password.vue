<template>
  <v-app>
    <v-app-bar app color="light">
      <div class="d-flex align-center">
        <v-img
          to="/"
          alt="AEO Logo"
          class="shrink mr-2"
          contain
          src="../assets/logo.png"
          transition="scale-transition"
          width="40"
        />
        <h2>AEO Program - Sri Lanka Customs</h2>
      </div>
      <v-spacer></v-spacer>
    </v-app-bar>

    <v-content>
      <v-layout row wrap justify-center>
        <div v-if="view == 'setPassword'"><SetPassword /></div>
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
import SetPassword from "../components/SetPassword";

export default {
  name: "Password",
  components: {
    SetPassword
  },
  props: {
    view: String
  },
  data: () => ({
    //
  })
};
</script>
