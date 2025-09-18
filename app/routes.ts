import { type RouteConfig, index, layout, prefix, route } from "@react-router/dev/routes";

export default [
	layout("routes/common-layout.tsx", [
		index("routes/home.tsx"),
		route("about", "routes/about/_index.tsx"),
		route("application", "routes/application/_index.tsx"),
		route("exhibit", "routes/exhibit/_index.tsx"),
		route("general", "routes/general/_index.tsx"),
		route("contact", "routes/contact/_index.tsx"),
		...prefix("news", [
			index("routes/news/_index.tsx"),
			route("1", "routes/news/1.tsx"),
			route("2", "routes/news/2.tsx"),
			route("3", "routes/news/3.tsx"),
		]),
		...prefix("events", [
			route("001", "routes/events/001.tsx"),
		])
	]),
] satisfies RouteConfig;
