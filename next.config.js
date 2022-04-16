const isProd = process.env.NODE_ENV === 'production'

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  basePath: isProd ? "/countries" : "",
  compiler: {
    styledComponents: true,
  },
};

module.exports = nextConfig;
