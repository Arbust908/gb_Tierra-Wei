module.exports = {
  title: 'Las Tierras de Wei' ,
  description: 'En esta analogo a Japon Feudal van a suceder las mejores aventuras.' ,
  themeConfig: {
    nav: [
      { text: 'Home',           link: '/'         },
      { text: 'Tierras de Wei', link: '/wei/'     },
      /* { text: 'Classes',        link: '/classes/' }, */
      { text: 'Clanes',         link: '/clanes/'  },
      /* { text: 'Items',          link: '/items/'   }, */
      /* { text: 'Reglas',         link: '/reglas/'  }, */
    ],
    sidebar: 'auto',
    displayAllHeaders: true
  },
  plugins: {
    '@vuepress/pwa': {
       serviceWorker: true,
       updatePopup: {
         message: "Hay nuevo contenido.",
         buttonText: "Actualizar"
       }
     }
  }
}