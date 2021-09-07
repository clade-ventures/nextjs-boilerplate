const { i18n } = require("./next-i18next.config");

const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.BUNDLE_ANALYZE === "true",
});

const nextConfig = {
  i18n,
};

module.exports = withBundleAnalyzer(nextConfig);
