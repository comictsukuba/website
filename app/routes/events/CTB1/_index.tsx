import type { JSX } from "react";
import ctb1Img from "~/assets/CTB1/ctb1.png";

// 画像の縦方向の切り抜き位置を微調整したい場合は、以下の値を書き換えてください。
// 例: "center top" (上端基準), "center 20%" (上から20%の位置を基準), "center 50%" (中央基準)
const IMAGE_ALIGNMENT = "center 10%";

export default function Index(): JSX.Element {
	return (
		<section className="w-full max-w-[800px] h-fit mx-auto px-6 lg:px-8 py-12 flex flex-col gap-8">
			{/* メタデータ -----✧ */}
			<title>CTB1 アフターレポート ✧ コミックつくば！</title>
			<meta name="description" content="コミックつくば！CTB1のアフターレポートです。"></meta>
			<meta property="og:image" content="https://www.comic-tsukuba.com/pictures/logo.png"></meta>
			<meta property="og:url" content="https://www.comic-tsukuba.com/events/CTB1"></meta>
			<meta property="og:title" content="CTB1 アフターレポート"></meta>
			<meta property="og:description" content="コミックつくば！CTB1のアフターレポートです。"></meta>
			<meta property="og:site_name" content="コミックつくば！"></meta>
			<meta name="twitter:card" content="summary"></meta>
			{/* ✧-------------- */}

			<div className="border-b border-fg-blink pb-6">
				<h1 className="text-4xl font-bold text-fg tracking-tight">CTB1 アフターレポート</h1>
				<p className="text-fg-muted mt-3 text-lg font-medium">2026.07.20</p>
			</div>

			<div className="w-full h-auto overflow-hidden rounded-xl shadow-sm">
				<img 
					src={ctb1Img} 
					alt="CTB1" 
					className="w-full h-auto object-cover max-h-[480px]" 
					style={{ objectPosition: IMAGE_ALIGNMENT }}
				/>
			</div>

			<article className="max-w-none text-fg leading-relaxed space-y-8 text-lg">
				<p>
					コミックつくば！の番外編（別冊）イベント「CTB1」が無事に開催されました。多くの皆様にご来場いただき、誠にありがとうございました。
				</p>
				
				<div className="space-y-4">
					<h2 className="text-2xl font-bold border-l-4 border-brand-main dark:border-brand-adjusted pl-3 mt-8 mb-4">
						開催概要
					</h2>
					<p>
						当日は天候にも恵まれ、非常に賑やかな即売会となりました。出展サークルの皆様、そしてご来場いただいた一般参加の皆様の熱気により、素晴らしい空間が作り上げられました。
					</p>
				</div>

				<div className="space-y-4">
					<h2 className="text-2xl font-bold border-l-4 border-brand-main dark:border-brand-adjusted pl-3 mt-8 mb-4">
						当日の様子
					</h2>
					<p>
						開場とともに多くの来場者がお目当てのサークルへ足を運び、様々な同人誌やグッズを手に取る様子が見られました。各ブースでの交流も盛んに行われ、筑波大学周辺の同人文化の盛り上がりを肌で感じることができる一日となりました。
					</p>
				</div>

				<div className="space-y-4">
					<h2 className="text-2xl font-bold border-l-4 border-brand-main dark:border-brand-adjusted pl-3 mt-8 mb-4">
						おわりに
					</h2>
					<p>
						本イベントの開催にあたり、ご協力いただいた関係各所の皆様に心より感謝申し上げます。今後とも「コミックつくば！」をよろしくお願いいたします。
					</p>
				</div>
			</article>
		</section>
	);
}
