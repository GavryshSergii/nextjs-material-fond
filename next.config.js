const TerserPlugin = require('terser-webpack-plugin');
const withPlugins = require('next-compose-plugins');
const withSourceMaps = require('@zeit/next-source-maps');
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

const { assetPrefix = '' } = process.env;

const nextConfig = {
  poweredByHeader: false,
  distDir: 'build',
  assetPrefix,
  publicRuntimeConfig: {
    assetPrefix,
    TIMEOUT: parseInt(process.env.API_TIMEOUT, 10) || 30000,
  },
  webpack: (config, { dev, isServer }) => {
    //  Add polyfills
    const originalEntry = config.entry;
    config.entry = async () => {
      const entries = await originalEntry();

      if (entries['main.js'] && !entries['main.js'].includes('./src/polyfills.js')) {
        entries['main.js'].unshift('./src/polyfills.js');
      }

      return entries;
    };

    if (!dev && !isServer) {
      config.optimization.minimizer = [
        new TerserPlugin({
          parallel: true,
          sourceMap: true,
          // cache: true,
          terserOptions: {
            compress: {
              pure_funcs: [
                'console.assert',
                'console.count',
                'console.log',
                'console.debug',
                'console.dir',
                'console.dirxml',
                'console.warn',
                'console.error',
                'console.table',
                'console.timeLog',
                'console.timeEnd',
                'console.trace',
              ],
              // drop_console: true,
            },
          },
        }),
      ];
    }

    return config;
  },
};

module.exports = withPlugins([withSourceMaps, withBundleAnalyzer], nextConfig);
