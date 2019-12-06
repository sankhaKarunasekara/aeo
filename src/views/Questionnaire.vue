<template>
  <v-app>
    <v-app-bar app color="light">
      <div class="d-flex align-center">
        <router-link to="/">
          <v-img
            alt="Vuetify Logo"
            class="shrink mr-2"
            contain
            src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
            transition="scale-transition"
            width="40"
          />
        </router-link>
        <h2>AEO Program - Sri Lanka Customs</h2>
      </div>
      <v-spacer></v-spacer>
      <v-menu offset-y>
        <template v-slot:activator="{ on }">
          <v-btn large icon v-on="on">
            <v-icon large color="gray">mdi-account-circle</v-icon>
          </v-btn>
        </template>
        <v-list>
          <v-list-item>
            <v-list-item-title @click="signOut()">logout</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>

    <v-content>
      <v-container fluid>
        <v-list>
          <v-list-item>
            <v-list-item-avatar color="white">
              <v-icon large color="gray">mdi-domain</v-icon>
            </v-list-item-avatar>
            <v-list-item-content>
              <v-list-item-title class="headline"
                >Self-Assessment Questionnaire</v-list-item-title
              >
              <v-list-item-subtitle>AEO Program</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-list>
        <v-layout justify-center="ture" fill-height class="pa-12 pt-4">
          <v-card max-width="960" flat>
            <v-form ref="form" v-model="valid" lazy-validation>
              <div v-for="(question, $index) in questions" :key="$index">
                <!-- type 1 questions -->
                <div v-if="question.type == 1">
                  <h3 class="pa-8 pb-0">
                    {{ question.no }}) {{ question.content }}
                  </h3>
                  <v-row class="ml-12">
                    <v-radio-group v-model="question.yesNo" :mandatory="false">
                      <v-radio
                        value="Yes"
                        color="primary"
                        label="Yes"
                      ></v-radio>
                      <v-radio value="No" color="primary" label="No"></v-radio>
                    </v-radio-group>
                  </v-row>
                </div>
                <!-- type 2 questions -->
                <div v-if="question.type == 2">
                  <h3 class="pa-8 pb-0">
                    {{ question.no }}) {{ question.content }}
                  </h3>
                  <v-row class="ml-12">
                    <v-radio-group v-model="question.yesNo" :mandatory="false">
                      <v-radio
                        value="Yes"
                        color="primary"
                        label="Yes"
                      ></v-radio>
                      <v-radio value="No" color="primary" label="No"></v-radio>
                    </v-radio-group>
                    <div class="pl-12 pt-4">
                      <div class="text-center">
                        <v-rating
                          color="primary"
                          background-color="grey lighten-1"
                          length="10"
                        ></v-rating>
                        <div>
                          <span class="caption text-uppercase">Rating:</span>
                          <span class="font-weight-bold">
                            {{ rating }}/10
                          </span>
                        </div>
                      </div>
                    </div>
                  </v-row>
                </div>

                <!-- type 3 questions -->
                <div v-if="question.type == 3">
                  <h3 class="pa-8 pb-0">
                    {{ question.no }}) {{ question.content }}
                  </h3>
                  <v-row class="ml-12">
                    <v-radio-group v-model="question.yesNo" :mandatory="false">
                      <v-radio
                        value="Yes"
                        color="primary"
                        label="Yes"
                      ></v-radio>
                      <v-radio value="No" color="primary" label="No"></v-radio>
                    </v-radio-group>
                  </v-row>
                  <h4 class="pa-12 pb-0 pt-0" v-if="question.yesNo == 'Yes'">
                    If <b>Yes</b> give us details.
                  </h4>
                  <v-expand-transition>
                    <div class="pa-12 pb-0 pt-4" v-if="question.yesNo == 'Yes'">
                      <v-textarea
                        name="comment"
                        outlined
                        append-icon="comment"
                        auto-grow
                        v-model="question.comment"
                        hint="Hint text"
                      ></v-textarea>
                    </div>
                  </v-expand-transition>
                </div>

                <!-- type 4 questions -->
                <div v-if="question.type == 4">
                  <h3 class="pa-8 pb-0">
                    {{ question.no }}) {{ question.content }}
                  </h3>
                  <v-row class="ml-12">
                    <v-radio-group v-model="question.yesNo" :mandatory="false">
                      <v-radio
                        value="Yes"
                        color="primary"
                        label="Yes"
                      ></v-radio>
                      <v-radio value="No" color="primary" label="No"></v-radio>
                    </v-radio-group>
                  </v-row>
                </div>
              </div>

              <v-btn color="error" class="mr-4" @click="reset">
                Reset Form
              </v-btn>

              <v-btn color="warning" @click="resetValidation">
                Reset Validation
              </v-btn>
            </v-form>
          </v-card>
        </v-layout>
      </v-container>
    </v-content>
    <v-footer>
      <span class="px-4"
        >Sri Lanka Customs &copy; {{ new Date().getFullYear() }}</span
      >
    </v-footer>
  </v-app>
</template>

<script>
import router from "../router";

export default {
  name: "Questionnaire",
  methods: {
    signOut: function() {
      router.push({ name: "questionnaire" });
    }
  },
  data() {
    return {
      questions: [
        {
          no: 1,
          content:
            "Has your CEO/AEO application been rejected or your CEO/AEO status been suspended or revoked in past ?",
          type: 1,
          yesNo: undefined
        },
        {
          no: 2,
          content:
            "According to your knowledge does the company possess Customs and/or other Departments’ licenses/certificates with respect to category of AEO application?",
          type: 1,
          yesNo: undefined
        },
        {
          no: 3,
          content:
            "According to your knowledge does the company possess Customs, Central Excise, Service Tax and other Department’s licenses / registration / certificates?",
          type: 1,
          comment: "",
          yesNo: undefined
        },
        {
          no: 4,
          content:
            "Does your entity has business activities for at least three financial years preceding the date of application?",
          type: 1,
          comment: "",
          yesNo: undefined
        },
        {
          no: 5,
          content:
            "Whether you have filed or handled at least 25 CUSDECs or other relevant documents with the Customs during the last financial year ?",
          type: 1,
          yesNo: undefined
        },
        {
          no: 6,
          content:
            "Whether the company has ever been convicted of a criminal offence?",
          type: 3,
          comment: "",
          yesNo: undefined
        },
        {
          no: 7,
          content:
            "Were there any Show-Cause notices issued during the last 3 financial years?",
          type: 3,
          comment: "",
          yesNo: undefined
        },
        {
          no: 8,
          content:
            "Are there any cases against your company wherein prosecution has been launched?",
          type: 3,
          comment: "",
          yesNo: undefined
        },
        {
          no: 9,
          content:
            "What is the amount of disputed duty demanded or recovery of drawback paid in excess or sought to be denied, in all the Show-cause notices issued during the last three financial years?",

          type: 4,
          comment: "",
          yesNo: undefined
        },
        {
          no: 10,
          content:
            "What is the total duty paid and drawback claimed during the preceding three financial years?",
          type: 4,
          comment: "",
          yesNo: undefined
        },
        {
          no: 11,
          content:
            "What is the ratio of the disputed duty amount involved in the Show Cause Notices (SCNs) to the total duty paid / drawback claimed during the preceding three years?",
          type: 4,
          comment: "",
          yesNo: undefined
        },
        {
          no: 12,
          content:
            "Does the existing accounting system is in line with the  Generally Accepted Accounting Principles (GAAP) or International Financial Reporting Standards (IFRS) ?",
          type: 2,
          rating: 0,
          yesNo: undefined
        },
        {
          no: 13,
          content:
            "Does company have a proper administrative setup & adequate internal controls to detect illegal or irregular transactions?",
          type: 2,
          rating: 0,
          yesNo: undefined
        },
        {
          no: 14,
          content:
            "Are there any satisfactory procedures in place for the handling of licenses and authorizations connected to export/import?",
          type: 2,
          rating: 0,
          yesNo: undefined
        },
        {
          no: 15,
          content:
            "Are there any satisfactory procedures in place for archiving of the company’s records and information, and also for protection against the loss of information?",
          type: 2,
          rating: 0,
          yesNo: undefined
        },
        {
          no: 16,
          content:
            "Is there a satisfactory procedure for verifying the accuracy of Customs declarations?",
          type: 2,
          rating: 0,
          yesNo: undefined
        },
        {
          no: 17,
          content:
            "Are there any appropriate information technology security measures to protect the applicant’s computer system from unauthorized intrusion and to secure the applicant’s documentation?",
          type: 2,
          rating: 0,
          yesNo: undefined
        },
        {
          no: 18,
          content:
            "Is there a satisfactory procedure to verify and prevent unauthorized CUSDECs being processed using the company name?",
          type: 2,
          rating: 0,
          yesNo: undefined
        },
        {
          no: 19,
          content:
            "Are employees aware that they need to inform Customs whenever compliance difficulties are discovered?",
          type: 2,
          rating: 0,
          yesNo: undefined
        },
        {
          no: 20,
          content:
            "Was the company financially solvent during the three financial years preceding the date of application according to your knowledge? (Solvency would generally be defined as good financial standing that is sufficient to fulfill the commitments of the applicant including ability to pay duties)?",
          type: 2,
          rating: 0,
          yesNo: undefined
        },
        {
          no: 21,
          content:
            "Were the accounts have been filed with Registrar of Companies within the time limits laid down by law? (Whenever required)?",
          type: 2,
          rating: 0,
          yesNo: undefined
        },
        {
          no: 22,
          content:
            "According to your knowledge do you see audit qualifications or comments in the annual accounts about the continuation of the business as a going concern?",
          type: 2,
          rating: 0,
          yesNo: undefined
        },
        {
          no: 23,
          content: "Are there any contingent liabilities or provisions?",
          type: 1,
          yesNo: undefined
        },
        {
          no: 24,
          content:
            "Are the net current assets are positive for last 3 financial years?",
          type: 1,
          yesNo: undefined
        },
        {
          no: 25,
          content:
            "Are there any solvency certificates issued by the Statutory Auditor for last 3 years?",
          type: 1,
          yesNo: undefined
        },
        {
          no: 26,
          content: "Is the business entity is currently listed as insolvent?",
          type: 1,
          yesNo: undefined
        }
      ]
    };
  }
};
</script>
