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
        <v-list-item>
          <v-list-item-avatar color="white">
            <v-icon large color="gray">mdi-domain</v-icon>
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title class="headline">ABC Company</v-list-item-title>
            <v-list-item-subtitle>by Kurt Wagner</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
        <v-layout row justify-center>
          <v-flex xs12 md7>
            <v-container fluid fill-height>
              <v-layout align-top row warp>
                <v-flex xs12 md12>
                  <v-card class="ma-4" outlined>
                    <v-list-item>
                      <v-list-item-avatar color="white">
                        <v-icon large color="gray">dashboard</v-icon>
                      </v-list-item-avatar>
                      <v-list-item-content>
                        <v-list-item-title>Company Dashboard</v-list-item-title>
                      </v-list-item-content>
                    </v-list-item>
                    <v-data-table
                      :headers="headers"
                      :items="details"
                      :items-per-page="5"
                      class="elevation-1"
                    ></v-data-table>
                  </v-card>
                </v-flex>
              </v-layout>
            </v-container>
          </v-flex>
          <v-flex xs12 md5>
            <v-container fluid>
              <v-layout align-top justify-center wrap>
                <v-flex xs10 sm10 md10>
                  <v-card class="ma-4 mt-0 pa-0" outlined>
                    <v-list-item three-line>
                      <v-list-item-content>
                        <div class="overline mb-4">My AEO Status</div>
                        <v-list-item-title class="headline mb-1"
                          >CEO</v-list-item-title
                        >
                        <v-list-item-subtitle
                          >Since 21.03.2019</v-list-item-subtitle
                        >
                      </v-list-item-content>

                      <v-list-item-avatar
                        tile
                        size="80"
                        color="grey"
                      ></v-list-item-avatar>
                    </v-list-item>
                  </v-card>
                  <v-card class="ma-4 pa-0" outlined>
                    <v-list-item three-line>
                      <v-list-item-content>
                        <div class="overline mb-4">Renewal Date</div>
                        <v-list-item-title class="headline mb-1"
                          >29.07.2020</v-list-item-title
                        >
                      </v-list-item-content>

                      <v-list-item-avatar
                        tile
                        size="80"
                        color="grey"
                      ></v-list-item-avatar>
                    </v-list-item>
                  </v-card>
                  <v-card class="ma-4 pa-0" outlined>
                    <v-list-item three-line>
                      <v-list-item-content>
                        <div class="overline">
                          Application Submission Deadline
                        </div>
                        <v-list-item-title class="headline mb-1"
                          >31.03.2020</v-list-item-title
                        >
                      </v-list-item-content>

                      <v-list-item-avatar
                        tile
                        size="80"
                        color="grey"
                      ></v-list-item-avatar>
                    </v-list-item>
                  </v-card>
                </v-flex>
              </v-layout>
            </v-container>
          </v-flex>
          <v-flex xs12 md12>
            <v-layout row wrap align-center>
              <v-flex>
                <v-row justify="center" class="mb-8 mt-4 ml-8 mr-8 pb-4">
                  <v-btn
                    class="ma-2"
                    to="/CEO/General_Compliance"
                    x-large
                    color="primary"
                    >Apply for CEO</v-btn
                  >
                  <v-btn
                    class="ma-2"
                    to="/AEO/General_Compliance"
                    color="primary"
                    x-large
                    >Apply for AEO</v-btn
                  >
                </v-row>
              </v-flex>
            </v-layout>
          </v-flex>
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

export default {
  methods: {
    signOut: function() {
      router.push({ name: "home" });
    }
  },
  data() {
    return {
      headers: [
        {
          text: "Year",
          align: "left",
          sortable: true,
          value: "year"
        },
        { text: "Status", value: "status" },
        { text: "View Comapany Application", value: "links" }
      ],
      details: [
        {
          year: 2016,
          status: "CEO",
          links: "View Company Application"
        },
        {
          year: 2017,
          status: "AEO",
          links: "View Company Application"
        },
        {
          year: 2018,
          status: "CEO",
          links: "View Company Application"
        },
        {
          year: 2019,
          status: "Pending",
          links: "View Company Application"
        }
      ]
    };
  }
};
</script>
