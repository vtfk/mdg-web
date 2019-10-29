<template>
  <div>

    <div
      v-for="document in documents"
      :key="document.title"
      class="ma-5"
    >
      <v-card>
        <v-list>
          <v-list-item two-line>
            <v-list-item-content>
              <v-list-item-title>{{ document.title }}</v-list-item-title>
              <v-list-item-subtitle>{{ document.description }}</v-list-item-subtitle>
            </v-list-item-content>
            <v-list-item-action>
              <v-btn :to="'/document/' + document.title" icon>
                <v-icon>mdi-pencil</v-icon>
              </v-btn>
            </v-list-item-action>
            <v-list-item-action>
              <v-btn @click="confirmDeleteDialog = true" icon>
                <v-icon>mdi-delete</v-icon>
              </v-btn>
            </v-list-item-action>
          </v-list-item>
        </v-list>
      </v-card>
    </div>

    <div class="mx-auto" style="width: fit-content;">
      <v-btn fab dark color="primary" @click="addDocumentDialog = true">
        <v-icon dark>mdi-plus</v-icon>
      </v-btn>
    </div>

    <v-dialog
      v-model="addDocumentDialog"
      width="500"
    >
      <v-card>
        <v-card-title
          class="headline"
          primary-title
        >
          Legg til dokumenttype
        </v-card-title>
        <v-card-text>
          <v-text-field
            v-model="name"
            label="Navn"
            placeholder="Navn til dokumenttypen"
            autofocus
          ></v-text-field>
        </v-card-text>
        <v-card-actions>
          <v-btn
            @click="addDocumentDialog = false"
            color="error"
          >
            Avbryt
          </v-btn>
          <v-spacer></v-spacer>
          <v-btn
            :to="'/document/' + name"
            color="primary"
            :disabled="name.length === 0"
          >
            Legg til
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <v-dialog
      v-model="confirmDeleteDialog"
      max-width="400"
    >
      <v-card
        color="red"
        dark
      >
        <v-card-title
          class="headline text-uppercase"
          primary-title
        >
          Bekreft fjerning
        </v-card-title>
        <v-card-text style="color: white; font-size: 18px;">
          Er du sikker på at du vil fjerne denne dokumenttypen?
        </v-card-text>
        <v-card-actions>
          <v-btn light @click="confirmDeleteDialog = false">
            Avbryt
          </v-btn>
          <v-spacer></v-spacer>
          <v-btn light>
            Slett
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

  </div>
</template>

<script>
export default {
  name: 'Documents',
  data: () => ({
    documents: [
      {
        title: 'overforingsbrev',
        description: 'Overføringsbrev til ansatte'
      },
      {
        title: 'asd',
        description: 'sss'
      }
    ],
    addDocumentDialog: false,
    confirmDeleteDialog: false,
    name: ''
  })
}
</script>
