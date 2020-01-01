<template>
  <v-app>
    <v-app-bar app color="light">
      <div class="d-flex align-center">
        <router-link to="/">
          <v-img
            to="/"
            alt="AEO Logo"
            class="shrink mr-2"
            contain
            src="../assets/logo.png"
            transition="scale-transition"
            width="40"
          />
        </router-link>
        <h2>AEO Program - Sri Lanka Customs</h2>
      </div>
      <v-spacer></v-spacer>
      <v-menu offset-y>
        <template v-slot:activator="{ on }">
          <v-btn large icon v-on="on">
            <v-icon large color="gray">mdi-account-circle</v-icon>
          </v-btn>
        </template>
        <v-list>
          <v-list-item>
            <v-list-item-title @click="signOut()">logout</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>

    <v-content>
      <v-container fluid>
        <v-list>
          <v-list-item>
            <v-list-item-avatar color="white">
              <v-icon large color="gray">mdi-domain</v-icon>
            </v-list-item-avatar>
            <v-list-item-content>
              <v-list-item-title class="headline"
                >Self-Assessment Questionnaire</v-list-item-title
              >
              <v-list-item-subtitle>AEO Program</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-list>
        <SelfAssessment />
        <v-btn color="primary" class="ma-8" justify-center @click="signUp">
          Submit
        </v-btn>
      </v-container>
    </v-content>
    <v-footer>
      <span class="px-4"
        >Sri Lanka Customs &copy; {{ new Date().getFullYear() }}
      </span>
    </v-footer>
  </v-app>
</template>

<script>
// import router from "..router";
import SelfAssessment from "../components/SelfAssessment";
import firebase from "firebase";

const actionCodeSettings = {
  // URL you want to redirect back to. The domain (www.example.com) for this
  // URL must be whitelisted in the Firebase Console.
  url: "https://localhost:8080/#/signUp",
  // This must be true.
  handleCodeInApp: true
  // dynamicLinkDomain: "https://localhost:8080"
};

export default {
  name: "Questionnaire",
  components: {
    SelfAssessment
  },
  data: () => ({
    signUpDetails: {
      name: "",
      email: "",
      password: ""
    }
  }),
  methods: {
    signUp() {
      firebase
        .auth()
        .sendSignInLinkToEmail(this.$route.params.email, actionCodeSettings)
        .then(function() {
          // The link was successfully sent. Inform the user.
          // Save the email locally so you don't need to ask the user for it again
          // if they open the link on the same device.
          // window.localStorage.setItem(
          //   "emailForSignIn",
          //   this.$route.params.email
          // );
        })
        .catch(function(error) {
          console.log(error);
          // Some error occurred, you can inspect the code: error.code
        });
    }
  }
};
</script>
