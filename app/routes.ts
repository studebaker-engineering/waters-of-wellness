import { index, type RouteConfig, route } from "@react-router/dev/routes";

export default [
	index("pages/Home.tsx"),
	route("about", "pages/About.tsx", { id: "about" }),
	route("frequently-asked-questions", "pages/FrequentlyAskedQuestions.tsx"),
	route("contact", "pages/Contact.tsx"),

	route("services/colon-hydrotherapy", "pages/services/ColonHydrotherapy.tsx"),
	route("services/detox-wraps", "pages/services/DetoxWraps.tsx"),
	route("services/ionic-foot-detox", "pages/services/IonicFootDetox.tsx"),

	route("*", "pages/NotFound.tsx"),
] satisfies RouteConfig;
