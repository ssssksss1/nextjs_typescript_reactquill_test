/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

//module.exports = nextConfig

module.exports = {
  nextConfig,
  assetPrefix:
    process.env.NODE_ENV === "production"
      ? "https://ssssksss1.github.io/invitation"
      : "",
};