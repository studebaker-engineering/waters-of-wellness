import type { ReactNode } from "react";
import type { LinkItem } from "./LinkItem";

export interface ServiceCardConfig {
	title: string;
	children: ReactNode;
	icon: ReactNode;
	to: LinkItem["href"];
}
