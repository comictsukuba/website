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

			<h1 className="text-3xl font-bold">{news.title}</h1>
			<div
				className="mt-8 text-center max-w-2xl mx-auto [&_p]:mt-4 [&_p:first-of-type]:mt-8"
				dangerouslySetInnerHTML={{ __html: news.htmlContent }}
			/>
		</div>
	);
}
