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
        <v-layout class="pa-8">
          <v-card flat min-height="80">
            <v-tabs align="left" vertical>
              <v-tab grow>
                <v-icon left>mdi-account</v-icon>
                Company Details
              </v-tab>
              <v-tab>
                <v-icon left>mdi-lock</v-icon>
                Operational Details
              </v-tab>
              <v-tab>
                <v-icon left>mdi-access-point</v-icon>
                Addresses
              </v-tab>
              <v-tab>
                <v-icon left>mdi-access-point</v-icon>
                Contact Person
              </v-tab>
              <v-tab>
                <v-icon left>mdi-access-point</v-icon>
                Self Assessment
              </v-tab>

              <v-tab-item>
                <v-card flat>
                  <v-card-text>
                    <p>
                      Sed aliquam ultrices mauris. Donec posuere vulputate arcu.
                      Morbi ac felis. Etiam feugiat lorem non metus. Sed a
                      libero.
                    </p>
                  </v-card-text>
                </v-card>
              </v-tab-item>
              <v-tab-item>
                <v-card flat>
                  <v-card-text>
                    <p>
                      Morbi nec metus. Suspendisse faucibus, nunc et
                      pellentesque egestas, lacus ante convallis tellus, vitae i
                    </p>
                  </v-card-text>
                </v-card>
              </v-tab-item>
              <v-tab-item>
                <v-card flat>
                  <v-card-text>
                    <p>
                      Fusce a quam. Phasellus nec sem in justo pellentesque
                      facilisis. Nam eget dui. Proin viverra, ligula sit amet
                      ultrices semper, ligula arcu tristique sapien, a accumsan
                      nisi mauris ac eros. In dui magna, posuere eget,
                      vestibulum et, tempor auctor, justo.
                    </p>
                  </v-card-text>
                </v-card>
              </v-tab-item>
              <v-tab-item>
                <v-card flat>
                  <v-card-text>
                    <p>
                      Sed aliquam ultrices mauris. Donec posuere vulputate arcu.
                      Morbi ac felis. Etiam feugiat lorem non metus. Sed a
                      libero.
                    </p>
                  </v-card-text>
                </v-card>
              </v-tab-item>
              <v-tab-item>
                <v-card flat>
                  <v-card-text>
                    <p>
                      Sed aliquam ultrices mauris. Donec posuere vulputate arcu.
                      Morbi ac felis. Etiam feugiat lorem non metus. Sed a
                      libero.
                    </p>
                  </v-card-text>
                </v-card>
              </v-tab-item>
            </v-tabs>
          </v-card>
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
  name: "CEOCompliance",
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
