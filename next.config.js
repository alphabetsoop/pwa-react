const withPWA = require('next-pwa')
const runtimeCaching = require('next-pwa/cache')

module.exports = withPWA({
  pwa: {
    dest: 'public',
    runtimeCaching,
  },

  async rewrites() {
    return [
      {
        source: '/:any*',
        destination: '/',
      },
    ];
  },

})
