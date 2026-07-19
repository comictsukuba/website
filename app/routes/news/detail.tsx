import type { Route } from "./+types/detail";
import { getNewsById } from "~/models/news";

export function loader({ params }: Route.LoaderArgs) {
	const { id } = params;
	const news = getNewsById(id);
	if (!news) {
		throw new Response("Not Found", { status: 404 });
	}
	return { news };
}

export default function Route({ loaderData }: Route.ComponentProps) {
	const { news } = loaderData;

	return (
		<div className="container mx-auto py-8 text-center max-w-screen-xl px-6">
			{/* メタデータ -----✧ */}
			<title>{`${news.title} ✧ コミックつくば！`}</title>
			<meta name="description" content="コミックつくば！公式サイトのお知らせ詳細です。"></meta>
			<meta property="og:image" content="https://www.comic-tsukuba.com/pictures/logo.png"></meta>
			<meta property="og:url" content={`https://www.comic-tsukuba.com/news/${news.id}`}></meta>
			<meta property="og:title" content={news.title}></meta>
			<meta property="og:description" content="コミックつくば！公式サイトのお知らせ詳細です。"></meta>
			<meta property="og:site_name" content="コミックつくば！"></meta>
			<meta name="twitter:card" content="summary"></meta>
			{/* ✧-------------- */}

			<div className="border-b border-fg-blink pb-6 max-w-2xl mx-auto text-left">
				<h1 className="text-4xl font-bold text-fg tracking-tight">{news.title}</h1>
				<p className="text-fg-muted mt-3 text-lg font-medium">{news.date}</p>
			</div>
			<div
				className="mt-8 text-left max-w-2xl mx-auto [&_p]:mt-4 [&_p:first-of-type]:mt-8 [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:border-l-4 [&_h2]:border-brand-main [&_h2]:dark:border-brand-adjusted [&_h2]:pl-3 [&_h2]:mt-8 [&_h2]:mb-4"
				dangerouslySetInnerHTML={{ __html: news.htmlContent }}
			/>
		</div>
	);
}
