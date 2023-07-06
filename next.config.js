/** @type {import('next').NextConfig} */
module.exports = {
  env: {
    characterApi: "https://rickandmortyapi.com",
    vercelRepo: "https://api.github.com/repos/vercel",
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "media.geeksforgeeks.org",
      },
    ],
  },
};
