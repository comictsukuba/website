import type { JSX } from "react";
import { LargeLinkButton } from "~/components/common/button/LargeLinkButton";

export default function Route(): JSX.Element {
	return (
		<div className="container mx-auto py-8 px-6 lg:px-8 text-center max-w-screen-xl">
			{/* メタデータ -----✧ */}
			<title>開催情報一覧 ✧ コミックつくば！</title>
			<meta name="description" content="コミックつくば！公式サイトの開催情報一覧です。"></meta>
			<meta property="og:image" content="https://www.comic-tsukuba.com/pictures/logo.png"></meta>
			<meta property="og:url" content="https://www.comic-tsukuba.com/events"></meta>
			<meta property="og:title" content="開催情報一覧"></meta>
			<meta property="og:description" content="コミックつくば！公式サイトの開催情報一覧です。"></meta>
			<meta property="og:site_name" content="コミックつくば！"></meta>
			<meta name="twitter:card" content="summary"></meta>
			{/* ✧-------------- */}

			<h1 className="text-3xl font-bold">開催情報一覧</h1>
			<p className="mt-8">
				過去の開催情報はこちら
			</p>
			<div className="mt-8 h-fit flex justify-center">
				<LargeLinkButton to="/events/CT1" label="第１回コミックつくば！開催案内" />
			</div>
		</div>
	);
}
