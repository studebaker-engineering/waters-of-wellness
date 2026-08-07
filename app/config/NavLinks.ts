import { href } from "react-router";
import type { LinkItem } from "@/types";

export const NAV_LINKS: Array<LinkItem> = [
	{ sortOrder: 1, label: "Home", href: href("/") },
	{ sortOrder: 1, label: "About", href: href("/about") },
	{ sortOrder: 2, label: "FAQ", href: href("/frequently-asked-questions") },
	{ sortOrder: 3, label: "Contact", href: href("/contact") },
];
