import { Links, Meta, Outlet, Scripts, ScrollRestoration } from "react-router";
import "./app.css";
import { MainFooter } from "./layout/MainFooter";
import { MainNavigation } from "./layout/MainNavigation";

export function Layout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<head>
				<meta charSet="UTF-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				<link rel="icon" type="image/svg+xml" href="/waters-of-wellness.svg" />
				<link rel="stylesheet" href="https://use.typekit.net/cqn0cvy.css" />
				<title>Waters of Wellness</title>
				<Meta />
				<Links />
			</head>
			<body>
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
			<Outlet />
			<MainFooter />
		</>
	);
}
