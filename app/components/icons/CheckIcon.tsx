import type { IconConfig } from "@/types";
import { BaseIcon } from "./BaseIcon";

export const CheckIcon = (props: IconConfig) => (
	<BaseIcon {...props} title="Check icon">
		<path
			d="M5 13l4 4L19 7"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
		/>
	</BaseIcon>
);
