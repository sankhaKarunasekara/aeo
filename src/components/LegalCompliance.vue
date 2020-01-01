<template>
  <v-content>
    <v-container>
      <v-layout justify-center flat="true" wrap>
        <v-card outlined width="95%" class="pa-8">
          <v-list-item two-line>
            <v-list-item-content>
              <v-list-item-title class="headline"
                >Legal Compliance</v-list-item-title
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
                Customs Case Details
              </h3>
            </v-subheader>
            <v-divider class="py-4"></v-divider>
            <CaseDetailsTable />

            <v-subheader class="pl-0 mt-8"
              ><h3>
                Attachments
              </h3></v-subheader
            >
            <v-divider class="py-4"></v-divider>
            <v-row>
              <v-col cols="12" sm="12" md="6">
                <p class="mt-4 ml-4">
                  Is your company declared bankruptcy withn last 3 years
                </p>
              </v-col>
              <v-col cols="12" sm="12" md="6">
                <v-radio-group v-model="row" class="pl-sm-4" row>
                  <v-radio label="Yes" value="yes"></v-radio>
                  <v-radio label="No" value="no"></v-radio>
                </v-radio-group>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12" sm="12" md="6">
                <p class="mt-4 ml-4">
                  if yes, attach the declaration duly signed by CFO
                </p>
              </v-col>
              <v-col cols="12" sm="12" md="6">
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
import CaseDetailsTable from "../components/CaseDetailsTable";

export default {
  name: "LegalCompliance",
  components: {
    CaseDetailsTable
  },
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
      this.customsCases = [
        {
          index: 0,
          data: {
            year: "",
            caseNo: "",
            offence: "",
            panaltyAmount: "",
            personInvolved: "",
            position: ""
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

    addNewCustomsCase() {
      const customsCase = {
        index: this.customsCases.length,
        data: {
          year: "",
          caseNo: "",
          offence: "",
          natureOfPartner: "",
          partnerAgreement: ""
        }
      };

      this.customsCases = [...this.customsCases, customsCase];
    },

    deleteCustomsCase() {
      if (this.customsCases.length != 1) {
        this.customsCases.splice(-1, 1);
      }
    },

    addInlandRevenueCase() {
      const inlandRevCase = {
        index: this.inalandRevCases.length,
        data: {
          bank: "",
          branch: "",
          acNumber: "",
          acType: "",
          acHoldersName: "",
          openDate: ""
        }
      };

      this.inalandRevCases = [...this.inalandRevCases, inlandRevCase];
    },

    deleteInlandRevenueCase() {
      if (this.inalandRevCases.length != 1) {
        this.inalandRevCases.splice(-1, 1);
      }
    }
  }
};
</script>
