import { useState, type JSX } from "react";
import ctb1Img from "~/assets/CTB1/ctb1_key.png";
import ctb1KeyOgImg from "~/assets/CTB1/ctb1_key_og.png";
import illust1Img from "~/assets/CTB1/illust1.jpeg";
import illust2Img from "~/assets/CTB1/illust2.jpeg";

// 画像の縦方向の切り抜き位置を微調整したい場合は、以下の値を書き換えてください。
// 例: "center top" (上端基準), "center 20%" (上から20%の位置を基準), "center 50%" (中央基準)

export default function Index(): JSX.Element {
	const [activeImage, setActiveImage] = useState<string | null>(null);

	return (
		<section className="w-full max-w-[800px] h-fit mx-auto px-6 lg:px-8 py-12 flex flex-col gap-8">
			{/* メタデータ -----✧ */}
			<title>CTB1 アフターレポート ✧ コミックつくば！</title>
			<meta name="description" content="コミックつくば！CTB1のアフターレポートです。"></meta>
			<meta property="og:image" content={`https://www.comic-tsukuba.com${ctb1KeyOgImg}`}></meta>
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

			<div className="w-full h-auto overflow-hidden rounded-xl shadow-sm cursor-zoom-in">
				<img 
					src={ctb1Img} 
					alt="CTB1" 
					className="w-full h-auto object-cover transition-transform  hover:scale-[1.02]" 
					onClick={() => setActiveImage(ctb1Img)}
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
					<div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
						<div className="flex justify-center items-center bg-bg-muted p-4 rounded-xl shadow-sm border border-fg-blink cursor-zoom-in overflow-hidden">
							<img 
								src={illust1Img} 
								alt="お絵かきイラスト1" 
								className="max-w-full max-h-[400px] h-auto object-contain transition-transform duration-300 hover:scale-[1.05]" 
								onClick={() => setActiveImage(illust1Img)}
							/>
						</div>
						<div className="flex justify-center items-center bg-bg-muted p-4 rounded-xl shadow-sm border border-fg-blink cursor-zoom-in overflow-hidden">
							<img 
								src={illust2Img} 
								alt="お絵かきイラスト2" 
								className="max-w-full max-h-[400px] h-auto object-contain transition-transform duration-300 hover:scale-[1.05]" 
								onClick={() => setActiveImage(illust2Img)}
							/>
						</div>
					</div>
					<p>
						大盛況でしたので、次回以降も継続して実施したいと考えております。
					</p>
				</div>

				<div className="space-y-4">
					<h2 className="text-2xl font-bold border-l-4 border-brand-main dark:border-brand-adjusted pl-3 mt-8 mb-4">
						見本誌コーナー
					</h2>
					<p>
						前回CT1では委託頒布の本のみを見本誌として展示しておりましたが、今回は全出展者の見本誌を展示いたしました。
						これは小規模な今回だからこそできたことだと思います。
						見本誌を見てから個別に出展者を訪ねたり、知らないジャンルの開拓活動の一助となったと考えています。
					</p>
					<p>
						特に、今回はWeb上での出展者一覧の作成が間に合わず、出展者の皆様の宣伝を行う機会が少なくなってしまいました。
						そこで、見本誌を見ていただくことで、多少なりとも各出展者と来場者の交流のきっかけとなったと考えています。
					</p>
				</div>

				<div className="space-y-4">
					<h2 className="text-2xl font-bold border-l-4 border-brand-main dark:border-brand-adjusted pl-3 mt-8 mb-4">
						おわりに
					</h2>
					<p>
						別冊として実施した今回は、「コミックつくば！」というイベントの認知度を上げることに繋がったと感じました。
						一方、課題も多く見つかりましたので、回を重ねる度により良いものに出来るよう、準備会一同努めてまいります。
					</p>
					<p>
						今回出展してくださった皆様、並びにご来場いただいた皆様に、心から感謝申し上げます。
					</p>
				</div>

				<div className="space-y-4">
					<h2 className="text-2xl font-bold border-l-4 border-brand-main dark:border-brand-adjusted pl-3 mt-8 mb-4">
						次回開催について
					</h2>
					<p>
						当初、筑波大学構成員を出展者として募集する「第2回コミックつくば！(CT2)」を、2026年度筑波大学学園祭「雙峰祭」で実施予定でした。
						しかし、諸般の事情により雙峰祭での開催が困難となり、現在代替案を検討しております。
					</p>
					<p>
						また、筑波大学構成員以外も出展者として募集し、より大規模な同人誌即売会を大学外で実施することを強く検討しております。
						具体的な日程、場所が決まり次第、出展者募集や来場のご案内に関する情報を発信いたします。
						当Webサイト、および準備会公式SNSをご確認ください。
					</p>
				</div>

				<div className="space-y-4">
					文責 : ゆきみず
				</div>
			</article>

			{/* 画像拡大モーダル */}
			{activeImage && (
				<div 
					className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4 cursor-zoom-out animate-fade-in"
					onClick={() => setActiveImage(null)}
				>
					<img 
						src={activeImage} 
						alt="拡大画像" 
						className="max-w-[95vw] max-h-[95vh] object-contain rounded-lg shadow-2xl transition-transform duration-200"
					/>
				</div>
			)}
		</section>
	);
}
