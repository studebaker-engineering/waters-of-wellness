import type { IconConfig } from "@/types";
import { BaseIcon } from "./BaseIcon";

export const ToggleIcon = (props: IconConfig) => (
	<BaseIcon
		{...props}
		title="Toggle"
		viewBox="0 0 24 24"
		tailwindFillColorClass="w-5 h-5 shrink-0 ml-3 transition-transform group-open:rotate-180"
	>
		<path
			d="M6 9l6 6 6-6"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
		/>
	</BaseIcon>
);
