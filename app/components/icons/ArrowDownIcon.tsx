import type { IconConfig } from "@/types";
import { BaseIcon } from "./BaseIcon";

export const ArrowDownIcon = (props: IconConfig) => (
	<BaseIcon {...props} title="Scroll down">
		<path
			d="M12 5v14M5 12l7 7 7-7"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
		/>
	</BaseIcon>
);
