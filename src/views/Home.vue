<template>
  <v-container
    color="background"
    v-if="oidcIsAuthenticated"
  >
    <v-layout>
      <v-flex>
        <Documents>
        </Documents>
      </v-flex>
    </v-layout>
  </v-container>
  <SignedOut v-else>
  </SignedOut>
</template>

<script>
import SignedOut from '../components/SignedOut'
import Documents from '../components/Documents'
import { mapState, mapGetters } from 'vuex'

export default {
  name: 'Home',
  created () {
    this.$store.dispatch('GET_STUDENTS')
  },
  computed: {
    ...mapState([
      'students',
      'loading'
    ]),
    ...mapGetters('oidcStore', ['oidcIsAuthenticated'])
  },
  components: {
    SignedOut,
    Documents
  }
}
</script>
