import { href } from "react-router";
import type { LinkItem } from "@/types";

export const SERVICE_LINKS: Array<LinkItem> = [
	{
		sortOrder: 0,
		label: "Colon Hydrotherapy",
		href: href("/services/colon-hydrotherapy"),
	},
	{ sortOrder: 1, label: "Detox Wraps", href: href("/services/detox-wraps") },
	{
		sortOrder: 2,
		label: "Ionic Foot Detox",
		href: href("/services/ionic-foot-detox"),
	},
];
