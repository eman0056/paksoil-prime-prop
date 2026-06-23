import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";
import { properties } from "@/data/properties";

const BASE_URL = "";

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const staticPaths = ["/", "/properties", "/services", "/list-property", "/about", "/contact"];
        const entries = [
          ...staticPaths.map((p) => ({ path: p })),
          ...properties.map((p) => ({ path: `/properties/${p.id}` })),
        ];
        const urls = entries
          .map((e) => `  <url><loc>${BASE_URL}${e.path}</loc></url>`)
          .join("\n");
        const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>`;
        return new Response(xml, {
          headers: { "Content-Type": "application/xml", "Cache-Control": "public, max-age=3600" },
        });
      },
    },
  },
});