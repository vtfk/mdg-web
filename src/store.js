import Vue from 'vue'
import Vuex from 'vuex'
import { vuexOidcCreateStoreModule } from 'vuex-oidc'
import config from '../config'
import getData from './lib/get-data'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    snackbar: {
      active: false,
      message: false,
      type: false
    },
    students: [],
    student: {},
    groups: [],
    documents: [],
    loading: false,
    previewDialog: false,
    pdfFile: false
  },
  getters: {
    getPdfFile: ({ pdfFile }) => {
      /* eslint-env browser */
      if (!pdfFile) return
      return new Uint8Array(atob(pdfFile).split('').map(c => c.charCodeAt(0)))
    },
    groupNames: ({ groups }) => groups
      .filter(group => group.type === 'class')
      .map(({ name, gid }) => `${name} (${gid})`),
    contactGroupNames: ({ groups }) => groups
      .filter(group => group.type === 'main')
      .map(({ name, gid }) => `${name} (${gid})`)
  },
  mutations: {
    SET_PDF_FILE: (state, payload) => {
      state.pdfFile = payload
    },
    SET_PREVIEW_DIALOG: (state, payload) => {
      state.previewDialog = payload
      if (!payload) state.pdfFile = false
    },
    SET_STUDENT_DIALOG: (state, payload) => {
      state.studentDialog = payload
      if (!payload) state.student = {}
    },
    SET_STUDENT: (state, payload) => {
      state.student = payload
    },
    SET_STUDENTS: (state, payload) => {
      state.students = payload
    },
    SET_GROUPS: (state, payload) => {
      state.groups = payload
    },
    SET_DOCUMENTS: (state, payload) => {
      state.documents = payload
    },
    SET_LOADING: (state, payload) => {
      state.loading = payload
    },
    SET_SNACKBAR: (state, { msg, type = 'info' }) => {
      state.snackbar = {
        message: msg,
        type,
        active: true
      }
    }
  },
  actions: {
    GET_STUDENT: async (context, payload) => {
      try {
        context.commit('SET_LOADING', true)
        const { data } = await getData(`/students/${payload}`)
        context.commit('SET_STUDENT', data)
        context.commit('SET_LOADING', false)
      } catch (error) {
        context.commit('SET_SNACKBAR', { msg: error.message, type: 'error' })
        context.commit('SET_LOADING', false)
      }
    },
    GET_STUDENTS: async (context, payload) => {
      try {
        context.commit('SET_LOADING', true)
        const { data } = await getData('/students')
        context.commit('SET_STUDENTS', data)
        context.commit('SET_LOADING', false)
      } catch (error) {
        context.commit('SET_SNACKBAR', { msg: error.message, type: 'error' })
        context.commit('SET_LOADING', false)
      }
    },
    GET_GROUPS: async (context, payload) => {
      try {
        context.commit('SET_LOADING', true)
        const { data } = await getData('/groups')
        context.commit('SET_GROUPS', data)
        context.commit('SET_LOADING', false)
      } catch (error) {
        context.commit('SET_SNACKBAR', { msg: error.message, type: 'error' })
        context.commit('SET_LOADING', false)
      }
    },
    GET_DOCUMENTS: async (context, payload) => {
      try {
        context.commit('SET_LOADING', true)
        // TODO: Fix loop
        // const { data } = await getData(`/students/bolb1/documents`)
        context.commit('SET_DOCUMENTS', [])
        context.commit('SET_LOADING', false)
      } catch (error) {
        context.commit('SET_SNACKBAR', { msg: error.message, type: 'error' })
        context.commit('SET_LOADING', false)
      }
    },
    GENERATE_PREVIEW: async (context, payload) => {
      try {
        context.commit('SET_LOADING', true)
        const { data } = await getData('/documents/generate/base64', {})
        context.commit('SET_PDF_FILE', data)
        context.commit('SET_PREVIEW_DIALOG', true)
        context.commit('SET_LOADING', false)
      } catch (error) {
        context.commit('SET_SNACKBAR', { msg: error.message, type: 'error' })
        context.commit('SET_LOADING', false)
      }
    }
  },
  modules: {
    oidcStore: vuexOidcCreateStoreModule(config.auth, { namespaced: true })
  }
})
