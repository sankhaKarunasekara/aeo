<template>
  <v-content>
    <v-container>
      <v-layout justify-center flat="true" wrap>
        <v-card outlined width="95%" class="pa-8">
          <v-list-item two-line>
            <v-list-item-content>
              <v-list-item-title class="headline"
                >Commercial Record Keeping</v-list-item-title
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
                Business Partner(s) Details
              </h3>
              <v-spacer></v-spacer>
              <span>
                <v-btn @click="addNewPartner()" class="mr-4" color="primary">
                  <v-icon color="white">mdi-plus</v-icon>
                  Add Partner
                </v-btn>
                <v-btn @click="deletePartner()" color="error">
                  <v-icon color="white">mdi-delete</v-icon>
                </v-btn>
              </span>
            </v-subheader>
            <v-divider class="py-4"></v-divider>

            <v-tabs>
              <v-tab
                v-for="partner in partners"
                :key="partner.index"
                :href="`#tab-${partner.index}`"
              >
                <v-icon left>mdi-account</v-icon>
                Partner {{ partner.index + 1 }}
              </v-tab>
              <v-tabs-slider></v-tabs-slider>
              <v-tab-item
                v-for="partner in partners"
                :key="partner.index"
                :value="'tab-' + partner.index"
              >
                <v-card flat>
                  <v-card-text>
                    <v-row>
                      <v-col cols="12">
                        <v-text-field
                          label="Name*"
                          hint="www.example.com/page"
                          required
                          outlined
                        ></v-text-field>
                      </v-col>
                    </v-row>
                    <v-row>
                      <v-col cols="12" md="6">
                        <v-text-field
                          label="TIN Number*"
                          hint="www.example.com/page"
                          required
                          outlined
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12" md="6">
                        <v-text-field
                          label="Nature of Partner"
                          hint="www.example.com/page"
                          outlined=""
                        ></v-text-field>
                      </v-col>
                    </v-row>
                    <v-row
                      ><v-col cols="12">
                        <v-text-field
                          label="Address"
                          hint="www.example.com/page"
                          outlined=""
                        ></v-text-field> </v-col
                    ></v-row>
                    <v-row>
                      <v-col cols="12" sm="12" md="4">
                        <p class="mt-4 ml-4">Partner Agreement</p>
                      </v-col>
                      <v-col cols="12" sm="12" md="8">
                        <v-file-input
                          v-model="files"
                          color="deep-purple accent-4"
                          counter
                          label="Upload the partner agreement"
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
                </v-card>
              </v-tab-item>
            </v-tabs>

            <v-subheader class="pl-0"
              ><h3>
                Company Bank Account Details
              </h3>
              <v-spacer></v-spacer>
              <span>
                <v-btn
                  @click="addNewBankAccount()"
                  class="mr-4"
                  color="primary"
                >
                  <v-icon color="white">mdi-plus</v-icon>
                  Add Bank Account
                </v-btn>
                <v-btn @click="deleteBankAccount()" color="error">
                  <v-icon color="white">mdi-delete</v-icon>
                </v-btn>
              </span></v-subheader
            >
            <v-divider class="py-4"></v-divider>
            <v-tabs>
              <v-tab
                v-for="bankAccount in bankAccounts"
                :key="bankAccount.index"
                :href="`#tab-${bankAccount.index}`"
              >
                <v-icon left>mdi-account</v-icon>
                Account {{ bankAccount.index + 1 }}
              </v-tab>
              <v-tabs-slider></v-tabs-slider>
              <v-tab-item
                v-for="bankAccount in bankAccounts"
                :key="bankAccount.index"
                :value="'tab-' + bankAccount.index"
              >
                <v-card flat class="pa-4">
                  <v-row>
                    <v-col cols="12" md="6">
                      <v-text-field
                        label="Bank*"
                        hint="www.example.com/page"
                        required
                        outlined
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" md="6">
                      <v-text-field
                        label="Branch"
                        hint="www.example.com/page"
                        outlined=""
                      ></v-text-field>
                    </v-col>
                  </v-row>

                  <v-row>
                    <v-col cols="12" md="6">
                      <v-select
                        :items="bankAccountTypes"
                        label="A/C Type"
                        outlined
                      ></v-select>
                    </v-col>

                    <v-col cols="12" md="6">
                      <v-text-field
                        label="A/C Number"
                        hint="www.example.com/page"
                        outlined=""
                      ></v-text-field>
                    </v-col>
                  </v-row>
                  <v-row
                    ><v-col cols="12" md="12">
                      <v-text-field
                        label="A/C Holders Name"
                        hint="www.example.com/page"
                        outlined=""
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="12" md="6">
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
                  </v-row>
                </v-card>
              </v-tab-item>
            </v-tabs>
            <v-subheader class="pl-0"
              ><h3>
                Procedure for administrating Licenses & Authorizations for
                Exports & Imports
              </h3></v-subheader
            >
            <v-divider class="py-4"></v-divider>

            <v-row>
              <v-col cols="12" sm="12"
                ><v-file-input
                  v-model="files"
                  color="deep-purple accent-4"
                  counter
                  label="Upload your Procedure Document"
                  multiple
                  placeholder="Click here to upload the document"
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
              <h4 class="ml-4 pb-4">
                Add the details of the responsible officials
              </h4>
            </v-row>
            <v-row>
              <v-col cols="12" md="8">
                <v-text-field label="Name" outlined></v-text-field>
              </v-col>

              <v-col cols="12" md="4">
                <v-text-field label="Position" outlined></v-text-field>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12" md="6">
                <v-text-field label="E-mail" outlined></v-text-field>
              </v-col>

              <v-col cols="12" md="6">
                <v-text-field label="Contact Number" outlined></v-text-field>
              </v-col>
            </v-row>

            <v-subheader class="pl-0"
              ><h3>
                Procedure for administrating commercial records connected to
                Exports & Imports
              </h3></v-subheader
            >
            <v-divider class="py-4"></v-divider>

            <v-row>
              <v-col cols="12" sm="12"
                ><v-file-input
                  v-model="files"
                  color="deep-purple accent-4"
                  counter
                  label="Upload your Procedure Document"
                  multiple
                  placeholder="Click here to upload the document"
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
              <h4 class="ml-4 pb-4">
                Add the details of the responsible officials
              </h4>
            </v-row>
            <v-row>
              <v-col cols="12" md="8">
                <v-text-field label="Name" outlined></v-text-field>
              </v-col>

              <v-col cols="12" md="4">
                <v-text-field label="Position" outlined></v-text-field>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12" md="6">
                <v-text-field label="E-mail" outlined></v-text-field>
              </v-col>

              <v-col cols="12" md="6">
                <v-text-field label="Contact Number" outlined></v-text-field>
              </v-col>
            </v-row>

            <v-subheader class="pl-0"
              ><h3>
                Procedure for verifying the accuracy of Customs Declarations (
                CusDecs)
              </h3></v-subheader
            >
            <v-divider class="py-4"></v-divider>

            <v-row>
              <v-col cols="12" sm="12"
                ><v-file-input
                  v-model="files"
                  color="deep-purple accent-4"
                  counter
                  label="Upload your Procedure Document"
                  multiple
                  placeholder="Click here to upload the document"
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
              <h4 class="ml-4 pb-4">
                Add the details of the responsible officials
              </h4>
            </v-row>
            <v-row>
              <v-col cols="12" md="8">
                <v-text-field label="Name" outlined></v-text-field>
              </v-col>

              <v-col cols="12" md="4">
                <v-text-field label="Position" outlined></v-text-field>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12" md="6">
                <v-text-field label="E-mail" outlined></v-text-field>
              </v-col>

              <v-col cols="12" md="6">
                <v-text-field label="Contact Number" outlined></v-text-field>
              </v-col>
            </v-row>

            <v-subheader class="pl-0"
              ><h3>
                Procedure to ensure security of computerized record keeping
                systems
              </h3></v-subheader
            >
            <v-divider class="py-4"></v-divider>

            <v-row>
              <v-col cols="12" sm="12"
                ><v-file-input
                  v-model="files"
                  color="deep-purple accent-4"
                  counter
                  label="Upload your Procedure Document"
                  multiple
                  placeholder="Click here to upload the document"
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
              <h4 class="ml-4 pb-4">
                Add the details of the responsible officials
              </h4>
            </v-row>
            <v-row>
              <v-col cols="12" md="8">
                <v-text-field label="Name" outlined></v-text-field>
              </v-col>

              <v-col cols="12" md="4">
                <v-text-field label="Position" outlined></v-text-field>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12" md="6">
                <v-text-field label="E-mail" outlined></v-text-field>
              </v-col>

              <v-col cols="12" md="6">
                <v-text-field label="Contact Number" outlined></v-text-field>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12" md="6">
                <v-text-field label="E-mail" outlined></v-text-field>
              </v-col>

              <v-col cols="12" md="6">
                <v-text-field label="Contact Number" outlined></v-text-field>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12" sm="12" md="4">
                <h3 class="mt-2 ml-4">
                  How frequent backups are taken?
                </h3>
              </v-col>
              <v-col cols="12" sm="12" md="6">
                <v-select
                  :items="frequency"
                  label="Frequency"
                  outlined
                ></v-select>
              </v-col>
              <v-col cols="12" sm="12" md="2">
                <v-text-field label="Days" outlined></v-text-field>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12" sm="12" md="4">
                <h3 class="mt-2 ml-4">
                  For how many days backups can be restored
                </h3>
              </v-col>
              <v-col cols="12" sm="12" md="8">
                <v-text-field label="Days" outlined></v-text-field>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12" sm="12" md="4">
                <h3 class="mt-2 ml-4">
                  Is the backup process Automated/Manual
                </h3>
              </v-col>
              <v-col cols="12" sm="12" md="8">
                <v-select
                  :items="automatedOrManual"
                  label="Automated/Manual"
                  outlined
                ></v-select>
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
  name: "LegalCompliance",
  data: vm => ({
    partner: "",
    frequency: ["Daily", "Weekly", "Monthly", "Other"],
    bankAccountTypes: ["SAVINGS", "NRFC", "RFC", "BFCA", "OTHER"],
    automatedOrManual: ["Automated", "Manual"],
    partners: [
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
    bankAccounts: [
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
      this.partners = [
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
      this.bankAccounts = [
        {
          index: 0,
          data: {
            bank: "",
            branch: "",
            acNumber: "",
            acType: "",
            acHoldersName: "",
            openDate: ""
          }
        }
      ];
    },

    addNewPartner() {
      const partner = {
        index: this.partners.length,
        data: {
          tin: "",
          name: "",
          address: "",
          natureOfPartner: "",
          partnerAgreement: ""
        }
      };

      this.partners = [...this.partners, partner];
    },

    addNewBankAccount() {
      const bankAccount = {
        index: this.bankAccounts.length,
        data: {
          bank: "",
          branch: "",
          acNumber: "",
          acType: "",
          acHoldersName: "",
          openDate: ""
        }
      };

      this.bankAccounts = [...this.bankAccounts, bankAccount];
    },

    deleteBankAccount() {
      if (this.bankAccounts.length != 1) {
        this.bankAccounts.splice(-1, 1);
      }
    }
  }
};
</script>
