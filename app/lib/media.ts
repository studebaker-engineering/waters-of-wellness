export const MEDIA_ORIGIN = "https://media.studebaker.engineering";
const MEDIA_BASE_URL = `${MEDIA_ORIGIN}/waters-of-wellness`;

export const heroVideoUrl = (fileName: string) =>
	`${MEDIA_BASE_URL}/hero/${fileName}`;
