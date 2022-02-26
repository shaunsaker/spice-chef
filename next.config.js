module.exports = {
  reactStrictMode: true,

  images: {
    domains: ['assets.epicurious.com'],
  },

  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },
};
