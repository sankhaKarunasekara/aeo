import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import vuetify from "./plugins/vuetify";
import * as firebase from "firebase";

Vue.config.productionTip = false;

var firebaseConfig = {
  apiKey: "AIzaSyCGSbPRHXOyBBkFyxLQSHaXq47tgX5oKAk",
  authDomain: "aeo-live.firebaseapp.com",
  databaseURL: "https://aeo-live.firebaseio.com",
  projectId: "aeo-live",
  storageBucket: "aeo-live.appspot.com",
  messagingSenderId: "802398241032",
  appId: "1:802398241032:web:864e71c10965eb60102cbd",
  measurementId: "G-614NCXKHSR"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount("#app");
