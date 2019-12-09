<template>
  <v-content>
    <v-container>
      <v-layout justify-center flat="true" wrap>
        <v-card outlined width="90%" class="pa-8">
          <v-list-item two-line>
            <v-list-item-content>
              <v-list-item-title class="headline"
                >Opporational Details</v-list-item-title
              >
              <!-- <v-list-item-subtitle
                >Mon, 12:30 PM, Mostly sunny</v-list-item-subtitle
              > -->
            </v-list-item-content>
          </v-list-item>
          <v-card-text>
            <v-tabs vertical>
              <v-tab>
                <v-icon left>mdi-account</v-icon>
                Location 1
              </v-tab>
              <v-tab>
                <v-icon left>mdi-lock</v-icon>
                Location 2
              </v-tab>
              <v-tab>
                <v-icon left>mdi-access-point</v-icon>
                Location 3
              </v-tab>

              <v-tab-item>
                <v-card flat>
                  <v-card-text>
                    <p>
                      Sed aliquam ultrices mauris. Donec posuere vulputate arcu.
                      Morbi ac felis. Etiam feugiat lorem non metus. Sed a
                      libero.
                    </p>

                    <p>
                      Nam ipsum risus, rutrum vitae, vestibulum eu, molestie
                      vel, lacus. Aenean tellus metus, bibendum sed, posuere ac,
                      mattis non, nunc. Aliquam lobortis. Aliquam lobortis.
                      Suspendisse non nisl sit amet velit hendrerit rutrum.
                    </p>

                    <p class="mb-0">
                      Phasellus dolor. Fusce neque. Fusce fermentum odio nec
                      arcu. Pellentesque libero tortor, tincidunt et, tincidunt
                      eget, semper nec, quam. Phasellus blandit leo ut odio.
                    </p>
                  </v-card-text>
                </v-card>
              </v-tab-item>
              <v-tab-item>
                <v-card flat>
                  <v-card-text>
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
                            <p class="mt-4 ml-4">
                              Illustration of Process Map:
                            </p>
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
                            <p class="mt-4 ml-4">
                              Transport Document (Gate Pass) :
                            </p>
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
  data: () => ({})
};
</script>
