#!/usr/bin/env node
// One-time/rerunnable generator for art-directed hero image crops + srcset widths.
// Reads full-res source webp files from app/assets and writes resized variants
// to dist/hero-images/{slug}/{tier}-{width}w.webp for manual upload to R2 under
// waters-of-wellness/hero/{slug}/{tier}-{width}w.webp.
import { mkdir } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const ROOT = path.resolve(import.meta.dirname, "..");
const SOURCE_DIR = path.join(ROOT, "app/assets");
const OUTPUT_DIR = path.join(ROOT, "dist/hero-images");

const TIERS = {
	mobile: { ratio: 4 / 5, widths: [750, 1500] },
	tablet: { ratio: 4 / 3, widths: [1024, 2048] },
	desktop: { ratio: 16 / 9, widths: [1920, 3840] },
};

const HEROES = {
	about: "about-hero.webp",
	cht: "cht-hero.webp",
	contact: "contact-hero.webp",
	detox: "detox-hero.webp",
	faq: "faq-hero.webp",
	ifd: "ifd-hero.webp",
};

const centerCropExtract = (metaWidth, metaHeight, ratio) => {
	const currentRatio = metaWidth / metaHeight;
	if (currentRatio > ratio) {
		const width = Math.round(metaHeight * ratio);
		return {
			width,
			height: metaHeight,
			left: Math.round((metaWidth - width) / 2),
			top: 0,
		};
	}
	const height = Math.round(metaWidth / ratio);
	return {
		width: metaWidth,
		height,
		left: 0,
		top: Math.round((metaHeight - height) / 2),
	};
};

const generate = async (slug, fileName) => {
	const sourcePath = path.join(SOURCE_DIR, fileName);
	const source = sharp(sourcePath);
	const metadata = await source.metadata();

	for (const [tier, { ratio, widths }] of Object.entries(TIERS)) {
		const crop = centerCropExtract(metadata.width, metadata.height, ratio);
		const outDir = path.join(OUTPUT_DIR, slug);
		await mkdir(outDir, { recursive: true });

		for (const width of widths) {
			const outPath = path.join(outDir, `${tier}-${width}w.webp`);
			await sharp(sourcePath)
				.extract(crop)
				.resize({ width })
				.webp({ quality: 80 })
				.toFile(outPath);
			console.log(`wrote ${path.relative(ROOT, outPath)}`);
		}
	}
};

for (const [slug, fileName] of Object.entries(HEROES)) {
	await generate(slug, fileName);
}
