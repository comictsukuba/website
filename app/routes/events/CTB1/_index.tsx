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
				<h1 className="text-4xl font-bold text-fg tracking-tight">コミックつくば！別冊(CTB1) <br /> アフターレポート</h1>
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
					2026年5月30日、コミックつくば！の番外編イベント「コミックつくば！別冊(CTB1)」が無事に開催されました。多くの皆様にご来場いただき、誠にありがとうございました。
				</p>
				
				<div className="space-y-4">
					<h2 className="text-2xl font-bold border-l-4 border-brand-main dark:border-brand-adjusted pl-3 mt-8 mb-4">
						開催概要
					</h2>
					<p>
						当日は天候にも恵まれ、非常に賑やかな即売会となりました。
						出展者の皆様、そしてご来場いただいた皆様のおかげで、素晴らしい空間が作り上げられました。
					</p>
					<p>	
						今回は筑波大学内に新たに設置された施設、「未来社会デザイン棟」のオープニングセレモニーの一環という形での企画となりました。
						そのため、他の興行との兼ね合いもあり、CT1より規模を縮小し実施することとなりました。
						また、オープニングセレモニー内での実施がイレギュラーなものであるため、ナンバリングを分け、「別冊」という名称での実施となりました。
					</p>
					<p>
						オープニングイベント自体も、同大学内で実施された「宿舎祭(やどかり祭)」と日程・場所が重なっており、そちらからの参加者も多数いらっしゃいました。
					</p>
				</div>

				<div className="space-y-4">
					<h2 className="text-2xl font-bold border-l-4 border-brand-main dark:border-brand-adjusted pl-3 mt-8 mb-4">
						当日の様子
					</h2>
					<p>
						開場とともに多くの来場者がお目当てのサークルへ足を運び、様々な同人誌やグッズを手に取る様子が見られました。
						各出展スペースでの交流も盛んに行われ、筑波大学周辺の同人文化の盛り上がりを肌で感じることができる一日となりました。
						来場者数はのべ434人でした。
						また、つくば市外からお越しの方や、教職員の方のご来場もありました。
					</p>
				</div>

				<div className="space-y-4">
					<h2 className="text-2xl font-bold border-l-4 border-brand-main dark:border-brand-adjusted pl-3 mt-8 mb-4">
						お絵かきコーナー
					</h2>
					<p>
						今回新たな試みとして、ホワイトボードのお絵かきコーナーを設置いたしました。
						開場前から出展者の方々が続々とイラストなどを描いていらっしゃり、開場後は瞬く間にイラストで埋め尽くされ、急遽裏面も開放する形となりました。
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
