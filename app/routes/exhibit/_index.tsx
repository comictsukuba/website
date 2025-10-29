import type { JSX } from "react";
import { LargeLinkButton } from "~/components/common/button/LargeLinkButton";

export default function Route(): JSX.Element {
	return (
		<div className="container mx-auto py-8 text-center">

			{/* メタデータ -----✧ */}
			<title>出展参加申し込み ✧ コミックつくば！</title>
			<meta name="description" content="コミックつくば！公式サイトです。"></meta>
			<meta property="og:image" content="https://www.comic-tsukuba.com/pictures/logo.png"></meta>
			<meta property="og:url" content="https://www.comic-tsukuba.com/exhibit"></meta>
			<meta property="og:title" content="出展参加申し込み"></meta>
			<meta property="og:description" content="コミックつくば！公式サイトです。"></meta>
			<meta property="og:site_name" content="コミックつくば！"></meta>
			<meta name="twitter:card" content="summary"></meta>
			{/* ✧-------------- */}

			<h1 className="text-3xl font-bold">
				出展参加申し込み
			</h1>
			<p className="mt-8">
				第１回コミックつくば！の出展募集は締め切りました。<br />
				おかげさまで、募集予定枠を大きく上回る結果となりました。ご応募いただいた皆様、ありがとうございました！
			</p>
			<div className="mt-8 h-fit flex justify-center">
				<LargeLinkButton to="/events/CT1" label="第１回開催情報はこちら！" />
			</div>
		</div>
	);
}
