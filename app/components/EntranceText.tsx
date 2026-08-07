import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { gsap, SplitText } from "@/lib";

interface PropTypes {
	text: string;
}

export const EntranceText = ({ text }: PropTypes) => {
	const textRef = useRef<HTMLHeadingElement>(null);

	useGSAP(
		() => {
			if (!textRef.current) return;

			const split = new SplitText(textRef.current, { type: "chars" });

			gsap.from(split.chars, {
				opacity: 0,
				y: 12,
				duration: 0.5,
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

	return <h2 ref={textRef}>{text}</h2>;
};
