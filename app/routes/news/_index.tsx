import { Link } from "react-router";
import type { Route } from "./+types/_index";
import { getNewsList } from "~/models/news";

export function loader() {
	const newsList = getNewsList();
	return { newsList };
}

export default function Route({ loaderData }: Route.ComponentProps) {
	const { newsList } = loaderData;

	return (
		<div className="mt-12 mb-28 font-bold max-w-screen-xl mx-auto px-6 lg:px-8"> {/* News */}

			{/* メタデータ -----✧ */}
			<title>お知らせ ✧ コミックつくば！</title>
			<meta name="description" content="コミックつくば！公式サイトです。"></meta>
			<meta property="og:image" content="https://www.comic-tsukuba.com/pictures/logo.png"></meta>
			<meta property="og:url" content="https://www.comic-tsukuba.com/news"></meta>
			<meta property="og:title" content="お知らせ"></meta>
			<meta property="og:description" content="コミックつくば！公式サイトです。"></meta>
			<meta property="og:site_name" content="コミックつくば！"></meta>
			<meta name="twitter:card" content="summary"></meta>
			{/* ✧-------------- */}

			<h2 className="text-center text-3xl mb-12">お知らせ</h2>
			<div className="mt-4 space-y-4">
				{newsList.map((news) => (
					<div key={news.id} className="grid grid-cols-3 items-center border-black dark:border-white border-b-2 py-2 transition-transform duration-200 ease-out hover:scale-105">
						<span className="col-span-1 text-lg text-left pl-6">{news.date}</span>
						<span className="col-span-2 text-xl text-left pl-4">
							<Link to={`/news/${news.id}`} className="hover:underline">{news.title}</Link>
						</span>
					</div>
				))}
			</div>
		</div>
	)
}
