<template>
  <v-data-table
    :headers="headers"
    :items="items"
    sort-by="year"
    class="elevation-1"
  >
    <template v-slot:top>
      <v-toolbar flat color="white">
        <!-- <v-divider class="mx-4" inset vertical></v-divider> -->
        <v-spacer></v-spacer>
        <v-dialog v-model="dialog" max-width="600">
          <template v-slot:activator="{ on }">
            <v-btn color="primary" dark class="mb-2" v-on="on">New Case</v-btn>
          </template>
          <v-card background="#F5F5F5" flat>
            <v-card-title>
              <span class="headline">{{ formTitle }}</span>
            </v-card-title>
            <v-card-text>
              <v-container>
                <v-row>
                  <v-col cols="12" sm="12" md="6">
                    <v-text-field
                      outlined="true"
                      v-model="editedItem.year"
                      label="Year"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="12" md="6">
                    <v-select
                      outlined
                      v-model="editedItem.caseType"
                      :items="typeOfCase"
                      label="Type (Import or Export)"
                    ></v-select>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col cols="12" sm="12" md="12">
                    <v-text-field
                      outlined="true"
                      v-model="editedItem.caseNo"
                      label="Case No"
                    ></v-text-field>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col cols="12" sm="12" md="12">
                    <v-text-field
                      outlined
                      v-model="editedItem.offence"
                      label="Offence"
                    ></v-text-field>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col cols="12" sm="12" md="12">
                    <v-text-field
                      outlined
                      v-model="editedItem.penaltyAmount"
                      label="Penalty Amount"
                    ></v-text-field>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col cols="12" sm="12" md="12">
                    <v-text-field
                      outlined
                      v-model="editedItem.personInvolved"
                      label="Person Involved"
                    ></v-text-field>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col cols="12" sm="12" md="12">
                    <v-text-field
                      outlined
                      v-model="editedItem.designation"
                      label="Position in the applicant Company"
                    ></v-text-field>
                  </v-col>
                </v-row>
              </v-container>
            </v-card-text>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="close">Cancel</v-btn>
              <v-btn color="blue darken-1" text @click="save">Save</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-toolbar>
    </template>
    <template v-slot:item.action="{ item }">
      <v-icon small class="mr-2" @click="editItem(item)">
        edit
      </v-icon>
      <v-icon small @click="deleteItem(item)">
        delete
      </v-icon>
    </template>
    <template v-slot:no-data>
      <v-btn color="primary" @click="initialize">Reset</v-btn>
    </template>
  </v-data-table>
</template>
<script>
export default {
  data: () => ({
    countriesList: ["India", "China"],
    typeOfCase: ["Customs Case", "Inland Revenue Case"],
    dialog: false,
    headers: [
      {
        text: "Year",
        align: "left",
        sortable: true,
        value: "year"
      },
      {
        text: "Case Type",
        align: "left",
        sortable: false,
        value: "caseType"
      },
      {
        text: "Case Number",
        align: "left",
        sortable: false,
        value: "caseNo"
      },
      { text: "Offence", sortable: false, value: "offence" },
      {
        text: "Penalty Amount",
        sortable: false,
        align: "left",
        value: "penaltyAmount"
      },
      { text: "Person Involved", sortable: false, value: "personInvolved" },
      {
        text: "Position in the applicant company",
        sortable: false,
        value: "designation"
      },
      { text: "Actions", value: "action", sortable: false }
    ],
    items: [],
    editedIndex: -1,
    editedItem: {
      year: "",
      caseType: "",
      caseNo: "",
      offence: "",
      penaltyAmount: "",
      personInvolved: "",
      designation: ""
    },
    defaultItem: {
      year: "",
      caseType: "",
      caseNo: "",
      offence: "",
      penaltyAmount: "",
      personInvolved: "",
      designation: ""
    }
  }),

  computed: {
    formTitle() {
      return this.editedIndex === -1 ? "New Case" : "Edit Case";
    }
  },

  watch: {
    dialog(val) {
      val || this.close();
    }
  },

  created() {
    this.initialize();
  },

  methods: {
    initialize() {
      this.items = [
        {
          year: "",
          caseType: "",
          caseNo: "",
          offence: "",
          penaltyAmount: "",
          personInvolved: "",
          designation: ""
        }
      ];
    },

    editItem(item) {
      this.editedIndex = this.items.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialog = true;
    },

    deleteItem(item) {
      const index = this.items.indexOf(item);
      confirm("Are you sure you want to delete this item?") &&
        this.items.splice(index, 1);
    },

    close() {
      this.dialog = false;
      setTimeout(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      }, 300);
    },

    save() {
      if (this.editedIndex > -1) {
        Object.assign(this.items[this.editedIndex], this.editedItem);
      } else {
        this.items.push(this.editedItem);
      }
      this.close();
    }
  }
};
</script>
