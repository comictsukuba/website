import type { JSX } from "react";

export default function Route(): JSX.Element {
	return (
		<div className="container mx-auto py-8 space-y-16 max-w-md">

			{/* メタデータ -----✧ */}
			<title>コミックつくば！とは？ ✧ コミックつくば！</title>
			<meta name="description" content="コミックつくば！公式サイトです。"></meta>
			<meta property="og:image" content="https://www.comic-tsukuba.com/pictures/banner_CT1.png"></meta>
			<meta property="og:url" content="https://www.comic-tsukuba.com/about"></meta>
			<meta property="og:title" content="コミックつくば！とは？"></meta>
			<meta property="og:description" content="コミックつくば！公式サイトです。"></meta>
			<meta property="og:site_name" content="コミックつくば！"></meta>
			<meta name="twitter:card" content="summary"></meta>
			{/* ✧-------------- */}

			<div className="space-y-8 font-bold">
				<h2 className="text-2xl text-center">コミックつくば！とは？</h2>
				<div>
					コミックつくば！は、大学生を主たる出展者とした、学内同人誌即売会です。筑波大学における同人活動者と来場者との相互交流の促進、大学生の間での同人文化の振興を目指して、学生有志により企画されました。
				</div>
				<div>
					第一回は2025年11月上旬の開催を目指しています。
				</div>
			</div>
			<div className="space-y-8 font-bold">
				<h2 className="text-2xl text-center">コミックつくば！準備会</h2>
				<div>　コミックつくば！準備会とは、同イベントの開催に向けた準備や、当日の運営を行う団体です。</div>
				<div>　現在10名程度のメンバーがいます。新メンバーも募集していますので、興味がある方はぜひご連絡ください。（なお筑波大学構成員に限ります。）</div>
				<div>　また、開催日が近づきましたら、開催日当日のみのスタッフも募集いたしますので、そちらの参加もぜひご検討ください。</div>
			</div>
		</div>
	);
}
