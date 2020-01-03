<template>
  <v-content>
    <v-container>
      <v-layout justify-center flat="true" wrap>
        <v-card outlined width="90%" class="pa-8">
          <v-list-item two-line>
            <v-list-item-content>
              <v-list-item-title class="headline"
                >Operational Details</v-list-item-title
              >
              <!-- <v-list-item-subtitle
                >Mon, 12:30 PM, Mostly sunny</v-list-item-subtitle
              > -->
            </v-list-item-content>
          </v-list-item>

          <v-card-text>
            <v-subheader class="pl-0"><h3>Operational Capacity</h3></v-subheader
            ><v-divider class="pt-4"></v-divider>

            <v-row>
              <v-col cols="12" sm="12" md="12">
                <v-row>
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
                          label="Select Last Financial Year:"
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
                  <v-col cols="12" sm="12" md="6">
                    <v-select
                      :items="durations"
                      label="Active Period of the Business"
                      outlined
                    ></v-select>
                  </v-col>
                </v-row>

                <v-row>
                  <v-col cols="12" sm="12" md="4">
                    <p class="my-2 ml-4">
                      Total amount of Customs duties paid for the last financial
                      year
                    </p>
                  </v-col>
                  <v-col cols="12" sm="12" md="8">
                    <v-text-field
                      label="Total amount of Customs duties paid for the last financial year"
                      hint="www.example.com/page"
                      outlined=""
                    ></v-text-field>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col cols="12" sm="12" md="4">
                    <p class="my-2 ml-4">
                      Total CIF value of all imports for the last financial year
                    </p>
                  </v-col>
                  <v-col cols="12" sm="12" md="8">
                    <v-text-field
                      label="Total CIF value of all imports for the last financial year"
                      hint="www.example.com/page"
                      outlined=""
                    ></v-text-field>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col cols="12" sm="12" md="4">
                    <p class="my-2 ml-4">
                      No of CUSDECs handled by the company in the last year
                    </p>
                  </v-col>
                  <v-col cols="12" sm="12" md="8">
                    <v-text-field
                      label="No of CUSDECs handled by the company in the last year"
                      hint="www.example.com/page"
                      outlined=""
                    ></v-text-field>
                  </v-col>
                </v-row>
              </v-col>
            </v-row>

            <v-subheader class="pl-0"
              ><h3>Main Business Activities</h3></v-subheader
            >
            <v-divider class="pt-4"></v-divider>
            <v-row class="mb-4">
              <v-col cols="12" sm="4" md="4">
                <v-checkbox
                  v-model="ex4"
                  label="Importer"
                  color="primary"
                  value="red"
                  hide-details
                ></v-checkbox>
                <v-checkbox
                  v-model="ex4"
                  label="Exporter"
                  color="primary"
                  value="red darken-3"
                  hide-details
                ></v-checkbox>
              </v-col>
              <v-col cols="12" sm="4" md="4">
                <v-checkbox
                  v-model="ex4"
                  label="Clearing Agent"
                  color="primary"
                  value="indigo"
                  hide-details
                ></v-checkbox>
                <v-checkbox
                  v-model="ex4"
                  label="Vessel Agent"
                  color="primary"
                  value="indigo darken-3"
                  hide-details
                ></v-checkbox>
              </v-col>
              <v-col cols="12" sm="4" md="4">
                <v-checkbox
                  v-model="ex4"
                  label="Other Economic Operator"
                  color="primary"
                  value="orange"
                  hide-details
                ></v-checkbox>
                <v-checkbox
                  v-model="ex4"
                  label="Freight Forwarder"
                  color="primary"
                  value="orange darken-3"
                  hide-details
                ></v-checkbox>
              </v-col>
            </v-row>
            <v-subheader class="pl-0"
              ><h3>Import Export Details</h3></v-subheader
            >
            <v-divider class="pt-4"></v-divider>
            <v-row>
              <v-col cols="12" md="12">
                <ImExDetailsTable />
              </v-col>
            </v-row>

            <v-subheader class="pl-0"><h3>Attachments</h3></v-subheader>
            <v-divider class="pt-4"></v-divider>

            <v-row>
              <v-col cols="12" sm="12" md="12">
                <v-row>
                  <v-col cols="12" sm="12" md="4">
                    <p class="mt-4 ml-4">Illustration of Process Map:</p>
                  </v-col>
                  <v-col cols="12" sm="12" md="8">
                    <v-file-input
                      v-model="files"
                      color="primary accent-4"
                      label="Upload your Process Map"
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

                <v-subheader class="pa-12 pl-0"
                  ><h4>
                    Sample documents related to goods flow
                  </h4></v-subheader
                >
                <!-- <v-divider class="pt-"></v-divider> -->
                <v-row>
                  <v-col cols="12" sm="12" md="4">
                    <p class="mt-4 ml-4">Purchase Order :</p>
                  </v-col>
                  <v-col cols="12" sm="12" md="8">
                    <v-file-input
                      v-model="files"
                      color="deep-purple accent-4"
                      counter
                      label="Upload your Purchase Order"
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
                  <v-col cols="12" sm="12" md="4">
                    <p class="mt-4 ml-4">Sale Invoice :</p>
                  </v-col>
                  <v-col cols="12" sm="12" md="8">
                    <v-file-input
                      v-model="files"
                      color="deep-purple accent-4"
                      counter
                      label="Upload your Company Registration Certificate"
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
                  <v-col cols="12" sm="12" md="4">
                    <p class="mt-4 ml-4">Goods Receipt Note :</p>
                  </v-col>
                  <v-col cols="12" sm="12" md="8">
                    <v-file-input
                      v-model="files"
                      color="deep-purple accent-4"
                      counter
                      label="Upload your Company Registration Certificate"
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
                  <v-col cols="12" sm="12" md="4">
                    <p class="mt-4 ml-4">Record Keeping Mechanism :</p>
                  </v-col>
                  <v-col cols="12" sm="12" md="8">
                    <v-file-input
                      v-model="files"
                      color="deep-purple accent-4"
                      counter
                      label="Upload your Company Registration Certificate"
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
                  <v-col cols="12" sm="12" md="4">
                    <p class="mt-4 ml-4">Transport Document (Gate Pass) :</p>
                  </v-col>
                  <v-col cols="12" sm="12" md="8">
                    <v-file-input
                      v-model="files"
                      color="deep-purple accent-4"
                      counter
                      label="Upload your Transport Document (Gate Pass)"
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
import ImExDetailsTable from "./ImExDetailsTable";
export default {
  name: "OperationalDetails",
  components: {
    ImExDetailsTable
  },
  data: vm => ({
    date: new Date().toISOString().substr(0, 10),
    dateFormatted: vm.formatDate(new Date().toISOString().substr(0, 10)),
    menu1: false,
    menu2: false,
    durations: [
      "Less than a Year",
      "1 year to 3 years",
      "3 years to 10 years",
      "More than 10 years"
    ]
  }),

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
    }
  }
};
</script>
