/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  images:{
    domains: ['img.pokemondb.net']
  }
};


export default nextConfig;
