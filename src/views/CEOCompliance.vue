<template>
  <v-app>
    <v-app-bar app color="light">
      <div class="d-flex align-center">
        <router-link to="/">
          <v-img
            alt="Vuetify Logo"
            class="shrink mr-2"
            contain
            src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
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
        <v-layout>
          <v-tabs>
            <v-tab>
              <v-icon left>mdi-office-building</v-icon>
              Company Details
            </v-tab>
            <v-tab>
              <v-icon left>mdi-account-details</v-icon>
              Operational Details
            </v-tab>
            <v-tab>
              <v-icon left>mdi-map</v-icon>
              Location Details
            </v-tab>
            <v-tab>
              <v-icon left>mdi-account</v-icon>
              Contact Person
            </v-tab>
            <!-- <v-tab>
              <v-icon left>mdi-point</v-icon>
              Self Assessment
            </v-tab> -->

            <v-tab-item>
              <CompanyDetails />
            </v-tab-item>
            <v-tab-item>
              <OperationalDetails />
            </v-tab-item>
            <v-tab-item>
              <Address />
            </v-tab-item>
            <v-tab-item>
              <v-card flat>
                <v-card-text>
                  <p>
                    Sed aliquam ultrices mauris. Donec posuere vulputate arcu.
                    Morbi ac felis. Etiam feugiat lorem non metus. Sed a libero.
                  </p>
                </v-card-text>
              </v-card>
            </v-tab-item>
            <v-tab-item>
              <v-card flat>
                <v-card-text>
                  <p>
                    Sed aliquam ultrices mauris. Donec posuere vulputate arcu.
                    Morbi ac felis. Etiam feugiat lorem non metus. Sed a libero.
                  </p>
                </v-card-text>
              </v-card>
            </v-tab-item>
          </v-tabs>
        </v-layout>
      </v-container>
    </v-content>
    <v-footer>
      <span class="px-4"
        >Sri Lanka Customs &copy; {{ new Date().getFullYear() }}</span
      >
    </v-footer>
  </v-app>
</template>

<script>
import router from "../router";
import CompanyDetails from "../components/CompanyDetails";
import OperationalDetails from "../components/OperationalDetails";
import Address from "../components/Address";

export default {
  name: "CEOCompliance",
  components: {
    CompanyDetails,
    OperationalDetails,
    Address
  },
  methods: {
    signOut: function() {
      router.push({ name: "home" });
    }
  },
  data() {
    return {};
  }
};
</script>
