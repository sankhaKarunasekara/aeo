<template>
  <v-content>
    <v-container fluid>
      <v-layout>
        <v-flex>
          <v-card>
            <v-toolbar color="#FFF" flat outline>
              <v-toolbar-title>Login</v-toolbar-title>
            </v-toolbar>
            <v-card-text>
              <v-text-field
                label="Email"
                name="email"
                prepend-icon="email"
                type="email"
                outlined
              ></v-text-field>
              <v-text-field
                id="password"
                label="Enter Password"
                name="password"
                prepend-icon="lock"
                type="password"
                v-model="user.password"
                outlined
              ></v-text-field>
              <v-text-field
                id="password"
                label="Confirm Password"
                name="password"
                prepend-icon="lock"
                v-model="user.confirmPassword"
                type="password"
                outlined
              ></v-text-field>
            </v-card-text>
            <v-card-actions>
              <v-layout align-center justify-center>
                <v-btn color="primary" to="/Profile">Sign In</v-btn>
                <v-btn color="light">Clear</v-btn>
              </v-layout>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </v-content>
</template>

<script>
import firebase from "firebase";

export default {
  name: "SetPassword",

  data: () => ({
    user: {
      name: "",
      email: "",
      password: "",
      confrimPassword: ""
    }
  }),
  methods: {
    createUser() {
      // Confirm the link is a sign-in with email link.
      if (firebase.auth().isSignInWithEmailLink(window.location.href)) {
        // Additional state parameters can also be passed via URL.
        // This can be used to continue the user's intended action before triggering
        // the sign-in operation.
        // Get the email if available. This should be available if the user completes
        // the flow on the same device where they started it.
        var email = window.localStorage.getItem("emailForSignIn");
        if (!email) {
          // User opened the link on a different device. To prevent session fixation
          // attacks, ask the user to provide the associated email again. For example:
          email = window.prompt("Please provide your email for confirmation");
        }
        // The client SDK will parse the code from the link for you.
        firebase
          .auth()
          .signInWithEmailLink(email, window.location.href)
          .then(function(result) {
            // Clear email from storage.
            window.localStorage.removeItem("emailForSignIn");
            console.log(result);
            // You can access the new user via result.user
            // Additional user info profile not available via:
            // result.additionalUserInfo.profile == null
            // You can check if the user is new or existing:
            // result.additionalUserInfo.isNewUser
          })
          .catch(function(error) {
            console.log(error);
            // Some error occurred, you can inspect the code: error.code
            // Common errors could be invalid email and invalid or expired OTPs.
          });
      }
    }
  },
  mounted() {
    this.createUser();
  }
};
</script>
