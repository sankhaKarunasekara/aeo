<template>
  <v-content>
    <v-container fluid>
      <v-layout align-center justify-center wrap>
        <v-flex xs12 md10>
          <v-card>
            <v-toolbar color="#FFF" flat outline>
              <v-toolbar-title>Login</v-toolbar-title>
            </v-toolbar>
            <v-card-text>
              <v-form>
                <v-text-field
                  label="Login"
                  name="login"
                  prepend-icon="person"
                  type="text"
                  outlined
                ></v-text-field>

                <v-text-field
                  id="password"
                  label="Password"
                  name="password"
                  prepend-icon="lock"
                  type="password"
                  outlined
                ></v-text-field>
              </v-form>
            </v-card-text>
            <v-card-actions>
              <v-layout align-center justify-center>
                <v-btn color="primary" to="/Profile">Sign In</v-btn>
                <v-btn color="light">Clear</v-btn>
              </v-layout>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </v-content>
</template>

<script>
export default {
  name: "LogIn",

  data: () => ({})
};
</script>
