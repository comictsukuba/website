import { type RouteConfig, index, layout, prefix, route } from "@react-router/dev/routes";

export default [
	layout("routes/common-layout.tsx", [
		index("routes/home_default.tsx"),
		route("about", "routes/about/_index.tsx"),
		route("general", "routes/general/_index.tsx"),
		route("contact", "routes/contact/_index.tsx"),
		...prefix("news", [
			index("routes/news/_index.tsx"),
			route(":id", "routes/news/detail.tsx"),
		]),
		...prefix("events", [
			index("routes/events/_index.tsx"),
			...prefix("CT1", [
				index("routes/events/CT1/_index.tsx"),
				route("catalog", "routes/events/CT1/catalog.tsx"),
			]),
			...prefix("CTB1", [
				index("routes/events/CTB1/_index.tsx"),
			])
		])
	])
] satisfies RouteConfig;
