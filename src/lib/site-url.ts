export function getSiteUrl() {
  const configuredUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (configuredUrl) {
    const url = new URL(configuredUrl);
    if (url.protocol !== "https:" && url.hostname !== "localhost") {
      throw new Error("NEXT_PUBLIC_SITE_URL must use HTTPS outside localhost.");
    }
    return url.origin;
  }

  const productionHost = process.env.VERCEL_PROJECT_PRODUCTION_URL;
  if (productionHost) return `https://${productionHost}`;

  const deploymentHost = process.env.VERCEL_URL;
  if (deploymentHost) return `https://${deploymentHost}`;

  return "http://localhost:3000";
}
