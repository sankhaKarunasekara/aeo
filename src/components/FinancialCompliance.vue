<template>
  <v-content>
    <v-container>
      <v-layout justify-center flat="true" wrap>
        <v-card outlined width="95%" class="pa-8">
          <v-list-item two-line>
            <v-list-item-content>
              <v-list-item-title class="headline"
                >Financial Compliance</v-list-item-title
              >
              <!-- <v-list-item-subtitle
                >Mon, 12:30 PM, Mostly sunny</v-list-item-subtitle
              > -->
            </v-list-item-content>
          </v-list-item>
          <!-- <v-subheader class="pl-0"><h3>Opporator Details</h3></v-subheader>
          <v-divider class="py-4"></v-divider>-->
          <v-card-text>
            <v-subheader class="pl-0"
              ><h3>
                Contingent Liability Details ( Last 3 Years)
              </h3>
              <v-spacer></v-spacer>
              <span>
                <v-btn @click="addNewLiablilityDetails()" class="mr-4" color="primary">
                  <v-icon color="white">mdi-plus</v-icon>
                  Add Record
                </v-btn>
                <v-btn @click="deleteLiabilityDetail()" color="error">
                  <v-icon color="white">mdi-delete</v-icon>
                </v-btn>
              </span>
            </v-subheader>
            <v-divider class="py-4"></v-divider>

            <v-tabs>
              <v-tab
                v-for="liabilityDetail in liabilityDetails"
                :key="liabilityDetail.index"
                :href="`#tab-${liabilityDetail.index}`"
              >
                <v-icon left>mdi-account</v-icon>
                Year {{ liabilityDetail.index + 1 }}
              </v-tab>
              <v-tabs-slider></v-tabs-slider>
              <v-tab-item
                v-for="liabilityDetail in liabilityDetails"
                :key="liabilityDetail.index"
                :value="'tab-' + liabilityDetail.index"
              >
                <v-card flat>
                  <v-card-text>
                    <v-row>
                      <v-col cols="12">
                        <v-text-field
                          label="Year*"
                          hint="www.example.com/page"
                          required
                          outlined
                        ></v-text-field>
                      </v-col>
                    </v-row>
                    <v-row>
                      <v-col cols="12" md="6">
                        <v-text-field
                          label="Customs/ Inland Revenue*"
                          hint="www.example.com/page"
                          required
                          outlined
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12" md="6">
                        <v-text-field
                          label="Liability Amount"
                          hint="www.example.com/page"
                          outlined=""
                        ></v-text-field>
                      </v-col>
                    </v-row>
                  </v-card-text>
                </v-card>
              </v-tab-item>
            </v-tabs>

            <v-subheader class="pl-0"
              ><h3>
                Attachments
              </h3>
              <v-spacer></v-spacer>
            </v-subheader>
            <v-divider class="py-4"></v-divider>
            <v-subheader class="pa-12 pl-0"
              ><h4>
                Balance Sheets of last 3 financial years
              </h4></v-subheader
            >
            <v-row>
              <v-col cols="12" sm="12" md="2">
                <p class="mt-4 ml-4">Select Year 1</p>
              </v-col>
              <v-col cols="12" sm="12" md="5">
                <v-menu
                  ref="menu1"
                  v-model="menu1"
                  :close-on-content-click="false"
                  transition="scale-transition"
                  offset-y
                  full-width
                  max-width="290px"
                  min-width="290px"
                >
                  <template v-slot:activator="{ on }">
                    <v-text-field
                      v-model="dateFormatted"
                      hint="MM/DD/YYYY format"
                      label="Open date:"
                      outlined
                      prepend-icon="event"
                      @blur="date = parseDate(dateFormatted)"
                      v-on="on"
                    ></v-text-field>
                  </template>
                  <v-date-picker
                    v-model="date"
                    no-title
                    @input="menu1 = false"
                  ></v-date-picker>
                </v-menu>
              </v-col>
              <v-col cols="12" sm="12" md="5">
                <v-file-input
                  v-model="files"
                  color="deep-purple accent-4"
                  counter
                  label="Upload Balance Sheet"
                  multiple
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
              <v-col cols="12" sm="12" md="2">
                <p class="mt-4 ml-4">Select Year 2</p>
              </v-col>
              <v-col cols="12" sm="12" md="5">
                <v-menu
                  ref="menu1"
                  v-model="menu1"
                  :close-on-content-click="false"
                  transition="scale-transition"
                  offset-y
                  full-width
                  max-width="290px"
                  min-width="290px"
                >
                  <template v-slot:activator="{ on }">
                    <v-text-field
                      v-model="dateFormatted"
                      hint="MM/DD/YYYY format"
                      label="Open date:"
                      outlined
                      prepend-icon="event"
                      @blur="date = parseDate(dateFormatted)"
                      v-on="on"
                    ></v-text-field>
                  </template>
                  <v-date-picker
                    v-model="date"
                    no-title
                    @input="menu1 = false"
                  ></v-date-picker>
                </v-menu>
              </v-col>
              <v-col cols="12" sm="12" md="5">
                <v-file-input
                  v-model="files"
                  color="deep-purple accent-4"
                  counter
                  label="Upload Balance Sheet"
                  multiple
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
              <v-col cols="12" sm="12" md="2">
                <p class="mt-4 ml-4">Select Year 3</p>
              </v-col>
              <v-col cols="12" sm="12" md="5">
                <v-menu
                  ref="menu1"
                  v-model="menu1"
                  :close-on-content-click="false"
                  transition="scale-transition"
                  offset-y
                  full-width
                  max-width="290px"
                  min-width="290px"
                >
                  <template v-slot:activator="{ on }">
                    <v-text-field
                      v-model="dateFormatted"
                      hint="MM/DD/YYYY format"
                      label="Open date:"
                      outlined
                      prepend-icon="event"
                      @blur="date = parseDate(dateFormatted)"
                      v-on="on"
                    ></v-text-field>
                  </template>
                  <v-date-picker
                    v-model="date"
                    no-title
                    @input="menu1 = false"
                  ></v-date-picker>
                </v-menu>
              </v-col>
              <v-col cols="12" sm="12" md="5">
                <v-file-input
                  v-model="files"
                  color="deep-purple accent-4"
                  counter
                  label="Upload Balance Sheet"
                  multiple
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
            <v-divider class="py-4"></v-divider>
            <v-subheader class="pa-12 pl-0"
              ><h4>
                Solvency Certificates by the External Auditor for last 3 financial years
              </h4></v-subheader
            >
            <v-row>
              <v-col cols="12" sm="12" md="2">
                <p class="mt-4 ml-4">Select Year 1</p>
              </v-col>
              <v-col cols="12" sm="12" md="5">
                <v-menu
                  ref="menu1"
                  v-model="menu1"
                  :close-on-content-click="false"
                  transition="scale-transition"
                  offset-y
                  full-width
                  max-width="290px"
                  min-width="290px"
                >
                  <template v-slot:activator="{ on }">
                    <v-text-field
                      v-model="dateFormatted"
                      hint="MM/DD/YYYY format"
                      label="Open date:"
                      outlined
                      prepend-icon="event"
                      @blur="date = parseDate(dateFormatted)"
                      v-on="on"
                    ></v-text-field>
                  </template>
                  <v-date-picker
                    v-model="date"
                    no-title
                    @input="menu1 = false"
                  ></v-date-picker>
                </v-menu>
              </v-col>
              <v-col cols="12" sm="12" md="5">
                <v-file-input
                  v-model="files"
                  color="deep-purple accent-4"
                  counter
                  label="Upload Solvency Certificates by the External Auditor"
                  multiple
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
              <v-col cols="12" sm="12" md="2">
                <p class="mt-4 ml-4">Select Year 2</p>
              </v-col>
              <v-col cols="12" sm="12" md="5">
                <v-menu
                  ref="menu1"
                  v-model="menu1"
                  :close-on-content-click="false"
                  transition="scale-transition"
                  offset-y
                  full-width
                  max-width="290px"
                  min-width="290px"
                >
                  <template v-slot:activator="{ on }">
                    <v-text-field
                      v-model="dateFormatted"
                      hint="MM/DD/YYYY format"
                      label="Open date:"
                      outlined
                      prepend-icon="event"
                      @blur="date = parseDate(dateFormatted)"
                      v-on="on"
                    ></v-text-field>
                  </template>
                  <v-date-picker
                    v-model="date"
                    no-title
                    @input="menu1 = false"
                  ></v-date-picker>
                </v-menu>
              </v-col>
              <v-col cols="12" sm="12" md="5">
                <v-file-input
                  v-model="files"
                  color="deep-purple accent-4"
                  counter
                  label="Upload Solvency Certificates by the External Auditor"
                  multiple
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
              <v-col cols="12" sm="12" md="2">
                <p class="mt-4 ml-4">Select Year 3</p>
              </v-col>
              <v-col cols="12" sm="12" md="5">
                <v-menu
                  ref="menu1"
                  v-model="menu1"
                  :close-on-content-click="false"
                  transition="scale-transition"
                  offset-y
                  full-width
                  max-width="290px"
                  min-width="290px"
                >
                  <template v-slot:activator="{ on }">
                    <v-text-field
                      v-model="dateFormatted"
                      hint="MM/DD/YYYY format"
                      label="Open date:"
                      outlined
                      prepend-icon="event"
                      @blur="date = parseDate(dateFormatted)"
                      v-on="on"
                    ></v-text-field>
                  </template>
                  <v-date-picker
                    v-model="date"
                    no-title
                    @input="menu1 = false"
                  ></v-date-picker>
                </v-menu>
              </v-col>
              <v-col cols="12" sm="12" md="5">
                <v-file-input
                  v-model="files"
                  color="deep-purple accent-4"
                  counter
                  label="Upload Solvency Certificates by the External Auditor"
                  multiple
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
  name: "FinancialCompliance",
  data: vm => ({
    partner: "",
    frequency: ["Daily", "Weekly", "Monthly", "Other"],
    bankAccountTypes: ["SAVINGS", "NRFC", "RFC", "BFCA", "OTHER"],
    automatedOrManual: ["Automated", "Manual"],
    liabilityDetails: [
      {
        index: 0,
        data: {
          tin: "",
          name: "",
          address: "",
          natureOfPartner: "",
          partnerAgreement: ""
        }
      }
    ],
    date: new Date().toISOString().substr(0, 10),
    dateFormatted: vm.formatDate(new Date().toISOString().substr(0, 10))
  }),

  created() {
    this.initialize();
  },

  watch: {
    date() {
      this.dateFormatted = this.formatDate(this.date);
    }
  },

  methods: {
    formatDate(date) {
      if (!date) return null;

      const [year, month, day] = date.split("-");
      return `${day}/${month}/${year}`;
    },
    parseDate(date) {
      if (!date) return null;

      const [month, day, year] = date.split("/");
      return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
    },
    initialize() {
      // this.activeTab = 0;
      this.liabilityDetails = [
        {
          index: 0,
          data: {
            tin: "",
            name: "",
            address: "",
            natureOfPartner: "",
            partnerAgreement: ""
          }
        }
      ];
    },

    addNewLiablilityDetails() {
      const liabilityDetail = {
        index: this.liabilityDetails.length,
        data: {
          tin: "",
          name: "",
          address: "",
          natureOfPartner: "",
          partnerAgreement: ""
        }
      };

      this.liabilityDetails = [...this.liabilityDetails, liabilityDetail];
    }
  }
};
</script>
