<template>
  <v-content>
    <v-container>
      <v-layout justify-center flat="true" wrap>
        <v-card style="background='fafafa'" outlined width="95%" class="pa-8">
          <v-list-item two-line>
            <v-list-item-content>
              <v-list-item-title class="headline"
                >Company Details</v-list-item-title
              >
              <!-- <v-list-item-subtitle
                >Mon, 12:30 PM, Mostly sunny</v-list-item-subtitle
              > -->
            </v-list-item-content>
          </v-list-item>
          <!-- <v-subheader class="pl-0"><h3>Opporator Details</h3></v-subheader>
          <v-divider class="py-4"></v-divider>-->
          <v-card-text>
            <v-row>
              <v-col cols="12">
                <v-text-field
                  label="Economic Operator Name*"
                  hint="www.example.com/page"
                  required
                  outlined
                ></v-text-field>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12" sm="4">
                <v-select
                  :items="typeOfBusiness"
                  label="Type of Business"
                  outlined
                ></v-select>
              </v-col>

              <v-col cols="12" sm="4">
                <v-text-field
                  label="Tin No."
                  hint="www.example.com/page"
                  outlined=""
                ></v-text-field>
              </v-col>

              <v-col cols="12" sm="4">
                <v-text-field
                  label="Vat No."
                  hint="www.example.com/page"
                  outlined=""
                ></v-text-field>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12" sm="6">
                <v-text-field
                  label="Company Registration No."
                  outlined
                  target="#dropdown-example"
                ></v-text-field>
              </v-col>

              <v-col cols="12" sm="6">
                <v-select
                  :items="industryClassification"
                  label="Indusry Classification"
                  outlined
                ></v-select>
              </v-col>
            </v-row>

            <v-subheader class="pl-0"><h3>Attachments</h3></v-subheader>
            <v-divider class="py-4"></v-divider>

            <v-row>
              <v-col cols="12" sm="12" md="4" lg="2">
                <p class="mt-4 ml-4">TIN Registration :</p>
              </v-col>
              <v-col cols="12" sm="12" md="8" lg="10"
                ><v-file-input
                  v-model="files"
                  color="deep-purple accent-4"
                  counter
                  label="Upload your VAT Registration Certificate"
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
              <v-col cols="12" sm="12" md="4" lg="2">
                <p class="mt-4 ml-4">Vat Registration :</p>
              </v-col>
              <v-col cols="12" sm="12" md="8" lg="10">
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

            <v-row>
              <v-col cols="12" sm="12" md="4" lg="2">
                <p class="mt-4 ml-4">Company Registration :</p>
              </v-col>
              <v-col cols="12" sm="12" md="8" lg="10">
                <v-file-input
                  v-model="files"
                  color="primary accent-4"
                  label="Upload your Company Registration Certificate"
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
  name: "CompanyDetails",

  data: () => ({
    industryClassification: [
      "Automotive",
      "Pharmaceutical",
      "Textile",
      "Chemicals & Plastics",
      "IT",
      "Metals",
      "Minerals",
      "Agriculture and processed food",
      "Electronics",
      "Other"
    ],
    typeOfBusiness: [
      "Sole Proprietorship",
      "Partnership",
      "Private Ltd Liability",
      "Public Ltd Company",
      "Corporation",
      "Govenment",
      "Other"
    ]
  })
};
</script>
