import type { IconConfig } from "@/types";
import { BaseIcon } from "./BaseIcon";

export const ArrowRightIcon = (props: IconConfig) => (
	<BaseIcon {...props} title="Arrow right">
		<path
			d="M5 12h14M12 5l7 7-7 7"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
		/>
	</BaseIcon>
);
