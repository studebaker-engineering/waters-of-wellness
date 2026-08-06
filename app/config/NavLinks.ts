import { href } from "react-router";
import type { LinkItem } from "@/types";

export const NAV_LINKS: Array<LinkItem> = [
	{ sortOrder: 0, label: "About", href: href("/about") },
	{ sortOrder: 1, label: "FAQ", href: href("/frequently-asked-questions") },
	{ sortOrder: 2, label: "Contact", href: href("/contact") },
];
