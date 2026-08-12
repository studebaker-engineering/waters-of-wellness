import { type MouseEvent, type ReactNode, useEffect, useRef } from "react";
import { ArrowDownIcon } from "@/components/icons";
import type { heroImageSources } from "@/lib/media";

interface HeroVideoSource {
	src: string;
	media?: string;
}

type HeroMedia =
	| { type: "video"; poster: string; sources: HeroVideoSource[] }
	| { type: "image"; sources: ReturnType<typeof heroImageSources> };

interface HeroLink {
	label: string;
	targetId: string;
}

interface HeroProps {
	media: HeroMedia;
	title: ReactNode;
	subtext?: ReactNode;
	cta?: ReactNode;
	links?: HeroLink[];
	size?: "large" | "default";
	hasScrollIndicator?: boolean;
}

const SIZE_CLASSES: Record<NonNullable<HeroProps["size"]>, string> = {
	large: "h-[70vh] lg:h-[80vh] items-center",
	default: "h-screen items-start",
};

// Rule of thirds: rest the content block about a third of the way down
// the frame rather than dead-center or flush with the nav.
const CONTENT_TOP_CLASSES: Record<NonNullable<HeroProps["size"]>, string> = {
	large: "pt-16 lg:pt-5",
	default: "pt-[25vh]",
};

const scrollToTarget = (targetId: string) => (event: MouseEvent) => {
	event.preventDefault();
	const target = document.getElementById(targetId);
	if (!target) return;

	if (target instanceof HTMLDetailsElement) target.open = true;
	target.scrollIntoView({ behavior: "smooth", block: "start" });
};

export const Hero = ({
	media,
	title,
	subtext,
	cta,
	links,
	size = "default",
	hasScrollIndicator = true,
}: HeroProps) => {
	const sectionRef = useRef<HTMLElement>(null);
	const videoRef = useRef<HTMLVideoElement>(null);

	useEffect(() => {
		const video = videoRef.current;
		if (!video) return;

		// Safari can ignore the `muted` attribute and silently block
		// autoplay, leaving a play-button overlay. Setting the property
		// and calling play() imperatively works around that.
		video.muted = true;
		const play = () => video.play().catch(() => {});
		play();
		video.addEventListener("loadedmetadata", play);
		return () => video.removeEventListener("loadedmetadata", play);
	}, []);

	const scrollToContent = () => {
		sectionRef.current?.nextElementSibling?.scrollIntoView({
			behavior: "smooth",
			block: "start",
		});
	};

	return (
		<section
			ref={sectionRef}
			className={`relative z-0 flex overflow-hidden text-seafoam-50 ${SIZE_CLASSES[size]}`}
		>
			{media.type === "video" ? (
				<video
					ref={videoRef}
					className="absolute inset-0 h-full w-full object-cover"
					poster={media.poster}
					autoPlay
					loop
					muted
					playsInline
				>
					{media.sources.map((source) => (
						<source
							key={source.src}
							src={source.src}
							media={source.media}
							type="video/mp4"
						/>
					))}
				</video>
			) : (
				<picture>
					<source
						media="(max-width: 767px)"
						srcSet={media.sources.mobile}
						sizes="100vw"
					/>
					<source
						media="(min-width: 768px) and (max-width: 1023px)"
						srcSet={media.sources.tablet}
						sizes="100vw"
					/>
					<source
						media="(min-width: 1024px)"
						srcSet={media.sources.desktop}
						sizes="100vw"
					/>
					<img
						src={media.sources.fallbackSrc}
						alt=""
						className="absolute inset-0 h-full w-full object-cover"
						aria-hidden="true"
					/>
				</picture>
			)}
			<div className="absolute inset-0 bg-gray-800/25" />
			<div
				className="absolute inset-0 bg-noise opacity-20 mix-blend-overlay pointer-events-none"
				aria-hidden="true"
			/>
			<div
				className={`container relative z-10 mx-auto px-5 ${CONTENT_TOP_CLASSES[size]}`}
			>
				{title}
				{subtext && <p>{subtext}</p>}
				{cta && <div className="mt-5 flex gap-3">{cta}</div>}
				{links && links.length > 0 && (
					<div className="mt-5 flex flex-wrap gap-3">
						{links.map((link) => (
							<a
								key={link.targetId}
								href={`#${link.targetId}`}
								onClick={scrollToTarget(link.targetId)}
								className="border border-seafoam-100 hover:bg-seafoam-50/15 rounded-full px-5 py-2 text-center transition-hover"
							>
								{link.label}
							</a>
						))}
					</div>
				)}
			</div>
			{hasScrollIndicator && size === "default" && (
				<button
					type="button"
					onClick={scrollToContent}
					aria-label="Scroll to content"
					className="absolute bottom-5 left-1/2 z-10 flex h-10 w-10 -translate-x-1/2 items-center justify-center rounded-full bg-seafoam-50/15 p-2 text-seafoam-100 cursor-pointer animate-soft-bounce"
				>
					<ArrowDownIcon size={20} />
				</button>
			)}
		</section>
	);
};
