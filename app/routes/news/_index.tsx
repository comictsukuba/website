import type { JSX } from "react";
import { Link } from "react-router";

export default function Route(): JSX.Element {
	return (
		<div className="mt-12 mb-28 font-bold max-w-[720px] mx-auto"> {/* News */}

			{/* メタデータ -----✧ */}
			<title>お知らせ ✧ コミックつくば！</title>
			<meta name="description" content="コミックつくば！公式サイトです。"></meta>
			{/* ✧-------------- */}

			<h2 className="text-center text-3xl mb-12">NEWS</h2>
			<div className="mt-4 space-y-4">
				<div className="grid grid-cols-3 items-center border-black border-b-2 py-2 transition-transform duration-200 ease-out hover:scale-105">
					<span className="text-lg text-left pl-6">2025.10.29</span>
					<span className="text-xl text-center">
						<Link to="/news/4" className="hover:underline">第1回開催情報</Link>
					</span>
				</div>
				<div className="grid grid-cols-3 items-center border-black border-b-2 py-2 transition-transform duration-200 ease-out hover:scale-105">
					<span className="text-lg text-left pl-6">2025.08.01</span>
					<span className="text-xl text-center">
						<Link to="/news/3" className="hover:underline">出展参加申し込み開始</Link>
					</span>
				</div>
				<div className="grid grid-cols-3 items-center border-black border-b-2 py-2 transition-transform duration-200 ease-out hover:scale-105">
					<span className="text-lg text-left pl-6">2025.04.01</span>
					<span className="text-xl text-center">
						<Link to="/news/1" className="hover:underline">Webサイト開設のお知らせ</Link>
					</span>
				</div>
			</div>
		</div>
	)
}
