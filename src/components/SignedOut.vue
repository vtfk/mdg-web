<template>
  <v-container>
    <v-layout wrap>
      <v-container fluid grid-list-lg>
        <v-layout wrap>
          <v-flex xs12>
            <v-card>
              <v-card-title primary-title>
                <h3 class="headline">Logget ut</h3>
              </v-card-title>
              <v-card-text>
                Du er logget ut. Klikk <a href="/">her</a> for å logge inn igjen.
              </v-card-text>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-layout>
  </v-container>
</template>
<style scoped>
code {
  margin-right: 15px;
}
p {
  font-size: 18px !important;
  color: black;
}
h5, h3 {
  color: black;
}
</style>
