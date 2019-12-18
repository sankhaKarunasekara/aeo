<template>
  <v-content>
    <v-container>
      <v-layout justify-center flat="true" wrap>
        <v-card outlined width="95%" class="pa-8">
          <v-list-item two-line>
            <v-list-item-content>
              <v-list-item-title class="headline"
                >Declaration</v-list-item-title
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
                Declaration to be made by the company
              </h3></v-subheader
            >
            <v-divider class="py-4"></v-divider>
            <v-row>
              <div>
                <p class="pa-4">
                  <strong>
                    I hereby declare that all the information given in this
                    application and in all documents submitted herewith is true
                    and accurate.By tendering this application form for joining
                    the Sri Lanka Customs AEO Programme, I acknowledge my
                    understanding and acceptance of the following terms and
                    conditions:
                  </strong>
                </p>

                <ul>
                  <li>
                    To provide in the application the completed application
                    form, self-assessment questionnaire and supporting
                    documents;
                  </li>
                  <li>
                    To inform Risk Management Directorate of Sri Lanka Customs
                    of any change in the particulars declared on this
                    application form and in all submitted documents any time
                    before the starting of or during the documentary check.
                  </li>

                  <li>
                    To offer adequate and reasonable assistance to Sri Lanka
                    Customs on documentary check(s) and audits.
                  </li>

                  <li>
                    To allow Sri Lanka Customs to publish the name of my company
                    once accredited with the AEO status.
                  </li>
                </ul>
                <h4 class="pa-4">
                  <strong>
                    I understand and agree that all information I submit in
                    relation to this application will be verified by the Sri
                    Lanka Customs as required.</strong
                  >
                </h4>
              </div>
            </v-row>
            <v-row>
              <v-col cols="12">
                <v-text-field
                  label="Full Name*"
                  hint="ex: Wijesekaralage Sarath Kumara Amarakeerthi"
                  prepend-inner-icon="mdi-account"
                  required
                  outlined
                ></v-text-field>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12" md="6">
                <v-text-field
                  label="Position in the company*"
                  prepend-inner-icon="mdi-briefcase-account"
                  hint="ex: Manager"
                  outlined=""
                ></v-text-field>
              </v-col>

              <v-col cols="12" md="6">
                <v-text-field
                  label="Email*"
                  prepend-inner-icon="email"
                  hint="www.example.com/page"
                  outlined=""
                ></v-text-field>
              </v-col>
            </v-row>
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
                      label="Date"
                      outlined
                      prepend-inner-icon="event"
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
            <v-layout row wrap align-center>
              <v-flex>
                <v-row justify="center" class="mb-8 mt-4 ml-8 mr-8 pb-4">
                  <v-btn
                    class="ma-2"
                    to="/CEO/General_Compliance"
                    x-large
                    color="primary"
                    >Submit</v-btn
                  >
                  <v-btn
                    class="ma-2"
                    to="/AEO/General_Compliance"
                    color="primary"
                    x-large
                    >Save and Exit</v-btn
                  >
                </v-row>
              </v-flex>
            </v-layout>
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
  name: "Declaration",

  data: vm => ({
    date: new Date().toISOString().substr(0, 10),
    dateFormatted: vm.formatDate(new Date().toISOString().substr(0, 10))
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
