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
              <span>
                <v-btn @click="addNewTab()" color="primary">
                  <v-icon color="white">mdi-plus</v-icon>
                  Add Location
                </v-btn>
                <v-btn @click="deleteTab()" color="error">
                  <v-icon color="white">mdi-delete</v-icon>
                  Delete Location
                </v-btn>
              </span>
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
                Location {{ tab.index + 1 }}
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
                        <v-list-item>
                          <v-list-item-avatar>
                            <v-icon class="grey lighten-1 white--text"
                              >mdi-map-marker</v-icon
                            >
                          </v-list-item-avatar>

                          <v-list-item-content>
                            <v-list-item-title
                              >Location {{ tab.index + 1 }}</v-list-item-title
                            >
                            <v-list-item-subtitle></v-list-item-subtitle>
                          </v-list-item-content>

                          <v-list-item-action>
                            <v-btn icon>
                              <v-icon color="grey lighten-1"
                                >mdi-information</v-icon
                              >
                            </v-btn>
                          </v-list-item-action>
                        </v-list-item>
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

                        <v-subheader class="pl-0"
                          ><h3>Attachments</h3></v-subheader
                        >
                        <v-divider class="pt-4"></v-divider>

                        <v-row>
                          <v-col cols="12" sm="12" md="12">
                            <v-row>
                              <v-col cols="12" sm="12" md="4">
                                <p class="mt-0 ml-4">
                                  Drawn route map up to the permises from
                                  nearest city
                                </p>
                              </v-col>
                              <v-col cols="12" sm="12" md="8">
                                <v-file-input
                                  v-model="files"
                                  color="primary accent-4"
                                  label="Drawn route map up to the permises from
                                  nearest city"
                                  counter
                                  placeholder="Click here to upload"
                                  outlined
                                  :show-size="1000"
                                >
                                  <template v-slot:selection="{ index, text }">
                                    <v-chip
                                      v-if="index < 2"
                                      color="deep-purple accent-4"
                                      dark
                                      label
                                      small
                                    >
                                      {{ text }}
                                    </v-chip>
                                  </template>
                                </v-file-input>
                              </v-col>
                            </v-row>
                            <v-row>
                              <v-col cols="12" sm="12" md="4">
                                <p class="mt-2 ml-4">
                                  Site Plan
                                </p>
                              </v-col>
                              <v-col cols="12" sm="12" md="8">
                                <v-file-input
                                  v-model="files"
                                  color="primary accent-4"
                                  label="Site plan"
                                  counter
                                  placeholder="Click here to upload"
                                  outlined
                                  :show-size="1000"
                                >
                                  <template v-slot:selection="{ index, text }">
                                    <v-chip
                                      v-if="index < 2"
                                      color="deep-purple accent-4"
                                      dark
                                      label
                                      small
                                    >
                                      {{ text }}
                                    </v-chip>
                                  </template>
                                </v-file-input>
                              </v-col>
                            </v-row>
                          </v-col>
                        </v-row>
                      </v-card-text>
                    </v-card></v-card-text
                  >
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
    tabs: [
      {
        index: 0,
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
    ]
  }),

  created() {
    this.initialize();
  },

  watch: {
    // tabs() {
    //   this.activeTab = this.tabs.length - 1;
    //   console.log(this.activeTab);
    // }
  },

  methods: {
    initialize() {
      // this.activeTab = 0;
      this.tabs = [
        {
          index: 0,
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
        index: this.tabs.length,
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
    },

    deleteTab() {
      if (this.tabs.length != 1) {
        this.tabs.splice(-1, 1);
      }
    }
  }
};
</script>
