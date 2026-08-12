export const MEDIA_ORIGIN = "https://media.studebaker.engineering";
const MEDIA_BASE_URL = `${MEDIA_ORIGIN}/waters-of-wellness`;

// Bump when hero_video assets are replaced so browsers can't serve a
// stale cached copy from a previous upload under the same filename.
const HERO_VIDEO_VERSION = 2;

export const heroVideoUrl = (fileName: string) =>
	`${MEDIA_BASE_URL}/hero_video/${fileName}?v=${HERO_VIDEO_VERSION}`;

export const DOCK_PHOTO_WIDTHS = [400, 600, 800, 1000, 1200, 1600, 2000];

export const dockPhotoUrl = (width: number) =>
	`${MEDIA_BASE_URL}/dock-photo/dock-photo-${width}w.webp`;

export const dockPhotoSrcSet = DOCK_PHOTO_WIDTHS.map(
	(width) => `${dockPhotoUrl(width)} ${width}w`,
).join(", ");

export const HERO_IMAGE_TIERS = {
	mobile: { widths: [750, 1500] },
	tablet: { widths: [1024, 2048] },
	desktop: { widths: [1920, 3840] },
} as const;

export const heroImageUrl = (
	slug: string,
	tier: keyof typeof HERO_IMAGE_TIERS,
	width: number,
) => `${MEDIA_BASE_URL}/hero-images/${slug}/${tier}-${width}w.webp`;

export const heroImageSrcSet = (
	slug: string,
	tier: keyof typeof HERO_IMAGE_TIERS,
) =>
	HERO_IMAGE_TIERS[tier].widths
		.map((width) => `${heroImageUrl(slug, tier, width)} ${width}w`)
		.join(", ");

export const heroImageSources = (slug: string) => ({
	mobile: heroImageSrcSet(slug, "mobile"),
	tablet: heroImageSrcSet(slug, "tablet"),
	desktop: heroImageSrcSet(slug, "desktop"),
	fallbackSrc: heroImageUrl(slug, "tablet", HERO_IMAGE_TIERS.tablet.widths[0]),
});
