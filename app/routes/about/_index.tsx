import type { JSX } from "react";

export default function Route(): JSX.Element {
	return (
		<div className="container mx-auto py-8 px-6 lg:px-8 space-y-16 max-w-2xl">

			{/* メタデータ -----✧ */}
			<title>コミックつくば！とは？ ✧ コミックつくば！</title>
			<meta name="description" content="コミックつくば！公式サイトです。"></meta>
			<meta property="og:image" content="https://www.comic-tsukuba.com/pictures/logo.png"></meta>
			<meta property="og:url" content="https://www.comic-tsukuba.com/about"></meta>
			<meta property="og:title" content="コミックつくば！とは？"></meta>
			<meta property="og:description" content="コミックつくば！公式サイトです。"></meta>
			<meta property="og:site_name" content="コミックつくば！"></meta>
			<meta name="twitter:card" content="summary"></meta>
			{/* ✧-------------- */}

			<div className="space-y-8 font-bold">
				<h2 className="text-2xl font-bold border-l-4 border-brand-main dark:border-brand-adjusted pl-3 mt-8 mb-4">コミックつくば！とは？</h2>
				<div>
					「コミックつくば！」は、筑波大発の同人誌即売会です。
					つくばという地における同人活動者と来場者との相互交流の促進、特に大学生の間での同人文化の振興を目指して、学生有志により企画されました。
				</div>
				<div>
					出展者を筑波大生向けに絞り、第1回(CT1)を2025年11月に、規模を縮小した「コミックつくば！別冊」の第1回(CTB1)を2026年5月に開催いたしました。
					現在は、筑波大生に限らず、多くの同人活動者の方々の交流の場となることを目指し、運営・計画をしております。
				</div>
			</div>
			<div className="space-y-8 font-bold">
				<h2 className="text-2xl font-bold border-l-4 border-brand-main dark:border-brand-adjusted pl-3 mt-8 mb-4">コミックつくば！準備会</h2>
				<div>
					「コミックつくば！準備会」とは、同イベントの開催に向けた準備や、当日の運営を行う団体です。
					筑波大学一般学生団体であり、大学公認のサークルという立ち位置にあります。
				</div>
				<div>
					現在15名程度のメンバーがいます。
					新メンバーも随時募集しておりますので、ご興味のある方はぜひご連絡ください（なお、大学サークルである都合上、スタッフは筑波大学構成員に限ります）。</div>
				<div>
					また、開催日が近づきましたら、開催日当日のみのスタッフも募集いたしますので、そちらの参加もぜひご検討ください。</div>
			</div>
			<div className="space-y-8 font-bold">
				<h2 className="text-2xl font-bold border-l-4 border-brand-main dark:border-brand-adjusted pl-3 mt-8 mb-4">おことわり</h2>
				<div>
					「コミックつくば！準備会」は、筑波大学一般学生団体でありますが、弊会が運営するイベントについて筑波大学は直接関与しておりません。
					大学へのお問い合わせはお控えいただき、弊会メールアドレスまでご連絡ください。
				</div>
			</div>
		</div>
	);
}
