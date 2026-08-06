import type { href } from "react-router";

export interface LinkItem {
	sortOrder: number;
	label: string;
	href: ReturnType<typeof href>;
}
