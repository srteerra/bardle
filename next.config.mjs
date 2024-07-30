import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: false,
    domains: ["cdn.communitydragon.org", "ddragon.leagueoflegends.com"],
  },
};

export default withNextIntl(nextConfig);
