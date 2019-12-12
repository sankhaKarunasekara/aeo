<template>
  <v-content>
    <v-container>
      <v-layout justify-center flat="true" wrap>
        <v-card outlined width="95%" class="pa-8">
          <v-list-item two-line>
            <v-list-item-content>
              <v-list-item-title class="headline"
                >Declaration to be made by the company</v-list-item-title
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
                Contact Details of the AEO coordinator of the company
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
                Alternate Contact Details
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

  data: () => ({})
};
</script>
