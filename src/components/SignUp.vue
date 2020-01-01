<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" persistent max-width="960px">
      <template v-slot:activator="{ on }">
        <v-spacer></v-spacer>
        <v-btn color="primary" dark v-on="on">Create An Account</v-btn>
      </template>
      <v-card>
        <v-toolbar dark color="primary">
          <v-toolbar-title>Sign Up Form</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-btn icon dark @click="dialog = false">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-toolbar>

        <v-container>
          <v-layout row warp>
            <v-flex xs12 md6>
              <v-col>
                <v-col cols="12">
                  <v-text-field
                    label="Comapany Name*"
                    outlined
                    required
                  ></v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-text-field
                    label="TIN Number*"
                    outlined
                    required
                  ></v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-text-field
                    label="Email*"
                    type="email"
                    v-model="signUpDetails.email"
                    required
                    outlined
                  ></v-text-field>
                </v-col>
                <!-- <v-col cols="12">
                  <v-text-field
                    label="Password*"
                    :type="showPassword ? 'text' : 'password'"
                    :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                    @click:append="showPassword = !showPassword"
                    required
                  ></v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-text-field
                    label="Confirm Password*"
                    :type="showConPassword ? 'text' : 'password'"
                    :append-icon="showConPassword ? 'mdi-eye' : 'mdi-eye-off'"
                    @click:append="showConPassword = !showConPassword"
                    required
                  ></v-text-field>
                </v-col> -->
              </v-col></v-flex
            >
            <v-flex xs12 md6>
              <v-container bg fill-height grid-list-md text-xs-center>
                <v-layout row wrap align-center>
                  <v-flex>
                    <v-checkbox color="primary">
                      <template v-slot:label>
                        <div>
                          By Clicking on Register button I/We agree on the Terms
                          & Conditions of the AEO Program of Sri Lanka Customs
                        </div>
                      </template>
                    </v-checkbox>
                    <v-row justify="center">
                      <router-link
                        :to="{
                          name: 'questionnaire',
                          params: { email: signUpDetails.email }
                        }"
                        color="primary"
                      >
                        <v-btn class="primary">Next</v-btn></router-link
                      >
                    </v-row>
                  </v-flex>
                </v-layout>
              </v-container>
            </v-flex>
          </v-layout>
        </v-container>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
// import firebase from "firebase";
// import router from "../router";
export default {
  name: "SignUp",
  data: () => ({
    dialog: false,
    showPassword: false,
    showConPassword: false,
    show3: false,
    show4: false,
    password: "Password",
    rules: {
      required: value => !!value || "Required.",
      min: v => v.length >= 8 || "Min 8 characters",
      emailMatch: () => "The email and password you entered don't match"
    },
    signUpDetails: {
      name: "",
      email: "",
      password: ""
    }
  })
};
</script>
