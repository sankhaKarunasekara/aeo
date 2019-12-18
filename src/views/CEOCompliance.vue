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
        <v-layout>
          <v-tabs>
            <v-tab class="grey lighten-4">
              <v-icon left>mdi-office-building</v-icon>
              Company Details
            </v-tab>
            <v-tab class="grey lighten-4">
              <v-icon left>mdi-account-details</v-icon>
              Operational Details
            </v-tab>
            <v-tab class="grey lighten-4">
              <v-icon left>mdi-map</v-icon>
              Location Details
            </v-tab>
            <v-tab class="grey lighten-4">
              <v-icon left>mdi-account</v-icon>
              Contact Person
            </v-tab>
            <v-tab class="grey lighten-4">
              <v-icon left>mdi-file-document</v-icon>
              Commercial Record Keeping
            </v-tab>
            <v-tab class="grey lighten-4">
              <v-icon left>mdi-file-document-edit-outline</v-icon>
              Declaration
            </v-tab>

            <v-tab-item class="grey lighten-4">
              <CompanyDetails />
            </v-tab-item>
            <v-tab-item class="grey lighten-4">
              <OperationalDetails />
            </v-tab-item>
            <v-tab-item class="grey lighten-4">
              <Address />
            </v-tab-item>
            <v-tab-item class="grey lighten-4">
              <ContactPerson />
            </v-tab-item>
            <v-tab-item class="grey lighten-4">
              <CommercialRecords />
            </v-tab-item>
            <v-tab-item class="grey lighten-4">
              <Declartion />
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
import ContactPerson from "../components/ContactPerson";
import CommercialRecords from "../components/CommercialRecords";
import Declartion from "../components/Declaration";

export default {
  name: "CEOCompliance",
  components: {
    CompanyDetails,
    OperationalDetails,
    Address,
    ContactPerson,
    CommercialRecords,
    Declartion
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
