import { CalendarIcon, LibraryBigIcon, MapPinIcon } from "lucide-react";
import type { JSX } from "react";
import { BouncyNumber } from "~/components/common/BouncyNumber";
import { LargeLinkButton } from "~/components/common/button/LargeLinkButton";
import { DataList } from "~/components/common/datalist/DataList";
import { Section } from "~/components/common/Section";
import type { Route } from "./+types/_index";

export async function loader({ params }: Route.LoaderArgs): Promise<{ date: string, place: string, participantCount: string }> {
	return {
		date: `第51回雙峰祭当日（${new Date("2025-11-02").toLocaleDateString("ja-JP")}, ${new Date("2025-11-03").toLocaleDateString("ja-JP")}）`,
		place: "筑波大学内",
		participantCount: "XX", // TODO: 仮の値。バックエンドから取得できるようになったら置き換える
	};
}

export default function Index({ loaderData }: Route.ComponentProps): JSX.Element {
	return (
		<section className="w-full max-w-[1024px] h-fit mx-auto px-4 py-6 flex flex-col gap-6">

			{/* メタデータ -----✧ */}
			<title>第１回コミックつくば！開催案内 ✧ コミックつくば！</title>
			<meta name="description" content="コミックつくば！公式サイトです。"></meta>
			{/* ✧-------------- */}

			<h1 className="text-2xl font-bold text-fg">第１回コミックつくば！開催案内</h1>
			<div className="w-full h-fit flex flex-col gap-6">
				<DataList items={[
					{ icon: <CalendarIcon size={18} />, label: "日時", value: loaderData.date },
					{ icon: <MapPinIcon size={18} />, label: "場所", value: loaderData.place },
					{
						icon: <LibraryBigIcon size={18} />, label: "出展者／団体数", value: (
							<span className="flex flex-row items-baseline gap-1">
								<BouncyNumber value={loaderData.participantCount} />
								人／団体
							</span>
						)
					}
				]} />
				<div className="w-full h-[1px] bg-fg-blink border-full" />
				<div className="w-full h-fit py-8 flex items-center justify-center">
					<LargeLinkButton to={"./catalog"} label="出展一覧はこちら" />
				</div>
				<Section heading="フロアマップ">
					<div className="w-full aspect-video bg-gray-200" />
				</Section>
				<Section heading="注意事項">
					<ul className="list-disc list-inside flex flex-col gap-1 pl-2">
					</ul>
				</Section>
			</div>
		</section>
	);
}