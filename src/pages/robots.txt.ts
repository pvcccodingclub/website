import type { APIContext } from 'astro';

export async function GET(context: APIContext) {
    const sitemapURL = new URL('sitemap-index.xml', context.site ?? "");
    return new Response(`User-agent: *\nAllow: /\n\nSitemap: ${sitemapURL.href}`);
};