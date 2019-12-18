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
                Busines Partner Details
              </h3></v-subheader
            >
            <v-divider class="py-4"></v-divider>
            <v-row>
              <v-col cols="12">
                <v-text-field
                  label="Name of the Contact Person*"
                  hint="www.example.com/page"
                  required
                  outlined
                ></v-text-field>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12" md="6">
                <v-text-field
                  label="Designation"
                  hint="www.example.com/page"
                  outlined=""
                ></v-text-field>
              </v-col>

              <v-col cols="12" md="6">
                <v-text-field
                  label="Email"
                  hint="www.example.com/page"
                  outlined=""
                ></v-text-field>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12" md="4">
                <v-text-field label="Contact Number 01" outlined></v-text-field>
              </v-col>

              <v-col cols="12" md="4">
                <v-text-field label="Contact Number 02" outlined></v-text-field>
              </v-col>

              <v-col cols="12" md="4">
                <v-text-field label="Contact Number 03" outlined></v-text-field>
              </v-col>
            </v-row>

            <v-subheader class="pl-0"
              ><h3>
                Company Bank Account Details
              </h3></v-subheader
            >
            <v-divider class="py-4"></v-divider>
            <v-row>
              <v-col cols="12">
                <v-text-field
                  label="Name of the Contact Person*"
                  hint="www.example.com/page"
                  required
                  outlined
                ></v-text-field>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12" md="6">
                <v-text-field
                  label="Designation"
                  hint="www.example.com/page"
                  outlined=""
                ></v-text-field>
              </v-col>

              <v-col cols="12" md="6">
                <v-text-field
                  label="Email"
                  hint="www.example.com/page"
                  outlined=""
                ></v-text-field>
              </v-col>
            </v-row>
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
  name: "CommercialRecords",
  data: () => ({
    frequency: ["Daily", "Weekly", "Monthly", "Other"],
    automatedOrManual: ["Automated", "Manual"]
  })
};
</script>
