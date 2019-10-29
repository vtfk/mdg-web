<template>

  <v-form
    ref="form"
    v-model="valid"
  >
    <v-text-field
      :value="$route.params.id"
      label="Dokumenttype"
      placeholder="Navn på dokumenttype"
      required
      :rules="inputRules"
      readonly
      disabled
    ></v-text-field>

    <v-text-field
      value=""
      label="Beskrivelse"
      placeholder="En beskrivelse av dokumenttypen"
      required
      autofocus
      :rules="inputRules"
    ></v-text-field>

    <v-text-field
      value="Overføringsbrev"
      label="Dokumenttittel"
      placeholder="Dokumenttittel"
      required
      :rules="inputRules"
    ></v-text-field>

    <v-text-field
      value="Overføringsbrev - ${employee.name}"
      label="Uoffisiell dokumenttittel"
      placeholder="Uoffisiell dokumenttittel"
      required
      :rules="inputRules"
    ></v-text-field>

    <v-select
      v-model="status"
      :items="statusList"
      label="Status"
      placeholder="Status (f.eks. B)"
      required
      :rules="inputRules"
    ></v-select>

    <v-text-field
      value=""
      label="Tilgangsgruppe"
      placeholder="Tilgangsgruppe (f.eks. tg-ansatt)"
      required
      :rules="inputRules"
    ></v-text-field>

    <v-text-field
      value=""
      label="Tilgangskode"
      placeholder="Tilgangsgruppe (f.eks. 13)"
      required
      :rules="inputRules"
    ></v-text-field>

    <v-select
      v-model="classificationCode"
      :items="classificationCodeList"
      label="Klassifiseringskode"
      required
      :rules="inputRules"
    ></v-select>

    <v-text-field
      value=""
      label="Paragraf"
      placeholder="Tilgangsgruppe (f.eks. Offl §13 jfr Fvl §13.1)"
      required
      :rules="inputRules"
    ></v-text-field>

    <v-select
      v-model="category"
      :items="categoryList"
      label="Kategori"
      required
      :rules="inputRules"
    ></v-select>

    <div>
      <v-btn
        to="/"
        class="mr-5"
        color="error"
      >
        Avbryt
      </v-btn>

      <v-btn
        color="success"
        :disabled="!valid"
      >
        Lagre
      </v-btn>

    </div>

  </v-form>

</template>

<script>
export default {
  name: 'AddDocument',
  data: () => ({
    valid: false,
    inputRules: [
      v => !!v || 'Påkrevd felt'
    ],
    category: 'Dokument inn',
    status: 'J',
    classificationCode: 'B31',
    statusList: [
      {
        text: 'Journalført',
        value: 'J'
      },
      {
        text: 'Under behandling',
        value: 'U'
      }
    ],
    categoryList: [
      'Dokument inn',
      'Dokument ut',
      'Notat'
    ],
    classificationCodeList: [
      'B31'
    ]
  }),
  methods: {
    validate () {
      if (this.$refs.form.validate()) {
        console.log(this.$refs.form)
      }
    }
  }
}
</script>
