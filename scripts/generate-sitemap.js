/**
 * Script para gerar sitemap.xml automaticamente
 * Execute: node scripts/generate-sitemap.js
 */

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Configure sua URL base aqui
const BASE_URL = "https://gabrieljesuspsicologo.com.br";
const SITEMAP_PATH = path.join(__dirname, "../public/sitemap.xml");

// Configure suas páginas/seções aqui
const pages = [
	{
		url: "/",
		priority: "1.0",
		changefreq: "weekly",
		description: "Página Principal",
	},
	{
		url: "/#sobre",
		priority: "0.8",
		changefreq: "monthly",
		description: "Seção Sobre",
	},
	{
		url: "/#therapy",
		priority: "0.9",
		changefreq: "monthly",
		description: "Terapia Online",
	},
	{
		url: "/#testimonials",
		priority: "0.7",
		changefreq: "weekly",
		description: "Depoimentos",
	},
	{
		url: "/#faq",
		priority: "0.8",
		changefreq: "monthly",
		description: "FAQ",
	},
];

function generateSitemap() {
	const today = new Date().toISOString().split("T")[0];

	const urlElements = pages
		.map(
			(page) => `
  <!-- ${page.description} -->
  <url>
    <loc>${BASE_URL}${page.url}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`,
		)
		.join("");

	const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
        http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
${urlElements}
</urlset>
`;

	fs.writeFileSync(SITEMAP_PATH, sitemap, "utf8");
	console.log("✅ Sitemap gerado com sucesso em:", SITEMAP_PATH);
	console.log("📅 Data de última modificação:", today);
	console.log("🔗 Total de URLs:", pages.length);
}

// Executar
try {
	generateSitemap();
} catch (error) {
	console.error("❌ Erro ao gerar sitemap:", error);
	process.exit(1);
}
