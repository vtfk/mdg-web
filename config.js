const getAuthConfig = (url = 'http://localhost:8080') => ({
  auth: {
    authority: process.env.VUE_APP_AUTH_AUTHORITY || 'https://accounts.google.com',
    clientId: process.env.VUE_APP_AUTH_CLIENT_ID || '244258194345-mhh30378l6o6n97v2lf5svhv51e4bski.apps.googleusercontent.com',
    redirectUri: process.env.VUE_APP_AUTH_REDIRECT_URI || `${url}/oidc-callback`,
    responseType: process.env.VUE_APP_AUTH_RESPONSE_TYPE || 'id_token token',
    scope: process.env.VUE_APP_AUTH_SCOPE || 'openid profile email',
    automaticSilentRenew: process.env.VUE_APP_AUTH_CLIENT_ID || true,
    silentRedirectUri: process.env.VUE_APP_AUTH_CLIENT_ID || `${url}/silent-renew-oidc.html`
  }
})

export default {
  apiUrl: process.env.VUE_APP_MDG_API_URL || 'https://api.louie.alheimsins.net/api',
  company: {
    name: process.env.VUE_APP_MDG_COMPANY_NAME || 'Vestfold og Telemark',
    logo: process.env.VUE_APP_MDG_COMPANY_LOGO || 'data:image/png;base64,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',
    supportMail: process.env.VUE_APP_COMPANY_SUPPORT_MAIL || 'post@fylkeskommune.no'
  },
  productOwner: process.env.VUE_APP_PRODUCT_OWNER || 'Vestfold og Telemark',
  fonts: {
    primary: process.env.VUE_APP_FONT_PRIMARY || 'Nunito',
    title: process.env.VUE_APP_FONT_TITLE || 'Nunito Sans'
  },
  colors: {
    primary: process.env.VUE_APP_MDG_COLOR_PRIMARY || '#005260',
    background: process.env.VUE_APP_MDG_COLOR_BACKGROUND || '#f7f7f7',
    secondary: process.env.VUE_APP_MDG_COLOR_SECONDARY || '#ebe6d6',
    accent: process.env.VUE_APP_MDG_COLOR_ACCENT || '#6ac4ae',
    error: process.env.VUE_APP_MDG_COLOR_ERROR || '#e40017',
    info: process.env.VUE_APP_MDG_COLOR_INFO || '#00b1c7',
    success: process.env.VUE_APP_MDG_COLOR_SUCCESS || '#C0DCB2',
    warning: process.env.VUE_APP_MDG_COLOR_WARNING || '#FFCD00'
  },
  ...getAuthConfig(process.env.VUE_APP_MDG_PROD_URL)
}
