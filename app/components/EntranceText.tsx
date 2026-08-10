import { useGSAP } from "@gsap/react";
import type { ReactNode } from "react";
import { useRef } from "react";
import { gsap, SplitText } from "@/lib";

type HeadingLevel = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

interface PropTypes {
	children: ReactNode;
	as?: HeadingLevel;
	className?: string;
}

export const EntranceText = ({
	children,
	as: Heading = "h2",
	className = "md:text-3xl text-2xl",
}: PropTypes) => {
	const textRef = useRef<HTMLHeadingElement>(null);

	useGSAP(
		() => {
			if (!textRef.current) return;

			const split = new SplitText(textRef.current, { type: "chars" });

			gsap.from(split.chars, {
				opacity: 0,
				y: 12,
				duration: 0.5,
				delay: 0.3,
				ease: "power2.out",
				stagger: 0.03,
				scrollTrigger: {
					trigger: textRef.current,
					start: "top 90%",
				},
			});
		},
		{ scope: textRef },
	);

	return (
		<Heading ref={textRef} className={className}>
			{children}
		</Heading>
	);
};
