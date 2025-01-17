const withPlugins = require("next-compose-plugins");
const withPWA = require('next-pwa')({
    dest: 'public',
    disable: process.env.NODE_ENV === 'development',
    register: true,
    sw: 'service-worker.js',
    // scope: '/app',
    })

module.exports = withPlugins([
    [withPWA({})]
], {
    i18n: {
        locales: ['en-US', 'fr-FR', 'nl-NL'],
        defaultLocale: 'en-US',
    },
});

// Don't delete this console log, useful to see the commerce config in Vercel deployments
console.log('next.config.js', JSON.stringify(module.exports, null, 2))

{/*module.exports = withPlugins([
    [withPWA({
        pwa: {
          dest: 'public',
          runtimeCaching,
        },
      })]
], {});*/}