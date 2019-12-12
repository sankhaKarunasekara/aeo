<template>
  <v-content>
    <v-container>
      <v-layout justify-center flat="true" wrap>
        <v-card outlined width="90%" class="pa-8">
          <v-list-item two-line>
            <v-list-item-content>
              <v-list-item-title class="headline"
                >Company Location Details</v-list-item-title
              >
            </v-list-item-content>
            <v-list-item-action>
              <v-btn @click="addNewTab()" color="primary">
                <v-icon color="white">mdi-plus</v-icon>
                Add Location
              </v-btn>
              <v-btn @click="deleteTab()" color="error">
                <v-icon color="white">mdi-delete</v-icon>
                Add Location
              </v-btn>
            </v-list-item-action>
          </v-list-item>
          <v-card-text>
            <v-tabs
              v-model="activeTab"
              :grow="grow"
              :prev-icon="
                prevIcon ? 'mdi-arrow-left-bold-box-outline' : undefined
              "
              :next-icon="
                nextIcon ? 'mdi-arrow-right-bold-box-outline' : undefined
              "
            >
              <v-tabs-slider></v-tabs-slider>

              <v-tab
                v-for="tab in tabs"
                :key="tab.index"
                :href="`#tab-${tab.index}`"
              >
                Location {{ tab.index }}
              </v-tab>

              <v-tab-item
                v-for="tab in tabs"
                :key="tab.index"
                :value="'tab-' + tab.index"
              >
                <v-card flat tile>
                  <v-card-text
                    ><v-card outlined>
                      <v-card-title>
                        Location {{ tab.index }} Details
                      </v-card-title>
                      <v-card-text class="px-8">
                        <v-row>
                          <v-col cols="12" sm="12" md="6" lg="4">
                            <v-text-field
                              label="Place Name"
                              hint="ABC Company"
                              outlined
                            ></v-text-field>
                          </v-col>
                          <v-col cols="12" sm="12" md="6" lg="8">
                            <v-text-field
                              label="Address"
                              hint="ABC Company"
                              outlined
                            ></v-text-field>
                          </v-col>
                        </v-row>
                        <v-row>
                          <v-col cols="12" sm="12" md="4" lg="4">
                            <v-text-field
                              label="City"
                              hint="ABC Company"
                              outlined
                            ></v-text-field>
                          </v-col>
                          <v-col cols="12" sm="12" md="4" lg="4">
                            <v-text-field
                              label="District"
                              hint="ABC Company"
                              outlined
                            ></v-text-field>
                          </v-col>
                          <v-col cols="12" sm="12" md="4" lg="4">
                            <v-text-field
                              type="number"
                              label="Postal Code"
                              hint="ABC Company"
                              outlined
                            ></v-text-field>
                          </v-col>
                        </v-row>
                        <v-row>
                          <v-col cols="12" sm="12" md="4" lg="4">
                            <v-text-field
                              label="Phone"
                              hint="ABC Company"
                              outlined=""
                            ></v-text-field>
                          </v-col>
                          <v-col cols="12" sm="12" md="4" lg="4">
                            <v-text-field
                              label="Fax Number"
                              hint="ABC Company"
                              outlined=""
                            ></v-text-field>
                          </v-col>
                          <v-col cols="12" sm="12" md="4" lg="4">
                            <v-text-field
                              label="E-mail Address"
                              hint="ABC Company"
                              outlined=""
                            ></v-text-field>
                          </v-col>
                        </v-row>
                      </v-card-text> </v-card
                  ></v-card-text>
                </v-card>
              </v-tab-item>
            </v-tabs>
          </v-card-text>
          <v-card-actions>
            <v-btn>Previous</v-btn>
            <v-spacer></v-spacer>
            <v-btn>Next</v-btn>
          </v-card-actions>
        </v-card>
      </v-layout>
    </v-container>
  </v-content>
</template>

<script>
export default {
  name: "Address",
  data: () => ({
    activeTab: 0,
    text:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    icons: false,
    centered: false,
    grow: false,
    vertical: false,
    prevIcon: false,
    nextIcon: false,
    right: false,
    tabs: []
  }),

  created() {
    this.initialize();
  },

  watch: {
    activeTab() {
      console.log(this.activeTab);
      this.activeTab = this.tabs.length;
    }
  },

  methods: {
    initialize() {
      this.tabs = [
        {
          index: 1,
          data: {
            place: "",
            address: "",
            city: "",
            district: "",
            postalCode: "",
            phone: "",
            faxNumber: "",
            emailAddress: ""
          }
        }
      ];
    },

    addNewTab() {
      const tab = {
        index: this.tabs.length + 1,
        data: {
          place: "",
          address: "",
          city: "",
          district: "",
          postalCode: "",
          phone: "",
          faxNumber: "",
          emailAddress: ""
        }
      };
      console.log(this.tabs);

      this.tabs = [...this.tabs, tab];
      this.activeTab = this.tabs.length;
    },

    deleteTab() {
      this.tabs.splice(-1, 1);
      this.activeTab = this.tabs.length;
    }
  }
};
</script>
