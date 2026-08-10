import { Links, Meta, Outlet, Scripts, ScrollRestoration } from "react-router";
import "./app.css";
import { MainFooter } from "./layout/MainFooter";
import { MainNavigation } from "./layout/MainNavigation";
import { MEDIA_ORIGIN } from "./lib";

export function Layout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<head>
				<meta charSet="UTF-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />

				<link rel="icon" type="image/svg+xml" href="/waters-of-wellness.svg" />
				<link
					rel="icon"
					type="image/png"
					sizes="32x32"
					href="/favicon-32x32.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="16x16"
					href="/favicon-16x16.png"
				/>
				<link rel="icon" href="/favicon.ico" sizes="any" />
				<link
					rel="apple-touch-icon"
					sizes="180x180"
					href="/apple-touch-icon.png"
				/>
				<link rel="manifest" href="/site.webmanifest" />
				<meta name="theme-color" content="#ffffff" />

				<link rel="stylesheet" href="https://use.typekit.net/cqn0cvy.css" />
				<link rel="preconnect" href={MEDIA_ORIGIN} crossOrigin="anonymous" />

				<title>Waters of Wellness</title>
				<Meta />
				<Links />
			</head>
			<body className="min-h-screen flex flex-col">
				{children}
				<ScrollRestoration />
				<Scripts />
			</body>
		</html>
	);
}

export default function App() {
	return (
		<>
			<MainNavigation />
			<main className="flex-1">
				<Outlet />
			</main>
			<MainFooter />
		</>
	);
}

export function HydrateFallback() {
	return (
		<div className="flex flex-1 items-center justify-center min-h-screen bg-seafoam-100">
			<img
				src="/waters-of-wellness.svg"
				alt="Waters of Wellness"
				className="w-16 h-16 animate-pulse"
			/>
		</div>
	);
}
